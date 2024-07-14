from datetime import date, datetime
import uuid
from sqlmodel import Field, Column, SQLModel
import sqlalchemy.dialects.postgresql as pg

class Book(SQLModel, table = True):
    __tablename__ = "book"
    isbn: str = Field(primary_key=True)
    book_name: str
    quantity: int
    
class BorrowedBooks(SQLModel, table = True):
    __tablename__ = "borrowed_books"
    user_uid: uuid.UUID = Field(foreign_key="user.uid", default=None, primary_key=True)
    book_isbn: str = Field(foreign_key="book.isbn", default=None, primary_key=True)
    issued_by: uuid.UUID = Field(foreign_key="user.uid", default=None)
    issue_date: datetime = Field(sa_column=Column(pg.TIMESTAMP, default=datetime.today()))
    return_date: datetime
    is_returned: bool = Field(default=False)