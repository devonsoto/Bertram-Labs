'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Input } from '@/components/ui/input';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';
import { useState } from 'react';

export const FormSchema = z.object({
  name: z.string({
    required_error: 'Please select a name.',
  }),
  amount: z.coerce
    .number()
    .min(1, { message: 'Amount must be greater than 0' }),
});

interface AddPaymentProps {
  data: string[];
  onCallbackFunction?: (data: z.infer<typeof FormSchema>) => void;
}

export function AddPayment({ data, onCallbackFunction }: AddPaymentProps) {
  const [employees, SetEmployees] = useState(data);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      amount: 0,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (onCallbackFunction) {
      onCallbackFunction(data);
    }

    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select an employee' />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {data.map((employee) => {
                    return (
                      <SelectItem key={employee} value={employee}>
                        {employee}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormDescription>
                Select an employee
                {/* <Link href='/examples/forms'>email settings</Link>. */}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='amount'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input placeholder='25' {...field} type='number' />
              </FormControl>
              <FormDescription>
                The total amount of coffee purchased by the employee
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
}
