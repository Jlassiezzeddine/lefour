import { useQuery } from '@tanstack/react-query';
import { getServices } from 'src/common/queries/Services';


export const useService = (id?: string) => {
    return useQuery(['Service', id], () => getServices(id));
}