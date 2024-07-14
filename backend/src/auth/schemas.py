from pydantic import BaseModel, Field

class UserLoginModelUsername(BaseModel):
    username: str
    password: str
    
class UserLoginModelEmail(BaseModel):
    email: str
    password: str
    
class UserCreateModel(BaseModel):
    first_name: str
    last_name: str
    username: str
    email: str
    password: str = Field(min_length=6)
    role: int
    phone_number: str = Field(min_length=10)
    address: str
    
class TokenData(BaseModel):
    uid: str
    role: int