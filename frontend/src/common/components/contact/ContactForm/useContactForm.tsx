import { ChangeEvent, useState } from 'react';
import { usePostMessage } from 'src/common/hooks/api/message';
import { IMessage } from 'src/common/types/Message';

const initialState: IMessage = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
};

export default function useContactForm() {
  const [formState, setFormState] = useState<IMessage>(initialState);
  const { mutate, isLoading, isSuccess, isError, isIdle } = usePostMessage();
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async () => {
    mutate(formState as IMessage);
    //Todo : Add a toast or button animation for successful submit
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    isLoading,
    isSuccess,
    isError,
    isIdle,
  };
}
