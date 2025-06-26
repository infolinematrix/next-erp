// Hooks for hrms module
import { useCallback } from 'react';
import { HrmsService } from './hrms.service';

export function useHrmsHooks() {
  const service = new HrmsService();

  const create = useCallback((data: any) => {
    return service.createHrms(data);
  }, []);

  const get = useCallback((id: string) => {
    return service.getHrms(id);
  }, []);

  const update = useCallback((id: string, updates: any) => {
    return service.updateHrms(id, updates);
  }, []);

  const remove = useCallback((id: string) => {
    return service.deleteHrms(id);
  }, []);

  return {
    create,
    get,
    update,
    remove,
  };
}
