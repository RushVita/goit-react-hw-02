import css from "./Options.module.css";

const Options = ({ children, updateFeedback, resetFeedback }) => {
  return (
    <button
      className={css.btn}
      onClick={() => {
        if (updateFeedback) {
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
