from django.db import models


# Create your models here.
class Booking(models.Model):
    name = models.CharField(max_length=256)
    no_of_guests = models.PositiveIntegerField()
    booking_date = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-booking_date']
        verbose_name = 'Booking'
        verbose_name_plural = 'Bookings'

class Menu(models.Model):
    title = models.CharField(max_length=255, unique=True)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    inventory = models.PositiveIntegerField()

    class Meta:
        ordering = ['title']
        verbose_name = 'Menu Item'
        verbose_name_plural = 'Menu Items'