import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  onAddToCart?: () => void;
}

const ProductCard = ({ id, name, price, image, category, isNew, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-lg">
      <Link to={`/product/${id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
          {isNew && (
            <Badge className="absolute top-2 left-2 bg-primary">
              Новинка
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/product/${id}`}>
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">{category}</p>
            <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <p className="text-lg font-bold text-primary">{price.toLocaleString('ru-RU')} ₽</p>
          </div>
        </Link>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full"
          onClick={onAddToCart}
        >
          <Icon name="ShoppingCart" size={16} className="mr-2" />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
