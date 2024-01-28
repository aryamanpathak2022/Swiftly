from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import User
from .serializers import UserSerializer

class UserList(APIView):
    def get(self, request):
        try:
            data = User.objects.all()
            serializer = UserSerializer(data, many=True)
            return Response(serializer.data)
        except Exception as e:
            # Log the exception for debugging purposes
            print(f"Exception in get request: {str(e)}")
            return Response({"error": "An internal server error occurred"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request):
        print(request.data)  # Print the received data for debugging purposes
        try:
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            # Log the exception for debugging purposes
            print(f"Exception in post request: {str(e)}")
            return Response({"error": "An internal server error occurred"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
