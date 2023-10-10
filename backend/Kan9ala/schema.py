import graphene
from store.models import Product, Color, FavoriteList, Image, Size, Brand, Category
from graphene_django import DjangoObjectType

class ProductType(DjangoObjectType):
    class Meta:
        model = Product
        fields = "__all__"

class ColorType(DjangoObjectType):
    class Meta:
        model = Color
        fields = "__all__"

class FavoriteListType(DjangoObjectType):
    class Meta:
        model = FavoriteList
        fields = "__all__"

class ImageType(DjangoObjectType):
    class Meta:
        model = Image
        fields = "__all__"

class SizeType(DjangoObjectType):
    class Meta:
        model = Size
        fields = "__all__"

class BrandType(DjangoObjectType):
    class Meta:
        model = Brand
        fields = "__all__"

class CategoryType(DjangoObjectType):
    class Meta:
        model = Category
        fields = "__all__"



    

class Query(graphene.ObjectType):
    all_products = graphene.List(ProductType)
    colors = graphene.List(ColorType)
    favorite_lists = graphene.List(FavoriteListType)
    images = graphene.List(ImageType)
    sizes = graphene.List(SizeType)
    brands = graphene.List(BrandType)
    categories = graphene.List(CategoryType)




    def resolve_all_products(self, info):
        return Product.objects.all()

    def resolve_colors(self, info):
        return Color.objects.all()
    
    def resolve_favorite_lists(self, info):
        return FavoriteList.objects.all()
    
    def resolve_images(self, info):
        return Image.objects.all()
    
    def resolve_sizes(self, info):
        return Size.objects.all()
    
    def resolve_brands(self, info):
        return Brand.objects.all()
    
    def resolve_categories(self, info):
        return Category.objects.all()
    

schema = graphene.Schema(query=Query)