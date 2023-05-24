export interface ILink {
  label: string;
  path: string;
  slug: string;
  children?: ILink[];
  icon?: string;
  description?: string;
}
