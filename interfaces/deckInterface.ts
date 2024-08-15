import { CardInterface } from '@/interfaces/cardInterface';

export interface DeckInterface {
  deck_id: string;
  title: string;
  cards: CardInterface[];
}
