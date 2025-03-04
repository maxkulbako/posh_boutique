'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { CartItem } from '@/types';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';
import { addItemToCart } from '@/lib/actions/cart.actions';

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error('There was an issue');
      return;
    }

    toast.success(res.message, {
      action: {
        label: 'Go To Cart',
        onClick: () => router.push('./cart'),
      },
    });
  };

  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus />
      Add To Cart
    </Button>
  );
};

export default AddToCart;
