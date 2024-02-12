from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from django.contrib.auth.hashers import make_password, check_password
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
# from django.contrib.auth import get_user_model
from rest_framework_simplejwt.tokens import RefreshToken
from .authentication import custom_jwt_payload_handler
from rest_framework_jwt.settings import api_settings
# from rest_framework_jwt import jwt


# User = get_user_model()

class UserList(APIView):


    def post(self, request):
        try:
            # Assuming 'firstname' and 'password' are present in the POST parameters
            firstname = request.data.get('firstname')
            password = request.data.get('password')

            # # Check if the user already exists in the database
            # user_exists = User.objects.filter(firstname=firstname).exists()

            # if user_exists:
            #     # If user exists, perform login by checking the provided password
            #     
            #     password_match = check_password(password, user.password)
            #     print(firstname)
            #     return Response({"password_match": password_match})

            # else:
            # If user does not exist, perform registration
            hashed_password = make_password(password)
             # //data is all fields from user
             
            serializer = UserSerializer(data={'firstname': firstname, 'password': hashed_password
                                               , **request.data}, context={'request': request})
            if serializer.is_valid():
                 serializer.save()
                 user = User.objects.get(firstname=firstname)
                 refresh = RefreshToken.for_user(user)
                 access_token = str(refresh.access_token)
                 print(access_token) 
                 print("hello")
                 return Response({"access_token": access_token, "user": serializer.data}, status=status.HTTP_201_CREATED)
                
            print(serializer) 
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # Log the exception for debugging purposes
            print(f"Exception in post request: {str(e)}")
            return Response({"error": "An internal server error occurred"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class UserLogin(APIView):
    def post(self, request):
        firstname = request.data.get('firstname')  # Assuming the frontend sends firstname as username
        password = request.data.get('password')

        # Check if firstname and password are provided
        if not firstname or not password:
            return Response({"error": "Please provide both firstname and password"}, status=status.HTTP_400_BAD_REQUEST)

        # Authenticate user
        try:
            user = User.objects.get(firstname=firstname)
        except User.DoesNotExist:
            user = None

        if check_password( password,user.password):
            # User credentials are correct, generate JWT token
            # jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
            jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

            # payload = custom_jwt_payload_handler(user)
            # token = jwt.encode(payload)

            token = RefreshToken.for_user(user
            )

            # Return the JWT token along with other user details if needed
            return Response({
                "token": str(token),
                "user_id": user.id,
                "firstname": user.firstname,
            }, status=status.HTTP_200_OK)
        else:
            # User credentials are incorrect
            print("you fucked up")
            print(request.data.get('firstname'))
            print(password)
            return Response({"error": "Invalid firstname or password"}, status=status.HTTP_401_UNAUTHORIZED)
        