from datetime import datetime, timedelta
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession
from src.auth.services import AuthServices
from src.book.models import Book, BorrowedBooks
from src.book.schemas import BookCreateModel, EmailSchema
from src.book.utils import send_email

auth_services = AuthServices()

class BookServices:
    
    async def add_new_book(self, book: BookCreateModel, session: AsyncSession):
        book_data = book.model_dump()
        
        new_book = Book(
            ** book_data
        )
        
        session.add(new_book)
        await session.commit()
        return new_book
    
    async def get_book_by_isbn(self, book_isbn: str, session: AsyncSession):
        statement = select(Book).where(Book.isbn == book_isbn)
        
        result = await session.execute(statement)
        book = result.scalar()
        return book
    
    async def get_issued_book(self, user_uid: str, book_isbn: str, session: AsyncSession):
        statement = select(BorrowedBooks).where(BorrowedBooks.user_uid == user_uid, BorrowedBooks.book_isbn == book_isbn)
        
        result = await session.execute(statement)
        book = result.scalar()
        return book
    
    async def get_returned_book(self, user_uid: str, book_isbn: str, session: AsyncSession):
        statement = select(BorrowedBooks).where(BorrowedBooks.user_uid == user_uid, BorrowedBooks.book_isbn == book_isbn, BorrowedBooks.is_returned == False)
        
        result = await session.execute(statement)
        book = result.scalar()
        return book
    
    async def get_borrowed_book_of_user(self, user_uid: str, session: AsyncSession):
        statement = select(BorrowedBooks).where(BorrowedBooks.user_uid == user_uid)
        
        result = await session.execute(statement)
        books = result.scalars()
        return books
    
    async def issue_book(self, user_uid: str, book_isbn: str, lib_uid: str,session: AsyncSession):
        
        book = await self.get_issued_book(user_uid=user_uid, book_isbn=book_isbn, session=session)
        
        if not book: 
            issued_book = BorrowedBooks()
            
            issued_book.book_isbn = book_isbn
            issued_book.user_uid = user_uid
            issued_book.issued_by = lib_uid
            issued_book.return_date = datetime.today() + timedelta(days=15)
            
            session.add(issued_book)
            
            book_in_db = await self.get_book_by_isbn(book_isbn = book_isbn, session = session)
            book_in_db.quantity -= 1
            
            await session.commit()
            
            user = await auth_services.get_user_by_uid(uid=user_uid, session=session)
            user_email = user.email
            
            email_data = EmailSchema(
                email=user_email,
                subject=f"Successfully issued {book_in_db.book_name}",
                body=f"Dear subscriber book: '{book_in_db.book_name}' was successfully issued on {issued_book.issue_date.date()} and it is to be returned on or before {issued_book.return_date.date()}'"
            
            )
            send_email(email_data = email_data)
            
            return book_in_db
        
        elif book.is_returned:
            issued_book = BorrowedBooks()
            
            issued_book.book_isbn = book_isbn
            issued_book.user_uid = user_uid
            issued_book.issued_by = lib_uid
            issued_book.return_date = datetime.today() + timedelta(days=15)
            
            session.add(issued_book)
            
            book_in_db = await self.get_book_by_isbn(book_isbn = book_isbn, session = session)
            book_in_db.quantity -= 1
            
            await session.commit()
            return book_in_db
        else:
            return None
        
    async def return_book(self, user_uid: str, book_isbn: str, session: AsyncSession):
        issued_book = await self.get_returned_book(user_uid=user_uid, book_isbn=book_isbn, session=session)
        
        if issued_book:
            
            issued_book.is_returned = True
            
            book_in_db = await self.get_book_by_isbn(book_isbn = book_isbn, session = session)
            book_in_db.quantity += 1
            
            await session.commit()
            return issued_book
        
        else:
            return None