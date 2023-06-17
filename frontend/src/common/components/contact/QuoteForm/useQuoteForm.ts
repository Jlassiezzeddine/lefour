import { useCallback, useState } from 'react';
import { usePostReservation } from 'src/common/hooks/api/reservation';
import { IService } from 'src/common/types/Service';
export interface IQuoteForm {
  services: IService[];
  description: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export default function useQuoteForm(initialState: IQuoteForm) {
  const [formState, setFormState] = useState<IQuoteForm>(initialState);

  const { mutate, isLoading, isError, isIdle, isSuccess } =
    usePostReservation();
  const handleChange = useCallback(
    (name: string, value: string | IService[]) => {
      setFormState({ ...formState, [name]: value });
    },
    [formState]
  );

  const handleSubmit = async () => {
    mutate(formState);
    //Todo : Add a toast or button animation for successful submit
  };

  return {
    formState,
    isLoading,
    handleChange,
    handleSubmit,
    isError,
    isIdle,
    isSuccess,
  };
}
