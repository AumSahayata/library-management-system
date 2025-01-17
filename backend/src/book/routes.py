from typing import List
from fastapi import APIRouter, Depends, HTTPException, Request, status

from src.book.models import BorrowedBooks
from .services import BookServices
from src.db.main import get_session
from .schemas import BookCreateModel, BookIssueModel
from sqlmodel.ext.asyncio.session import AsyncSession


book_router = APIRouter()
book_services = BookServices()

@book_router.post("/new", status_code=status.HTTP_201_CREATED)
async def add_new_book(request: Request, book_data: BookCreateModel, session: AsyncSession = Depends(get_session)):
    
    user = request.state.user
    
    if user.role == 1:
        new_book = await book_services.add_new_book(book = book_data, session = session)
        
        if new_book:
            return new_book
        else:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Something went wrong")
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Only librarian can add new book")
    
@book_router.post("/issue/{book_isbn}")
async def issue_book_to_user(request: Request, issue_model: BookIssueModel, book_isbn: str, session: AsyncSession = Depends(get_session)):
    user = request.state.user
    
    if user.role == 1:
        lib_uid = user.uid
        book = await book_services.issue_book(user_uid=issue_model.user_uid, book_isbn=book_isbn, lib_uid=lib_uid, session=session)
        
        if book:
            return book
        else:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Something went wrong")
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Only librarian can issue book")
    
@book_router.patch("/return/{book_isbn}")
async def book_returned_by_user(request: Request, issue_model: BookIssueModel, book_isbn: str, session: AsyncSession = Depends(get_session)):
    user = request.state.user
    
    if user.role == 1:
        book = await book_services.return_book(user_uid=issue_model.user_uid, book_isbn=book_isbn, session=session)
        
        if book:
            return book
        else:
            raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST,detail="Something went wrong")
    else:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Only librarian can access book returns")
    
@book_router.get("/borrowed", response_model=List[BorrowedBooks])
async def get_borrowed_books(request: Request, session: AsyncSession = Depends(get_session)):
    user = request.state.user
    
    if user:
        user_uid = user.uid
        books = await book_services.get_borrowed_book_of_user(user_uid=user_uid, session=session)
        
        if books:
            return books