import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const allProducts = [
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
    id: 7,
    name: 'Джинсы прямые',
    price: 5490,
    image: 'https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&h=800&fit=crop',
    category: 'Джинсы',
  },
  {
    id: 8,
    name: 'Джинсовая куртка',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=800&fit=crop',
    category: 'Куртки',
  },
];

const categories = ['Все', 'Футболки', 'Худи', 'Джинсы', 'Куртки'];

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [priceRange, setPriceRange] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = allProducts.filter(product => {
    if (selectedCategory !== 'Все' && product.category !== selectedCategory) {
      return false;
    }
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (priceRange.length > 0) {
      if (priceRange.includes('under-3000') && product.price >= 3000) return false;
      if (priceRange.includes('3000-5000') && (product.price < 3000 || product.price > 5000)) return false;
      if (priceRange.includes('5000-7000') && (product.price < 5000 || product.price > 7000)) return false;
      if (priceRange.includes('over-7000') && product.price <= 7000) return false;
    }
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    return 0;
  });

  const handlePriceRangeChange = (range: string, checked: boolean) => {
    if (checked) {
      setPriceRange([...priceRange, range]);
    } else {
      setPriceRange(priceRange.filter(r => r !== range));
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header cartItemsCount={0} />
      
      <main className="flex-1 py-8">
        <div className="container px-4">
          <div className="mb-8">
            <h1 className="font-heading text-4xl font-bold text-foreground mb-2">Каталог товаров</h1>
            <p className="text-muted-foreground">Найдено товаров: {sortedProducts.length}</p>
          </div>

          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            <aside className="space-y-6">
              <div className="rounded-lg border bg-card p-6">
                <h3 className="font-heading font-semibold text-foreground mb-4 flex items-center">
                  <Icon name="Filter" size={20} className="mr-2" />
                  Фильтры
                </h3>

                <div className="space-y-6">
                  <div>
                    <Label className="text-sm font-medium mb-3 block">Категория</Label>
                    <div className="space-y-2">
                      {categories.map(category => (
                        <Button
                          key={category}
                          variant={selectedCategory === category ? 'default' : 'ghost'}
                          className="w-full justify-start"
                          onClick={() => setSelectedCategory(category)}
                        >
                          {category}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-sm font-medium mb-3 block">Цена</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="under-3000"
                          checked={priceRange.includes('under-3000')}
                          onCheckedChange={(checked) => handlePriceRangeChange('under-3000', checked as boolean)}
                        />
                        <Label htmlFor="under-3000" className="text-sm font-normal cursor-pointer">
                          До 3 000 ₽
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="3000-5000"
                          checked={priceRange.includes('3000-5000')}
                          onCheckedChange={(checked) => handlePriceRangeChange('3000-5000', checked as boolean)}
                        />
                        <Label htmlFor="3000-5000" className="text-sm font-normal cursor-pointer">
                          3 000 - 5 000 ₽
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="5000-7000"
                          checked={priceRange.includes('5000-7000')}
                          onCheckedChange={(checked) => handlePriceRangeChange('5000-7000', checked as boolean)}
                        />
                        <Label htmlFor="5000-7000" className="text-sm font-normal cursor-pointer">
                          5 000 - 7 000 ₽
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="over-7000"
                          checked={priceRange.includes('over-7000')}
                          onCheckedChange={(checked) => handlePriceRangeChange('over-7000', checked as boolean)}
                        />
                        <Label htmlFor="over-7000" className="text-sm font-normal cursor-pointer">
                          От 7 000 ₽
                        </Label>
                      </div>
                    </div>
                  </div>

                  {(selectedCategory !== 'Все' || priceRange.length > 0) && (
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSelectedCategory('Все');
                        setPriceRange([]);
                      }}
                    >
                      Сбросить фильтры
                    </Button>
                  )}
                </div>
              </div>
            </aside>

            <div>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="relative flex-1">
                  <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Поиск по каталогу..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <SelectValue placeholder="Сортировка" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">Популярные</SelectItem>
                    <SelectItem value="price-asc">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-desc">Цена: по убыванию</SelectItem>
                    <SelectItem value="name">По названию</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Icon name="Package" size={64} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Товары не найдены
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Попробуйте изменить параметры поиска
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory('Все');
                      setPriceRange([]);
                      setSearchQuery('');
                    }}
                  >
                    Сбросить все фильтры
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
