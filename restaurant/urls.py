from django.urls import path

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('menu/', views.MenuItemsView.as_view(), name='menu-items'),
    path('menu/<int:pk>/', views.SingleMenuItemView.as_view(), name='single-menu-item'),
    path('bookings/', views.BookingViewSet.as_view({'get': 'list', 'post': 'create'}), name='bookings'),
    path('bookings/<int:pk>/', views.BookingViewSet.as_view({'get': 'retrieve',
                                                                'put': 'update',
                                                                'delete': 'destroy'}), name='single-booking'),
]