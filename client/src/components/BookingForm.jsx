import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';
import { z } from 'zod';
import { api } from '../lib/api.js';

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional().or(z.literal('')),
  treatment: z.string().min(2),
  preferredDate: z.string().min(1),
  preferredTime: z.string().min(3),
  notes: z.string().max(1000).optional()
});

export const BookingForm = ({ services }) => {
  const { register, handleSubmit, formState, reset } = useForm({ defaultValues: { treatment: services[0] } });

  const submit = async (values) => {
    const parsed = schema.parse(values);
    await api.post('/appointments', parsed);
    reset();
  };

  return (
    <form className="booking" onSubmit={handleSubmit(submit)}>
      <input placeholder="Name" {...register('name', { required: true })} />
      <input placeholder="Phone" {...register('phone', { required: true })} />
      <input placeholder="Email" {...register('email')} />
      <select {...register('treatment', { required: true })}>{services.map((service) => <option key={service}>{service}</option>)}</select>
      <input type="date" {...register('preferredDate', { required: true })} />
      <input type="time" {...register('preferredTime', { required: true })} />
      <textarea placeholder="Notes" {...register('notes')} />
      <button type="submit" disabled={formState.isSubmitting}><Send size={18} /> Request Appointment</button>
    </form>
  );
};
