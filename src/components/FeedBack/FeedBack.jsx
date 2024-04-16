import css from "../FeedBack/Feedback.module.css"

const FeedBack = ({
  clicks: { good, neutral, bad },
  total,
  positiveFeedback,
}) => {
  return (
    <ul className={css.wrap}>
      <li className={css.list}>Good: {good}</li>
      <li className={css.list}>Neutral: {neutral}</li>
      <li className={css.list}>Bad: {bad}</li>
      <li className={css.list}>Total: {total}</li>
      <li className={css.list}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default FeedBack;
