from django.urls import path 
from . import views

urlpatterns = [
    path('vendors/',views.VendorList.as_view()), 
    # api/vendors,
    # python manage.py createsuper > un> admin
]