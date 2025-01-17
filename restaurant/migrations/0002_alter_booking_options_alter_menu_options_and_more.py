# Generated by Django 5.1.2 on 2024-11-16 03:05

import django.core.validators
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("restaurant", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="booking",
            options={
                "ordering": ["-booking_date"],
                "verbose_name": "Booking",
                "verbose_name_plural": "Bookings",
            },
        ),
        migrations.AlterModelOptions(
            name="menu",
            options={
                "ordering": ["title"],
                "verbose_name": "Menu Item",
                "verbose_name_plural": "Menu Items",
            },
        ),
        migrations.AddField(
            model_name="booking",
            name="created_at",
            field=models.DateTimeField(
                auto_now_add=True, default=django.utils.timezone.now
            ),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="menu",
            name="description",
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name="booking",
            name="no_of_guests",
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name="menu",
            name="inventory",
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name="menu",
            name="price",
            field=models.DecimalField(
                decimal_places=2,
                max_digits=10,
                validators=[django.core.validators.MinValueValidator(0)],
            ),
        ),
        migrations.AlterField(
            model_name="menu",
            name="title",
            field=models.CharField(max_length=255, unique=True),
        ),
    ]
