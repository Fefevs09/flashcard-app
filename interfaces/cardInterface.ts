import { Feedback } from './feedbackInterface';

export interface CardInterface {
  card_id: string;
  front: string;
  back: string;
  feedback: Feedback;
}
