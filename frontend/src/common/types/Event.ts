import { IPerformer } from './Performer';
import { IPrice } from './Price';

export interface IEvent {
  id: string;
  slug: string;
  label: string;
  description: string;
  venue: string;
  startDate: Date;
  endDate: Date;
  performers: IPerformer[];
  pricing: IPrice[];
  ticketsExternal: string  
}
