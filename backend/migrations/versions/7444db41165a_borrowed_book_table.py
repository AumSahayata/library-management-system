"""borrowed book table

Revision ID: 7444db41165a
Revises: 3294dafdaba9
Create Date: 2024-07-14 14:38:41.437621

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa
import sqlmodel
from sqlalchemy.dialects import postgresql

# revision identifiers, used by Alembic.
revision: str = '7444db41165a'
down_revision: Union[str, None] = '3294dafdaba9'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('borrowed_books',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_uid', sqlmodel.sql.sqltypes.GUID(), nullable=False),
    sa.Column('book_isbn', sqlmodel.sql.sqltypes.AutoString(), nullable=False),
    sa.Column('issued_by', sqlmodel.sql.sqltypes.GUID(), nullable=False),
    sa.Column('issue_date', postgresql.TIMESTAMP(), nullable=True),
    sa.Column('return_date', sa.DateTime(), nullable=False),
    sa.Column('is_returned', sa.Boolean(), nullable=False),
    sa.ForeignKeyConstraint(['book_isbn'], ['book.isbn'], ),
    sa.ForeignKeyConstraint(['issued_by'], ['user.uid'], ),
    sa.ForeignKeyConstraint(['user_uid'], ['user.uid'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('borrowed_books')
    # ### end Alembic commands ###