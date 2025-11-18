import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';

const Cart = () => {
  const { items, updateQuantity, removeItem, clearCart } = useCartStore();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 3000 ? 0 : 300;
  const total = subtotal + shipping;

  const handleQuantityChange = (id: number, size: string, value: string) => {
    const quantity = parseInt(value);
    if (quantity > 0 && quantity <= 99) {
      updateQuantity(id, size, quantity);
    }
  };

  const handleCheckout = () => {
    toast.success('Заказ оформлен! Мы свяжемся с вами в ближайшее время.');
    clearCart();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container py-16 text-center flex-1">
          <Icon name="ShoppingCart" className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-4">Корзина пуста</h2>
          <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
          <Button asChild>
            <Link to="/catalog">Перейти в каталог</Link>
          </Button>
        </div>
        <footer className="bg-muted py-8 mt-auto">
          <div className="container text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GreenStyle. Все права защищены.</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <div className="container py-8 flex-1">
        <h1 className="text-4xl font-bold mb-8">Корзина</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={`${item.id}-${item.size}`}>
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-32 flex-shrink-0 rounded-md overflow-hidden bg-muted">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between gap-4 mb-2">
                        <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="flex-shrink-0"
                          onClick={() => removeItem(item.id, item.size)}
                        >
                          <Icon name="Trash2" className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3">Размер: {item.size}</p>
                      
                      <div className="flex items-center justify-between gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.size, Math.max(1, item.quantity - 1))
                            }
                          >
                            <Icon name="Minus" className="h-3 w-3" />
                          </Button>
                          <Input
                            type="number"
                            min="1"
                            max="99"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, item.size, e.target.value)}
                            className="w-16 text-center"
                          />
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() =>
                              updateQuantity(item.id, item.size, Math.min(99, item.quantity + 1))
                            }
                          >
                            <Icon name="Plus" className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <p className="text-lg font-bold text-primary">
                          {(item.price * item.quantity).toLocaleString()} ₽
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-xl font-bold">Итого</h2>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Товары ({items.length})</span>
                    <span>{subtotal.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Доставка</span>
                    <span>{shipping === 0 ? 'Бесплатно' : `${shipping} ₽`}</span>
                  </div>
                  {subtotal < 3000 && (
                    <p className="text-xs text-primary">
                      Добавьте товаров на {(3000 - subtotal).toLocaleString()} ₽ для бесплатной доставки
                    </p>
                  )}
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold">К оплате</span>
                    <span className="text-2xl font-bold text-primary">
                      {total.toLocaleString()} ₽
                    </span>
                  </div>
                  
                  <Button onClick={handleCheckout} size="lg" className="w-full">
                    Купить
                  </Button>
                </div>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Truck" className="h-4 w-4 text-primary" />
                    <span>Доставка 1-3 дня</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="Shield" className="h-4 w-4 text-primary" />
                    <span>Безопасная оплата</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Icon name="RefreshCw" className="h-4 w-4 text-primary" />
                    <span>Возврат 30 дней</span>
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

export default Cart;
