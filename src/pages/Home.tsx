import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { products } from '@/lib/products';

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in">
            Стиль в зелёных тонах
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
            Откройте для себя коллекцию современной одежды, созданной для вашего комфорта и стиля
          </p>
          <Link to="/catalog">
            <Button size="lg" className="text-lg px-8 py-6 animate-scale-in">
              Смотреть каталог
              <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name="Truck" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-muted-foreground">Доставим ваш заказ в течение 1-3 дней</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name="Shield" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">100% оригинальная продукция</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon name="RefreshCw" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-2">Лёгкий возврат</h3>
                <p className="text-muted-foreground">30 дней на возврат товара</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Популярные товары</h2>
            <p className="text-muted-foreground text-lg">Выбор наших покупателей</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
                    <p className="font-heading text-2xl font-bold text-primary">{product.price.toLocaleString('ru-RU')} ₽</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button variant="outline" size="lg" className="text-lg px-8">
                Весь каталог
                <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl font-bold mb-6">Будьте в курсе новинок</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Подпишитесь на рассылку и получайте информацию о новых коллекциях и специальных предложениях
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Ваш email"
                className="px-6 py-3 rounded-lg border border-border bg-background w-full sm:w-96"
              />
              <Button size="lg" className="px-8">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
