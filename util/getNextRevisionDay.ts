import { Feedback } from '@/interfaces/feedbackInterface';

// temporary function, have to a better return using machine learning
export function getNextRevisionDay(feedback: Feedback): Date {
  const today = new Date();
  let nextRevisionDay = new Date(today);

  switch (feedback) {
    case Feedback.HARD:
    case Feedback.NONE:
      nextRevisionDay.setDate(today.getDate() + 1);
      break;
    case Feedback.MEDIUM:
      nextRevisionDay.setDate(today.getDate() + 7);
      break;
    case Feedback.GOOD:
      nextRevisionDay.setDate(today.getDate() + 10);
      break;
    case Feedback.EASY:
      nextRevisionDay.setDate(today.getDate() + 14);
      break;
    default:
      nextRevisionDay.setDate(today.getDate() + 1);
  }

  return nextRevisionDay;
}
