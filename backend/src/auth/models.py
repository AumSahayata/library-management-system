from datetime import datetime
import uuid
from sqlmodel import Field, Column, SQLModel
import sqlalchemy.dialects.postgresql as pg

class User(SQLModel, table=True):
    __tablename__ = "user"
    uid: uuid.UUID = Field(
        sa_column = Column(
            pg.UUID,
            nullable = False,
            primary_key = True,
            default = uuid.uuid4
        )
    )
    first_name: str
    last_name: str
    username: str = Field(unique=True)
    email: str
    password_hash: str = Field(exclude=True)
    role: int
    phone_number: str
    address: str
    created_at: datetime = Field(sa_column=Column(pg.TIMESTAMP, default=datetime.now))