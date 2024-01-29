from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['firstname', 'lastname', 'email', 'password', 'address', 'phone']

    def create(self, validated_data):
        # Hash the raw password before saving
        validated_data['password'] = make_password(validated_data.get('password'))
        return super().create(validated_data)
