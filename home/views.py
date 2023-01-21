from django.shortcuts import render
from .models import Character
from .serializers import CharacterSerializer
from rest_framework import generics


# Create your views here.
def index(request):
    """ A view to return the index page """

    return render(request, 'home/index.html')


class all_characters(generics.ListAPIView):

    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


class get_character(generics.RetrieveAPIView):

    queryset = Character.objects.all()
    serializer_class = CharacterSerializer
    lookup_field = "pk"


