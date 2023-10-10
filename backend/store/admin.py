from django.contrib import admin

# Register your models here.
from .models import User, Product, Color, Size, Category, Brand, Favourite, FavoriteList, Image
admin.site.register(User)
admin.site.register(Product)
admin.site.register(Color)
admin.site.register(Size)
admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Favourite)
admin.site.register(FavoriteList)
admin.site.register(Image)

    