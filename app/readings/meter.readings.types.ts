import z from 'zod';

export const MeterReadingSchema = z.object({
  id: z.string(),
  meter_id: z.string(),
  field_worker_id: z.string(),
  units_consumed: z.number(),
  reading_date: z.date(),
  photos: z.array(z.string()),
  revisit: z.boolean()
});

export interface IMeterReading extends z.infer<typeof MeterReadingSchema>{};
