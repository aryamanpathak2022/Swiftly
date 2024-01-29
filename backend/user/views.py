from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer
from django.contrib.auth.hashers import make_password, check_password

class UserList(APIView):
    def post(self, request):
        try:
            # Assuming 'firstname' and 'password' are present in the POST parameters
            firstname = request.data.get('firstname')
            password = request.data.get('password')

            # Check if the user already exists in the database
            user_exists = User.objects.filter(firstname=firstname).exists()

            if user_exists:
                # If user exists, perform login by checking the provided password
                user = User.objects.get(firstname=firstname)
                password_match = check_password(password, user.password)
                print(firstname)
                return Response({"password_match": password_match})

            else:
                # If user does not exist, perform registration
                hashed_password = make_password(password)
                serializer = UserSerializer(data={'firstname': firstname, 'password': hashed_password})

                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            # Log the exception for debugging purposes
            print(f"Exception in post request: {str(e)}")
            return Response({"error": "An internal server error occurred"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
