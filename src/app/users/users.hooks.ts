// Hooks for users module
import { useCallback } from 'react';
import { UsersService } from './users.service';

export function useUsersHooks() {
  const service = new UsersService();

  const list = useCallback((limit:number, offset:number) => {
    return service.listUsers(limit, offset);
  }, []);

  const create = useCallback((data: any) => {
    return service.createUsers(data);
  }, []);

  const get = useCallback((id: string) => {
    return service.getUser(id);
  }, []);

  const update = useCallback((id: string, updates: any) => {
    return service.updateUsers(id, updates);
  }, []);

  const remove = useCallback((id: string) => {
    return service.deleteUsers(id);
  }, []);

  return {
    list,
    create,
    get,
    update,
    remove,
  };
}
