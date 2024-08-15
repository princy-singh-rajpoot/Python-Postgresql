from django.urls import path 
from . import views

urlpatterns = [
    path('vendors/',views.VendorList.as_view()),
    path('vendor/<int:pk>/',views.VendorDetail.as_view()),
    path('products/',views.ProductList.as_view()),
    path('product/<int:pk>/',views.ProductDetail.as_view()),
    # customers
    path('customers/',views.CustomerList.as_view()),
    path('customer/<int:pk>/',views.CustomerDetail.as_view()),
    # customers
    path('orders/',views.OrdervList.as_view()),
    # path('customer/<int:pk>/',views.CustomerDetail.as_view()),
]