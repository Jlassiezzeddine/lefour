import { useCallback, useState } from 'react';
import { usePostReservation } from 'src/common/hooks/api/reservation';
import { IServiceCategories } from 'src/common/types/ServiceCategories';
export interface IQuoteForm {
  services: IServiceCategories[];
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
    (name: string, value: string | IServiceCategories[]) => {
      setFormState({ ...formState, [name]: value });
    },
    [formState]
  );

  const handleSubmit = async () => {
    const payload = {
      ...formState,
      service_categories: { connect: formState.services.map((e) => e.id) },
    };
    console.log('payload', payload);
    mutate(payload);
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
