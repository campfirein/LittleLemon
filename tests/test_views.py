from django.contrib.auth.models import User
from django.test import TestCase
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from restaurant.models import Menu


class MenuViewTest(TestCase):
    def setUp(self):
        # Create test user and token
        self.user = User.objects.create_user(username="andy", password="123456")
        self.token = Token.objects.create(user=self.user)
        self.client = APIClient()
        
        # Authenticate the client
        self.client.credentials(HTTP_AUTHORIZATION='Token ' + self.token.key)
        
        # Create test instances of Menu
        self.menu1 = Menu.objects.create(title="Pizza", price=12.99, inventory=50)
        self.menu2 = Menu.objects.create(title="Burger", price=8.99, inventory=30)
        self.menu3 = Menu.objects.create(title="Pasta", price=10.99, inventory=20)