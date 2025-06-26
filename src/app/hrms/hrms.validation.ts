import { z } from 'zod'

export const hrmsTypeEnum = z.enum(['savings', 'current', 'credit', 'loan'])

export const createHrmsSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  type: hrmsTypeEnum,
  balance: z.number().nonnegative({ message: 'Balance must be a non-negative number' }),
})

export const updateHrmsSchema = z.object({
  name: z.string().min(3).optional(),
  balance: z.number().nonnegative().optional(),
  isActive: z.boolean().optional(),
})

export const hrmsSchemas = {
  create: createHrmsSchema,
  update: updateHrmsSchema,
}
