from datetime import datetime, timedelta
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession
from src.book.models import Book, BorrowedBooks
from src.book.schemas import BookCreateModel, BookIssueModel


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
        user = result.scalar()
        return user
    
    async def get_issued_book(self, user_uid: str, book_isbn: str, session: AsyncSession):
        statement = select(BorrowedBooks).where(BorrowedBooks.user_uid == user_uid, BorrowedBooks.book_isbn == book_isbn)
        
        result = await session.execute(statement)
        user = result.scalar()
        return user
    
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
            return book_in_db
        
        else:
            return None