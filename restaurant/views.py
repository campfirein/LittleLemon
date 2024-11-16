# Create your views here.
from django.shortcuts import render
from rest_framework import generics, viewsets

from .models import Booking, Menu
from .serializers import BookingSerializer, MenuSerializer


def index(request):
    """Render the main index page of the Little Lemon restaurant.

    Args:
        request: HttpRequest object
    Returns:
        Rendered index.html template
    """
    return render(request, 'index.html', {})


# ListCreateAPIView: Handles GET and POST
class MenuItemsView(generics.ListCreateAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer

# RetrieveUpdateAPIView + DestroyAPIView: Handles GET, PUT, DELETE
class SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()  # Fetch all booking objects
    serializer_class = BookingSerializer