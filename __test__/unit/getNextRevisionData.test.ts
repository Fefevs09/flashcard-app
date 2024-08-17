import { Feedback } from '@/interfaces/feedbackInterface';
import { getNextRevisionDay } from '@/util/getNextRevisionDay';

describe('getNextRevisionDay', () => {
  it('should return 1 day for HARD feedback', () => {
    const nextRevisionDay = getNextRevisionDay(Feedback.HARD);
    const expectedDay = new Date();
    expectedDay.setDate(expectedDay.getDate() + 1);
    expect(nextRevisionDay.getDate()).toBe(expectedDay.getDate());
  });

  it('should return 7 days for MEDIUM feedback', () => {
    const nextRevisionDay = getNextRevisionDay(Feedback.MEDIUM);
    const expectedDay = new Date();
    expectedDay.setDate(expectedDay.getDate() + 7);
    expect(nextRevisionDay.getDate()).toBe(expectedDay.getDate());
  });

  it('should return 10 days for GOOD feedback', () => {
    const nextRevisionDay = getNextRevisionDay(Feedback.GOOD);
    const expectedDay = new Date();
    expectedDay.setDate(expectedDay.getDate() + 10);
    expect(nextRevisionDay.getDate()).toBe(expectedDay.getDate());
  });

  it('should return 14 days for EASY feedback', () => {
    const nextRevisionDay = getNextRevisionDay(Feedback.EASY);
    const expectedDay = new Date();
    expectedDay.setDate(expectedDay.getDate() + 14);
    expect(nextRevisionDay.getDate()).toBe(expectedDay.getDate());
  });
});
