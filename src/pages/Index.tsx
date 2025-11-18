import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';
import { products } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const addItem = useCartStore((state) => state.addItem);
  const navigate = useNavigate();
  
  const featuredProducts = products.slice(0, 4);

  const handleAddToCart = (product: typeof products[0]) => {
    if (!product.sizes || product.sizes.length === 0) {
      toast.error('Размеры недоступны');
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: product.sizes[0],
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
      
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20">
          <div className="container relative z-10">
            <div className="max-w-2xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
                Стиль и комфорт в каждой детали
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Откройте для себя коллекцию современной одежды, созданной для тех, кто ценит качество и элегантность
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-lg">
                  <Link to="/catalog">
                    <Icon name="ShoppingBag" className="mr-2 h-5 w-5" />
                    Смотреть каталог
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg">
                  <Link to="/contacts">
                    Связаться с нами
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 animate-slide-up">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Truck" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-muted-foreground">
                  Доставим ваш заказ в течение 2-3 дней по всей России
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">
                  Все товары проходят строгий контроль качества
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="RefreshCw" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Легкий возврат</h3>
                <p className="text-muted-foreground">
                  30 дней на возврат или обмен товара без вопросов
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2 font-heading">Популярные товары</h2>
                <p className="text-muted-foreground">Откройте для себя наши бестселлеры</p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/catalog">
                  Все товары
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product, index) => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link to={`/product/${product.id}`}>
                    <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <CardContent className="p-4 space-y-3">
                    <div>
                      <p className="text-xs text-primary font-medium mb-1">{product.category}</p>
                      <Link to={`/product/${product.id}`}>
                        <h3 className="font-semibold line-clamp-1 hover:text-primary transition-colors">{product.name}</h3>
                      </Link>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{product.rating}</span>
                      </div>
                      <span className="text-muted-foreground">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xl font-bold text-primary">{product.price} ₽</span>
                      <Button onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }} size="sm">
                        <Icon name="ShoppingCart" className="mr-1 h-4 w-4" />
                        Купить
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 font-heading">Подпишитесь на новости</h2>
              <p className="text-muted-foreground mb-8">
                Получайте информацию о новых коллекциях, акциях и специальных предложениях
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => {
                e.preventDefault();
                toast.success('Спасибо за подписку!');
              }}>
                <Input
                  type="email"
                  placeholder="Ваш email"
                  required
                  className="flex-1"
                />
                <Button type="submit">
                  Подписаться
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 mt-auto">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <Icon name="Shirt" size={20} className="text-primary-foreground" />
                </div>
                <span className="font-heading text-lg font-bold">GreenStyle</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Современная одежда для тех, кто ценит стиль и комфорт
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
                <li><Link to="/catalog" className="hover:text-primary transition-colors">Каталог</Link></li>
                <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О доставке</li>
                <li>Возврат товара</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4" />
                  +7 (495) 123-45-67
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4" />
                  info@greenstyle.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4" />
                  Москва, ул. Примерная, 1
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GreenStyle. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
