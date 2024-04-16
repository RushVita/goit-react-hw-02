const Options = ({ children, updateFeedback, resetFeedback }) => {
  return (
    <button
      onClick={() => {
        if (updateFeedback) {
          console.log(updateFeedback);
          return updateFeedback(`${children.toLowerCase()}`);
        }
        if (resetFeedback) {
          return resetFeedback;
        }
      }}
    >
      {children}
    </button>
  );
};

export default Options;
