import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Классическая футболка',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop',
    ],
    category: 'Футболки',
    description: 'Классическая футболка из 100% хлопка премиум качества. Мягкая, дышащая ткань обеспечивает комфорт в течение всего дня.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Белый', 'Чёрный', 'Зелёный'],
    isNew: true,
  },
  {
    id: 2,
    name: 'Худи оверсайз',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    ],
    category: 'Худи',
    description: 'Стильное худи оверсайз с мягким внутренним начёсом. Идеально для прохладной погоды.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Серый', 'Зелёный', 'Бежевый'],
    isNew: true,
  },
];

const relatedProducts = [
  {
    id: 5,
    name: 'Футболка с принтом',
    price: 3490,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop',
    category: 'Футболки',
  },
  {
    id: 6,
    name: 'Худи базовый',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&h=800&fit=crop',
    category: 'Худи',
  },
  {
    id: 3,
    name: 'Джинсы slim fit',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop',
    category: 'Джинсы',
  },
];

const Product = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id)) || products[0];
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />
      
      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="mb-6">
            <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Главная</Link>
              <Icon name="ChevronRight" size={16} />
              <Link to="/catalog" className="hover:text-primary">Каталог</Link>
              <Icon name="ChevronRight" size={16} />
              <span className="text-foreground">{product.name}</span>
            </nav>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div>
              <div className="aspect-[3/4] mb-4 rounded-lg overflow-hidden bg-muted">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="mb-2">{product.category}</Badge>
                {product.isNew && <Badge className="mb-2 ml-2" variant="secondary">Новинка</Badge>}
                <h1 className="font-heading text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-primary mb-4">{product.price.toLocaleString('ru-RU')} ₽</p>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-base mb-3 block">Размер</Label>
                  <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <div key={size}>
                        <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${size}`}
                          className="flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 hover:border-primary/50 transition-colors"
                        >
                          {size}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base mb-3 block">Цвет</Label>
                  <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex flex-wrap gap-2">
                    {product.colors.map(color => (
                      <div key={color}>
                        <RadioGroupItem value={color} id={`color-${color}`} className="peer sr-only" />
                        <Label
                          htmlFor={`color-${color}`}
                          className="flex items-center justify-center px-4 py-2 border-2 rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 hover:border-primary/50 transition-colors"
                        >
                          {color}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <Label className="text-base mb-3 block">Количество</Label>
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Icon name="Minus" size={16} />
                    </Button>
                    <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Icon name="Plus" size={16} />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="flex-1">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Добавить в корзину
                </Button>
                <Button size="lg" variant="outline">
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Truck" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Доставка</h4>
                    <p className="text-sm text-muted-foreground">Бесплатная доставка от 3000 ₽</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="RefreshCw" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Возврат</h4>
                    <p className="text-sm text-muted-foreground">30 дней на возврат товара</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={20} className="text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Гарантия</h4>
                    <p className="text-sm text-muted-foreground">Официальная гарантия качества</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="description" className="mb-16">
            <TabsList className="grid w-full max-w-md grid-cols-3">
              <TabsTrigger value="description">Описание</TabsTrigger>
              <TabsTrigger value="specs">Характеристики</TabsTrigger>
              <TabsTrigger value="reviews">Отзывы</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="space-y-4 pt-6">
              <h3 className="font-heading text-xl font-semibold text-foreground">О товаре</h3>
              <p className="text-muted-foreground">{product.description}</p>
              <p className="text-muted-foreground">
                Эта модель отлично сочетается с джинсами, шортами или спортивными брюками. 
                Универсальный крой подходит для любого типа фигуры.
              </p>
            </TabsContent>
            <TabsContent value="specs" className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Материал</span>
                  <span className="font-medium">100% хлопок</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Уход</span>
                  <span className="font-medium">Машинная стирка 30°C</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Производство</span>
                  <span className="font-medium">Турция</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-muted-foreground">Категория</span>
                  <span className="font-medium">{product.category}</span>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="pt-6">
              <p className="text-muted-foreground">Отзывов пока нет. Будьте первым!</p>
            </TabsContent>
          </Tabs>

          <div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-8">Похожие товары</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product;
