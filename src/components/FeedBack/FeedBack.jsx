const FeedBack = ({
  clicks: { good, neutral, bad },
  total,
  positiveFeedback,
}) => {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default FeedBack;
