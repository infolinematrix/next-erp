export interface Account {
  id: string
  name: string
  type: AccountType
  balance: number
  isActive: boolean
  createdAt?: string
  updatedAt?: string
}

// Enum or Union for Account Types
export type AccountType = 'savings' | 'current' | 'credit' | 'loan'

// Input for creating a new account
export interface CreateAccountInput {
  name: string
  type: AccountType
  balance: number
}

// Input for updating an account
export interface UpdateAccountInput {
  name?: string
  balance?: number
  isActive?: boolean
}


export type AccountsTypes = {
  Account: Account
  AccountType: AccountType
  CreateAccountInput: CreateAccountInput
  UpdateAccountInput: UpdateAccountInput
}