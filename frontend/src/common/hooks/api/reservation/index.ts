import { useMutation } from '@tanstack/react-query';
import { postReservation } from 'src/common/queries/Reservation';

export const usePostReservation = () => {
  const { mutate, isLoading, isError, isIdle, isSuccess } = useMutation(postReservation);
  return { mutate, isLoading, isError, isIdle, isSuccess };
};
