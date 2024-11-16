from django.urls import include, path
from rest_framework.authtoken.views import obtain_auth_token

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api-token-auth/', obtain_auth_token, name='api_token_auth'),  
    path('menu/', views.MenuItemsView.as_view(), name='menu-items'),
    path('menu/<int:pk>/', views.SingleMenuItemView.as_view(), name='single-menu-item'),
    path('bookings/', views.BookingViewSet.as_view({'get': 'list', 'post': 'create'}), name='bookings'),
    path('bookings/<int:pk>/', views.BookingViewSet.as_view({'get': 'retrieve',
                                                                'put': 'update',
                                                                'delete': 'destroy'}), name='single-booking'),
]