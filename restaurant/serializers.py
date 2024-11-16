from datetime import timezone

from rest_framework import serializers

from .models import Booking, Menu


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = '__all__'  # Include all fields of the Menu model


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

    def validate_booking_date(self, value):
        if value < timezone.now().date():
            raise serializers.ValidationError('Booking date cannot be in the past')
        return value

    def validate_no_of_guests(self, value):
        if value <= 0 or value > 20:  # adjust max guests as needed
            raise serializers.ValidationError('Number of guests must be between 1 and 20')
        return value