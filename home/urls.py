from django.urls import path
from home import views

from .views import all_characters, get_character

urlpatterns = [
    path('', views.index, name='home'),
    path("all_characters", all_characters.as_view(), name="all_characters"),
    path("get_character/<int:pk>", get_character.as_view(), name="get_character"),
]