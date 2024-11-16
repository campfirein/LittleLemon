# Create your views here.
from django.shortcuts import render
from rest_framework import generics, viewsets
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

from restaurant import serializers

from .models import Booking, Menu
from .serializers import BookingSerializer, MenuSerializer


class CustomPageNumberPagination(PageNumberPagination):
    page_size = 5  # Default items per page
    page_size_query_param = 'page_size'  # Allow clients to override page size with this query param
    max_page_size = 50  # Maximum items per page

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
    """API endpoint for listing and creating menu items.

    GET: List all menu items
    POST: Create a new menu item
    """
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    pagination_class = CustomPageNumberPagination
    permission_classes = [IsAuthenticated]

# RetrieveUpdateAPIView + DestroyAPIView: Handles GET, PUT, DELETE
class SingleMenuItemView(generics.RetrieveUpdateDestroyAPIView):

    queryset = Menu.objects.all()
    serializer_class = MenuSerializer


class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()  # Fetch all booking objects
    serializer_class = BookingSerializer

    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        try:
            serializer.save()
        except Exception as e:
            raise serializers.ValidationError({'error': 'Unable to create booking', 'details': str(e)})