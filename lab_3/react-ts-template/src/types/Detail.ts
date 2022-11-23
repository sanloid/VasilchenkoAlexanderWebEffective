import { CardPropType } from './Card';

export interface DetailPropType {
  id: string;
  name: string;
  desc: string;
  img: string;
  comics?: string[];
  series?: string[];
  characters?: string[];
}
