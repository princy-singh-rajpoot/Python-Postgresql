from django.shortcuts import render
from rest_framework import generics, permissions
from . import serializers,models

# Create your views here.
class VendorList(generics.ListCreateAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorSerializer
    
class VendorDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Vendor.objects.all()
    serializer_class = serializers.VendorDetailSerializer
    
class ProductList(generics.ListCreateAPIView): 
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductListSerializer
    
class ProductDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductDetailSerializer
    
# customer
# Create your views here.
class CustomerList(generics.ListCreateAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.CustomerSerializer
    
class CustomerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Customer.objects.all()
    serializer_class = serializers.VendorDetailSerializer