import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import Icon from '@/components/ui/icon';

const featuredProducts = [
  {
    id: 1,
    name: 'Классическая футболка',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    category: 'Футболки',
    isNew: true,
  },
  {
    id: 2,
    name: 'Худи оверсайз',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    category: 'Худи',
    isNew: true,
  },
  {
    id: 3,
    name: 'Джинсы slim fit',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop',
    category: 'Джинсы',
  },
  {
    id: 4,
    name: 'Куртка бомбер',
    price: 8990,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    category: 'Куртки',
  },
];

const categories = [
  { name: 'Футболки', icon: 'Shirt', count: 45 },
  { name: 'Худи', icon: 'ShoppingBag', count: 32 },
  { name: 'Джинсы', icon: 'Package', count: 28 },
  { name: 'Куртки', icon: 'Layers', count: 19 },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />
      
      <main className="flex-1">
        <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/30">
          <div className="container px-4 text-center">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Стиль в каждой детали
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              Откройте для себя коллекцию современной одежды, созданной для тех, кто ценит качество и комфорт
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button asChild size="lg" className="text-base">
                <Link to="/catalog">
                  <Icon name="ShoppingBag" size={20} className="mr-2" />
                  Смотреть каталог
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base">
                <Link to="/contacts">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                Популярные категории
              </h2>
              <p className="text-muted-foreground">
                Найдите то, что идеально подойдёт именно вам
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link key={category.name} to="/catalog">
                  <Card className="group hover:shadow-lg transition-all cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon name={category.icon as any} size={32} className="text-primary" />
                      </div>
                      <h3 className="font-heading font-semibold text-foreground mb-1">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.count} товаров</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Новинки
                </h2>
                <p className="text-muted-foreground">
                  Только что поступили в продажу
                </p>
              </div>
              <Button asChild variant="outline">
                <Link to="/catalog">
                  Все товары
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary/5">
          <div className="container px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Быстрая доставка</h3>
                  <p className="text-sm text-muted-foreground">Доставим в течение 1-3 дней по всей России</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Гарантия качества</h3>
                  <p className="text-sm text-muted-foreground">30 дней на возврат без лишних вопросов</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground mb-2">Безопасная оплата</h3>
                  <p className="text-sm text-muted-foreground">Принимаем все популярные способы оплаты</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
