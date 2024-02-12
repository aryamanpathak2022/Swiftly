# myapp/urls.py
from django.urls import path
from .views import *


urlpatterns = [
    path('', UserList.as_view(), name='my-model-list'),
     path('login', UserLogin.as_view(), name='my-model-list'),

    # Add other URLs as needed
]
