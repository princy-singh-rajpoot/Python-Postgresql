from django.db import models
<<<<<<< HEAD
from django.contrib.auth.models import User

# Create your models here.
class Vendor(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    address = models.TextField(null=True)

class ProductCategory(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=50)
    detail = models.TextField(null=True)
    
    def __str__(self):
        return self.title
    
class Product(models.Model):
    title = models.CharField(max_length=200)
    detail = models.TextField(null=True)
    price = models.FloatField()
    
    def __str__(self):
        return self.title
=======

# Create your models here.
# class Vendor(models.model):
>>>>>>> 417a2fac13ce5b2a5b22a2825cc31974a06d9578
