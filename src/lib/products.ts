export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Классическая зелёная куртка',
    price: 8990,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    category: 'Верхняя одежда',
    description: 'Стильная куртка из качественных материалов. Идеально подходит для весенне-осеннего сезона.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Зелёный', 'Тёмно-зелёный'],
    inStock: true
  },
  {
    id: 2,
    name: 'Летнее платье',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&h=800&fit=crop',
    category: 'Платья',
    description: 'Лёгкое летнее платье из натуральных тканей. Комфорт и стиль в одном.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Мятный', 'Салатовый'],
    inStock: true
  },
  {
    id: 3,
    name: 'Базовая футболка',
    price: 1990,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    category: 'Футболки',
    description: 'Универсальная футболка из 100% хлопка. Подходит для повседневной носки.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Зелёный', 'Оливковый', 'Белый'],
    inStock: true
  },
  {
    id: 4,
    name: 'Джинсы классические',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1542272454315-7f6c6d8b0ab4?w=600&h=800&fit=crop',
    category: 'Брюки',
    description: 'Классические джинсы прямого кроя. Высокое качество денима.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Синий', 'Чёрный'],
    inStock: true
  },
  {
    id: 5,
    name: 'Свитшот оверсайз',
    price: 3990,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    category: 'Свитшоты',
    description: 'Удобный свитшот свободного кроя. Мягкий материал, стильный дизайн.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Зелёный', 'Серый', 'Бежевый'],
    inStock: true
  },
  {
    id: 6,
    name: 'Кардиган вязаный',
    price: 6990,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&h=800&fit=crop',
    category: 'Кардиганы',
    description: 'Тёплый вязаный кардиган. Идеален для прохладных вечеров.',
    sizes: ['S', 'M', 'L'],
    colors: ['Оливковый', 'Тёмно-зелёный'],
    inStock: true
  },
  {
    id: 7,
    name: 'Юбка миди',
    price: 3990,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&h=800&fit=crop',
    category: 'Юбки',
    description: 'Элегантная юбка длины миди. Универсальный элемент гардероба.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Зелёный', 'Чёрный'],
    inStock: true
  },
  {
    id: 8,
    name: 'Пальто классическое',
    price: 15990,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&h=800&fit=crop',
    category: 'Верхняя одежда',
    description: 'Элегантное пальто для холодного сезона. Премиум качество.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Тёмно-зелёный', 'Чёрный'],
    inStock: true
  }
];

export const categories = [
  'Все',
  'Верхняя одежда',
  'Платья',
  'Футболки',
  'Брюки',
  'Свитшоты',
  'Кардиганы',
  'Юбки'
];
