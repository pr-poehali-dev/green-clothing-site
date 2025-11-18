import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import { products } from '@/lib/products';
import { useCartStore } from '@/lib/cart';
import { toast } from 'sonner';

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);

  const product = products.find(p => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Icon name="Package" className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h2 className="font-heading text-2xl font-semibold mb-2">Товар не найден</h2>
          <Button onClick={() => navigate('/catalog')}>Вернуться в каталог</Button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Пожалуйста, выберите размер');
      return;
    }
    if (!selectedColor) {
      toast.error('Пожалуйста, выберите цвет');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize, selectedColor);
    }
    
    toast.success('Товар добавлен в корзину', {
      action: {
        label: 'Перейти в корзину',
        onClick: () => navigate('/cart')
      }
    });
  };

  const relatedProducts = products.filter(
    p => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Главная</Link>
          <Icon name="ChevronRight" className="h-4 w-4" />
          <Link to="/catalog" className="hover:text-foreground">Каталог</Link>
          <Icon name="ChevronRight" className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-[3/4] overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <div className="mb-6">
              <Badge variant="outline" className="mb-4">{product.category}</Badge>
              <h1 className="font-heading text-4xl font-bold mb-4">{product.name}</h1>
              <p className="font-heading text-4xl font-bold text-primary mb-6">
                {product.price.toLocaleString('ru-RU')} ₽
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h3 className="font-semibold mb-3">Описание</h3>
                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Размер</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? 'default' : 'outline'}
                      onClick={() => setSelectedSize(size)}
                      className="min-w-[60px]"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Цвет</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? 'default' : 'outline'}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Количество</h3>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Icon name="Minus" className="h-4 w-4" />
                  </Button>
                  <span className="font-semibold text-lg w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Icon name="Plus" className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-3 mt-auto">
              <Button
                size="lg"
                className="w-full text-lg"
                onClick={handleAddToCart}
              >
                <Icon name="ShoppingCart" className="mr-2 h-5 w-5" />
                Добавить в корзину
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full text-lg"
                onClick={() => {
                  handleAddToCart();
                  navigate('/cart');
                }}
              >
                Купить сейчас
              </Button>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Truck" className="h-5 w-5 text-primary" />
                <span>Бесплатная доставка от 5000 ₽</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="RefreshCw" className="h-5 w-5 text-primary" />
                <span>Возврат в течение 30 дней</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Icon name="Shield" className="h-5 w-5 text-primary" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <section>
            <h2 className="font-heading text-3xl font-bold mb-8">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relProduct) => (
                <Link key={relProduct.id} to={`/product/${relProduct.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-muted-foreground mb-1">{relProduct.category}</p>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-1">{relProduct.name}</h3>
                      <p className="font-heading text-2xl font-bold text-primary">
                        {relProduct.price.toLocaleString('ru-RU')} ₽
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
