'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ShippingAddress } from '@/types';
import { useTransition } from 'react';
import { shippingAddressSchema } from '@/lib/validators';
import { ControllerRenderProps, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';

const formFields = [
  { name: 'fullName', label: 'Full Name', placeholder: 'Enter Full Name' },
  {
    name: 'streetAddress',
    label: 'Street Address',
    placeholder: 'Enter Street Address',
  },
  { name: 'city', label: 'City', placeholder: 'Enter City' },
  {
    name: 'postalCode',
    label: 'Postal Code',
    placeholder: 'Enter Postal Code',
  },
  { name: 'country', label: 'Country', placeholder: 'Enter Country' },
] as const;

const ShippingAddressForm = ({ adress }: { adress: ShippingAddress }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof shippingAddressSchema>>({
    resolver: zodResolver(shippingAddressSchema),
    defaultValues: adress || {
      fullName: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      country: '',
    },
  });

  const onSubmit = (data: z.infer<typeof shippingAddressSchema>) => {
    console.log(data);
  };

  return (
    <>
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="h2-bold mt-4">Shipping Address</h1>
        <p className="text-small text-muted-foreground">
          Please enter your shipping address below.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col gap-5">
              {formFields.map((field) => (
                <FormField
                  key={field.name}
                  control={form.control}
                  name={field.name}
                  render={({ field: fieldProps }) => (
                    <FormItem className="w-full">
                      <FormLabel>{field.label}</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={field.placeholder}
                          {...fieldProps}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <div className="flex gap-2">
                <Button type="submit" disabled={isPending}>
                  {isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}{' '}
                  Continue
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </>
  );
};

export default ShippingAddressForm;
