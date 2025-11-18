import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useCartStore } from '@/lib/cart';

export default function Layout() {
  const getTotalItems = useCartStore(state => state.getTotalItems);
  const cartItemsCount = getTotalItems();

  return (
    <div className="flex flex-col min-h-screen">
      <Header cartItemsCount={cartItemsCount} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
