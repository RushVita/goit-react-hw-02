import css from "./Options.module.css";

const Options = ({ btn, onUpdateFeedback, totalFeedback, onReset }) => {
  return (
    <>
      {btn.map((item, index) => {
        return (
          <button
            className={css.btn}
            key={index}
            onClick={() => {
              onUpdateFeedback(item);
            }}
          >
            {item}
          </button>
        );
      })}
      {totalFeedback !== 0 && (
        <button
          className={css.btn}
          onClick={() => {
            onReset();
          }}
        >
          Reset
        </button>
      )}
    </>
  );
};

export default Options;
