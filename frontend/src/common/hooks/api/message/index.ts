import { useMutation } from '@tanstack/react-query';
import { postMessage } from 'src/common/queries/Message';

export const usePostMessage = () => {
  const { mutate, isLoading, isSuccess, isError, isIdle } =
    useMutation(postMessage);
  return { mutate, isLoading, isSuccess, isError, isIdle };
};
