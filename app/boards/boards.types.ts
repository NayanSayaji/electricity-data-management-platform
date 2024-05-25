import { Optional } from 'sequelize';
import z from 'zod';

export const BoardSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  base_rate_household_regular: z.number(),
  base_rate_household_solar: z.number(),
  base_rate_industrial_regular: z.number(),
  base_rate_industrial_solar: z.number(),
  discount_household_solar: z.number(),
  discount_industrial_solar: z.number(),
});

export interface IBoard extends z.infer<typeof BoardSchema> {};
export interface IBoardCreationValidatorSchema extends Optional<IBoard, 'id'> {}
