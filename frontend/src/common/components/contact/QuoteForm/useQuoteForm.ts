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
    (
      parentSlug: string,
      event: ChangeEvent<HTMLInputElement>,
      checked: boolean
    ) => {
      const childServiceSlug = event.currentTarget.name;
      if (!checked) {
        console.log('Uncheck', childServiceSlug);
        const newArray: IService[] = formState.services.map((el) =>
          el.serviceSlug === parentSlug
            ? {
                serviceName: el.serviceName,
                serviceSlug: el.serviceSlug,
                serviceDescription: el.serviceDescription,
                pricing: el.pricing,
                children: el.children?.filter(
                  (child) => child.serviceSlug !== childServiceSlug
                ),
              }
            : el
        );
        handleChange('services', newArray);
      } else {
        console.log('check', childServiceSlug);
        const serviceToAdd: IService = services
          .find((el) => el.serviceSlug === parentSlug)
          ?.children?.find((el) => el.serviceSlug === childServiceSlug)!;
        const newArray: IService[] = formState.services.map((el) =>
          el.serviceSlug === parentSlug
            ? {
                serviceName: el.serviceName,
                serviceSlug: el.serviceSlug,
                serviceDescription: el.serviceDescription,
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
