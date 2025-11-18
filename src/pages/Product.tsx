import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));
  const addItem = useCartStore((state) => state.addItem);

  const [selectedSize, setSelectedSize] = useState('');

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container py-16 text-center">
          <Icon name="PackageX" className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-4">Товар не найден</h2>
          <Button asChild>
            <Link to="/catalog">Вернуться в каталог</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Выберите размер');
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
    });

    toast.success('Товар добавлен в корзину', {
      action: {
        label: 'Перейти в корзину',
        onClick: () => navigate('/cart'),
      },
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/catalog">
            <Icon name="ArrowLeft" className="mr-2 h-4 w-4" />
            Вернуться в каталог
          </Link>
        </Button>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} отзывов)
                </span>
              </div>
              <p className="text-3xl font-bold text-primary mb-6">{product.price} ₽</p>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Описание</h3>
                  <p className="text-muted-foreground">{product.description}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Выберите размер</h3>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize}>
                    <div className="grid grid-cols-4 gap-2">
                      {product.sizes.map((size) => (
                        <div key={size}>
                          <RadioGroupItem
                            value={size}
                            id={`size-${size}`}
                            className="peer sr-only"
                          />
                          <Label
                            htmlFor={`size-${size}`}
                            className="flex items-center justify-center rounded-md border-2 border-muted bg-transparent px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground cursor-pointer transition-colors"
                          >
                            {size}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Доступные цвета</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <Badge key={color} variant="outline">
                        {color}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button onClick={handleAddToCart} size="lg" className="w-full text-lg">
                  <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                  Добавить в корзину
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Truck" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Бесплатная доставка</p>
                    <p className="text-sm text-muted-foreground">При заказе от 3000 рублей</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="RefreshCw" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Легкий возврат</p>
                    <p className="text-sm text-muted-foreground">30 дней на возврат товара</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Shield" className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Гарантия качества</p>
                    <p className="text-sm text-muted-foreground">Сертифицированные товары</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="bg-muted py-8 mt-auto">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GreenStyle. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Product;
