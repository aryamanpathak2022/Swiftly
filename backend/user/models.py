# myapp/models.py
from django.db import models

class User(models.Model):
    #firstname ,lastname ,email,password,address,phone nunber
    firstname = models.CharField(max_length=30)
    # username=firstname
    lastname = models.CharField(max_length=30)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=30)
    address = models.CharField(max_length=30)
    phone = models.CharField(max_length=30)
    




    # Add other fields as needed
