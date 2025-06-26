// Types for Hrms module

export interface Hrms {
  id: string;
  isActive: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export type HrmsType = 'type1' | 'type2';

export type HrmsTypes = {
  Hrms: Hrms;
  HrmsType: HrmsType;
};