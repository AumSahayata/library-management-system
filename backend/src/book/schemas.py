from pydantic import BaseModel

class BookCreateModel(BaseModel):
    isbn: str
    book_name: str
    quantity: int
    
class BookIssueModel(BaseModel):
    user_uid: str