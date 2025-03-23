from django.urls import path
from .views import get_message, create_message

urlpatterns = [
    path('message/', get_message, name='get_message'),
    path('message/create/', create_message, name='create_message'),
]
