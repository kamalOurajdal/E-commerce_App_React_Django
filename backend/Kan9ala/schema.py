import graphene
from store.models import Product, Color, FavoriteList, Image, Size, Brand, Category, Favourite
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
    promotions = graphene.List(ProductType)
    product_by_id = graphene.Field(ProductType, id=graphene.Int(required=True))
    colors = graphene.List(ColorType)
    favorite_lists = graphene.List(FavoriteListType)
    images = graphene.List(ImageType)
    sizes = graphene.List(SizeType)
    brands = graphene.List(BrandType)
    categories = graphene.List(CategoryType)

    def resolve_all_products(self, info):
        return Product.objects.all()
    
    def resolve_product_by_id(self, info, id):
        return Product.objects.get(id=id)

    def resolve_promotions(self, info):
        return Product.objects.filter(isPromotion=True)

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


class FavouriteType(DjangoObjectType):
    class Meta:
        model = Favourite

class AddToFavourite(graphene.Mutation):
    class Arguments:
        product = graphene.Int()
    
    favourite = graphene.Field(FavouriteType)

    def mutate(self, info, product):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')
        try:
            product = Product.objects.get(id=product)
        except:
            raise Exception('Invalid product!')
        favourite = Favourite.objects.create(user=user, product=product)
        favourite.save()

        return AddToFavourite(favourite = favourite)

class RemoveFromFavourite(graphene.Mutation):
    class Arguments:
        product = graphene.Int()
    
    favourite = graphene.Field(FavouriteType)

    def mutate(self, info, product):
        user = info.context.user
        if user.is_anonymous:
            raise Exception('Not logged in!')
        try:
            product = Product.objects.get(id=product)
        except:
            raise Exception('Invalid product!')
        favourite = Favourite.objects.get(user=user, product=product)
        favourite.delete()

        return RemoveFromFavourite(favourite = favourite)

class Mutation(graphene.ObjectType):
    add_to_favourite = AddToFavourite.Field()
    remove_from_favourite = RemoveFromFavourite.Field()

schema = graphene.Schema(query=Query, mutation=Mutation)