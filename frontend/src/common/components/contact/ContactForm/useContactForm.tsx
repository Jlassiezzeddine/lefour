import { ChangeEvent, useState } from 'react';

export default function useContactForm<T>(initialState: T) {
  const [formState, setFormState] = useState<T>(initialState);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      setFormState(initialState);
    } catch (error) {
      console.log(error);
      throw error;
    }
    //Todo : Add a toast or button animation for successful submit
  };

  return { formState, handleChange, handleSubmit };
}
