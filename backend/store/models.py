from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
# Create your models here.
# user to login to the store
class User(models.Model):
    name = models.CharField(max_length=200, null=True)
    email = models.EmailField(max_length=200, null=True)
    password = models.CharField(max_length=200, null=True)
    isAdmin = models.BooleanField(default=False)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

# module for product
class Product(models.Model):
    name = models.CharField(max_length=200, null=True)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    countInStock = models.IntegerField(null=True, blank=True, default=0)
    description = models.TextField(null=True, blank=True)
    cover = models.ImageField(upload_to='products/images/')
    images = models.ManyToManyField('Image', blank=True)
    colors = models.ManyToManyField('Color', blank=True)
    sizes = models.ManyToManyField('Size', blank=True)
    categories = models.ManyToManyField('Category', blank=True)
    brands = models.ManyToManyField('Brand', blank=True)
    # reviews = models.ManyToManyField('Review', blank=True)
    rating = models.DecimalField(
        max_digits=2,
        decimal_places=1, 
        null=True, 
        blank=True, 
        validators=[
            MinValueValidator(0.0),
            MaxValueValidator(5.0)
        ]
    )    
    # promotion
    isPromotion = models.BooleanField(default=False)
    promotionPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.name
    
# module for images
class Image(models.Model):
    image = models.ImageField(upload_to='products/images/')
    createdAt = models.DateTimeField(auto_now_add=True)
    

# module for color
class Color(models.Model):
    color = models.CharField(max_length=200, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.color

# module for size
class Size(models.Model):
    size = models.CharField(max_length=200, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.size

# module for category
class Category(models.Model):
    category = models.CharField(max_length=200, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.category

# module for brand
class Brand(models.Model):
    brand = models.CharField(max_length=200, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.brand

# module for review
# class Review(models.Model):
#     rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
#     comment = models.TextField(null=True, blank=True)
#     createdAt = models.DateTimeField(auto_now_add=True)

#     def __str__(self):
#         return self.name

# module for order
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)
    
# module for cart
class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    quantity = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)

# module for favourite
class Favourite(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.id)


# module for list name (user can add favourite product to a list to organize)
class FavoriteList(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    products = models.ManyToManyField('Product')

    def __str__(self):
        return self.name
    

