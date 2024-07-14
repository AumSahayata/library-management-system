import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from fastapi import HTTPException
from src.book.schemas import EmailSchema

def send_email(email_data: EmailSchema):
    sender_email = "bibliothekservices@gmail.com"
    password = "zfnwkjnmkhjwczvm"
    receiver_email = email_data.email
    subject = email_data.subject
    body = email_data.body

    smtp_server = smtplib.SMTP("smtp.gmail.com", 587)
    smtp_server.starttls()

    try:
        smtp_server.login(sender_email, password)
        message = MIMEMultipart()
        message['From'] = sender_email
        message['To'] = receiver_email
        message['Subject'] = subject

        message.attach(MIMEText(body, 'plain'))
        smtp_server.sendmail(sender_email, receiver_email, message.as_string())
        smtp_server.quit()
        return {"message": "Email sent successfully"}
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
