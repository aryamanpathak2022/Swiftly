# authentication.py
from .models import User

def custom_jwt_payload_handler(user):
    return {
        'firstname': user.firstname,
        # Add other fields you want to include in the payload
    }
