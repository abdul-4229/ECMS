# Generated by Django 4.1.7 on 2023-04-12 07:54

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ecmsapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='enviroment',
            old_name='house_id',
            new_name='house',
        ),
        migrations.RenameField(
            model_name='enviroment',
            old_name='renter_id',
            new_name='renter',
        ),
        migrations.RenameField(
            model_name='service',
            old_name='enviroment_id',
            new_name='enviroment',
        ),
        migrations.RenameField(
            model_name='transaction',
            old_name='service_id',
            new_name='service',
        ),
    ]