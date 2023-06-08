import { useQuery } from '@tanstack/react-query';
import { getGlobalSettings } from 'src/common/queries/Global';

export const useGlobalSettings = () => {
  return useQuery(['global-settings'], getGlobalSettings);
};
