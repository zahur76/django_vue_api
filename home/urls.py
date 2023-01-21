from django.urls import path
from home import views

from .views import all_characters

urlpatterns = [
    path('', views.index, name='home'),
    path("all_characters", all_characters.as_view(), name="all_characters"),
]