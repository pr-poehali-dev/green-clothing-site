export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Базовая футболка',
    price: 1990,
    description: 'Удобная хлопковая футболка для повседневной носки. Классический крой, мягкая ткань.',
    category: 'Футболки',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=700&fit=crop',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Зелёный', 'Тёмно-зелёный', 'Мятный'],
    rating: 4.5,
    reviews: 128,
  },
  {
    id: 2,
    name: 'Льняная рубашка',
    price: 3490,
    description: 'Лёгкая льняная рубашка для жаркого лета. Дышащая ткань, свободный крой.',
    category: 'Рубашки',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=700&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Оливковый', 'Зелёный', 'Хаки'],
    rating: 4.8,
    reviews: 86,
  },
  {
    id: 3,
    name: 'Худи оверсайз',
    price: 4290,
    description: 'Тёплое худи с капюшоном. Свободный крой, мягкий флис внутри.',
    category: 'Худи',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=700&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Зелёный', 'Тёмно-зелёный'],
    rating: 4.7,
    reviews: 94,
  },
  {
    id: 4,
    name: 'Джинсы скинни',
    price: 5490,
    description: 'Стрейчевые джинсы облегающего кроя. Высокая талия, удобная посадка.',
    category: 'Джинсы',
    image: 'https://images.unsplash.com/photo-1542272454315-7f6d6a59170b?w=500&h=700&fit=crop',
    sizes: ['26', '27', '28', '29', '30', '31', '32'],
    colors: ['Тёмно-зелёный', 'Чёрный'],
    rating: 4.6,
    reviews: 156,
  },
  {
    id: 5,
    name: 'Платье миди',
    price: 6990,
    description: 'Элегантное платье длины миди. Приталенный силуэт, лёгкая ткань.',
    category: 'Платья',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&h=700&fit=crop',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Изумрудный', 'Мятный', 'Оливковый'],
    rating: 4.9,
    reviews: 72,
  },
  {
    id: 6,
    name: 'Лёгкая куртка',
    price: 7990,
    description: 'Ветровка для прохладной погоды. Водоотталкивающая ткань, удобные карманы.',
    category: 'Куртки',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=700&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Хаки', 'Зелёный', 'Оливковый'],
    rating: 4.5,
    reviews: 103,
  },
  {
    id: 7,
    name: 'Спортивные брюки',
    price: 3990,
    description: 'Удобные брюки для спорта и отдыха. Эластичная ткань, кулиска на талии.',
    category: 'Брюки',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&h=700&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Зелёный', 'Тёмно-зелёный', 'Чёрный'],
    rating: 4.4,
    reviews: 91,
  },
  {
    id: 8,
    name: 'Свитшот базовый',
    price: 3490,
    description: 'Классический свитшот без капюшона. Плотный хлопок, рибана на манжетах.',
    category: 'Свитшоты',
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=700&fit=crop',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Мятный', 'Зелёный', 'Оливковый'],
    rating: 4.6,
    reviews: 115,
  },
];

export const categories = [
  'Все категории',
  'Футболки',
  'Рубашки',
  'Худи',
  'Джинсы',
  'Платья',
  'Куртки',
  'Брюки',
  'Свитшоты',
];
