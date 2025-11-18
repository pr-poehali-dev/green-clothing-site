import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Icon from '@/components/ui/icon';
import { products } from '@/data/products';

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/30 py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground">
                Стильная одежда для вас
              </h1>
              <p className="text-xl text-muted-foreground">
                Откройте для себя коллекцию современной одежды в зелёных тонах. Качество, комфорт и стиль в каждой вещи.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/catalog">
                    Перейти в каталог
                    <Icon name="ArrowRight" className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8">
                  <Link to="/contacts">Связаться с нами</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon name="Truck" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Бесплатная доставка</h3>
                  <p className="text-sm text-muted-foreground">При заказе от 3000 рублей</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon name="RefreshCw" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Легкий возврат</h3>
                  <p className="text-sm text-muted-foreground">30 дней на возврат товара</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardContent className="pt-6 text-center space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Icon name="Shield" className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Гарантия качества</h3>
                  <p className="text-sm text-muted-foreground">Сертифицированные товары</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные товары</h2>
              <p className="text-muted-foreground">Выбор наших покупателей</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold line-clamp-1">{product.name}</h3>
                      <div className="flex items-center gap-1 text-sm">
                        <Icon name="Star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">{product.price} ₽</span>
                      <Button asChild size="sm">
                        <Link to={`/product/${product.id}`}>Смотреть</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link to="/catalog">Смотреть весь каталог</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-8 mt-auto">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GreenStyle. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;