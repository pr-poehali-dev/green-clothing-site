import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: 'Классическая футболка',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    size: 'M',
    color: 'Белый',
    quantity: 2,
  },
  {
    id: 2,
    name: 'Худи оверсайз',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    size: 'L',
    color: 'Зелёный',
    quantity: 1,
  },
];

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 3000 ? 0 : 500;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={cartItems.length} />
      
      <main className="flex-1 py-8">
        <div className="container px-4">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">Корзина</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <Icon name="ShoppingCart" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                Корзина пуста
              </h3>
              <p className="text-muted-foreground mb-6">
                Добавьте товары из каталога
              </p>
              <Button asChild>
                <Link to="/catalog">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Перейти в каталог
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <div className="w-24 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <Link to={`/product/${item.id}`}>
                            <h3 className="font-heading font-semibold text-foreground hover:text-primary transition-colors mb-2">
                              {item.name}
                            </h3>
                          </Link>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                            <span>Размер: {item.size}</span>
                            <span>Цвет: {item.color}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, -1)}
                              >
                                <Icon name="Minus" size={14} />
                              </Button>
                              <span className="w-8 text-center font-medium">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, 1)}
                              >
                                <Icon name="Plus" size={14} />
                              </Button>
                            </div>
                            <div className="flex items-center gap-4">
                              <span className="text-lg font-bold text-primary">
                                {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                              </span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => removeItem(item.id)}
                              >
                                <Icon name="Trash2" size={16} className="text-destructive" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div>
                <Card className="sticky top-24">
                  <CardContent className="p-6 space-y-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      Итого
                    </h3>

                    <div className="space-y-3">
                      <div className="flex justify-between text-muted-foreground">
                        <span>Товары ({cartItems.length})</span>
                        <span>{subtotal.toLocaleString('ru-RU')} ₽</span>
                      </div>
                      <div className="flex justify-between text-muted-foreground">
                        <span>Доставка</span>
                        <span className={shipping === 0 ? 'text-primary font-medium' : ''}>
                          {shipping === 0 ? 'Бесплатно' : `${shipping} ₽`}
                        </span>
                      </div>
                      {subtotal < 3000 && (
                        <p className="text-xs text-muted-foreground">
                          До бесплатной доставки: {(3000 - subtotal).toLocaleString('ru-RU')} ₽
                        </p>
                      )}
                      <Separator />
                      <div className="flex justify-between text-lg font-bold">
                        <span>Всего</span>
                        <span className="text-primary">{total.toLocaleString('ru-RU')} ₽</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Input
                        placeholder="Промокод"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline" className="w-full">
                        Применить
                      </Button>
                    </div>

                    <Button size="lg" className="w-full">
                      Оформить заказ
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>

                    <div className="space-y-2 pt-4 border-t">
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Shield" size={16} className="text-primary" />
                        <span>Безопасная оплата</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="RefreshCw" size={16} className="text-primary" />
                        <span>30 дней на возврат</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <Icon name="Truck" size={16} className="text-primary" />
                        <span>Доставка 1-3 дня</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
