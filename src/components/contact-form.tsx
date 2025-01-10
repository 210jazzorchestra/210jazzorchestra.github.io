'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '@/components/ui/textarea';
import { sendMail } from '@/lib/send-mail';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Please Enter Your Name' }),
  email: z.string().email({ message: 'Please Enter a Valid Email Address' }),
  message: z.string().min(10, {
    message: 'Please make sure your message is at least 10 characters long.',
  }),
});
export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const isLoading = form.formState.isSubmitting;
  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    const mailText = `Name: ${values.name}\n  Email: ${values.email}\nMessage: ${values.message}`;
    const response = await sendMail({
      email: values.email,
      subject: 'New Website Contact',
      text: mailText,
    });
    if (response?.messageId) {
      toast.success(
        'Your message has been sent! We will get back to you soon.'
      );
    } else {
      toast.error('Failed to send message. Please try again later.');
    }
  };
  return (
    <Form {...form}>
      <form
        className='grid grid-cols-3 items-center'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className='col-span-3 flex flex-col gap-3 lg:col-span-3 lg:gap-4'>
          <h2 className='lg:text-xl'>Name:</h2>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='John Doe' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h2 className='lg:text-xl'>Email:</h2>
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder='john@example.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <h2 className='lg:text-xl'>Message:</h2>
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea {...field} placeholder='Say hello...' />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading}>
            {isLoading ? 'Sending.....' : 'Send'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
