import css from "./Options.module.css";

const Options = ({ btn, updateFeedback }) => {
  
  return (
    <>
      {btn.map((item, index) => {
        
        return (
          <button
            className={css.btn}
            key={index}
            onClick={() => {
              updateFeedback(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </>
  );
};

export default Options;
