# Create your views here.
from django.shortcuts import render


def index(request):
    """Render the main index page of the Little Lemon restaurant.

    Args:
        request: HttpRequest object
    Returns:
        Rendered index.html template
    """
    return render(request, 'index.html', {})