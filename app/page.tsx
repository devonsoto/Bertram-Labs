import { Menu } from './features/Menu';
import PaymentManager from './features/PaymentManager';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24 gap-y-10'>
      <p className='flex text-4xl'>Bertram Labs Coffee !</p>
      <PaymentManager />
      <Menu />
    </main>
  );
}
