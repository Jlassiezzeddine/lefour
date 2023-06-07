import { ChangeEvent, useCallback, useState } from 'react';
import { getServices } from 'src/common/queries/Services';
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
  const services = getServices();
  const handleChange = useCallback(
    (name: string, value: string | IService[]) => {
      setFormState({ ...formState, [name]: value });
    },
    [formState]
  );
  const toggleChildService = useCallback(
    async (
      parentSlug: string,
      event: ChangeEvent<HTMLInputElement>,
      checked: boolean
    ) => {
      const childslug = event.currentTarget.name;
      if (!checked) {
        console.log('Uncheck', childslug);
        const newArray: IService[] = formState.services.map((el) =>
          el.slug === parentSlug
            ? {
                name: el.name,
                slug: el.slug,
                description: el.description,
                pricing: el.pricing,
                children: el.children?.filter(
                  (child) => child.slug !== childslug
                ),
              }
            : el
        );
        handleChange('services', newArray);
      } else {
        console.log('check', childslug);
        const servicesResponse = await services;
        const serviceToAdd: IService = servicesResponse
          .find((el: IService) => el.slug === parentSlug)
          ?.children?.find((el) => el.slug === childslug)!;
        const newArray: IService[] = formState.services.map((el) =>
          el.slug === parentSlug
            ? {
                name: el.name,
                slug: el.slug,
                description: el.description,
                pricing: el.pricing,
                children: [...el.children!, serviceToAdd],
              }
            : el
        );
        handleChange('services', newArray);
      }
    },
    [formState.services, handleChange, services]
  );
  const handleSubmit = async () => {
    try {
      console.log(formState);
    } catch (error) {
      console.log(error);
      throw error;
    }
    //Todo : Add a toast or button animation for successful submit
  };

  return { formState, handleChange, handleSubmit, toggleChildService };
}
