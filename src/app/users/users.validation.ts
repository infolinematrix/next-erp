import { z } from 'zod'

export const usersTypeEnum = z.enum(['founder', 'investor', 'employee', 'customer'])

export const createUsersSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  type: usersTypeEnum,
  balance: z.number().nonnegative({ message: 'Balance must be a non-negative number' }),
})

export const updateUsersSchema = z.object({
  name: z.string().min(3).optional(),
  balance: z.number().nonnegative().optional(),
  isActive: z.boolean().optional(),
})

export const usersSchemas = {
  create: createUsersSchema,
  update: updateUsersSchema,
}
