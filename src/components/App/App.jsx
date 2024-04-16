import Decription from "../Description/Decription";
import FeedBack from "../FeedBack/FeedBack";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import "normalize.css";
import css from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    console.log(savedFeedback);
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(clicks));
  }, [clicks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      return setClicks({ ...clicks, good: clicks.good + 1 });
    }
    if (feedbackType === "neutral") {
      return setClicks({ ...clicks, neutral: clicks.neutral + 1 });
    }
    if (feedbackType === "bad") {
      return setClicks({ ...clicks, bad: clicks.bad + 1 });
    }
    return;
  };
  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positiveFeedback = Math.round((clicks.good / totalFeedback) * 100);

  const resetFeedback = () => {
    return setClicks({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.container}>
      <h1>Sip Happens Café</h1>
      <Decription />
      <div>
        <Options updateFeedback={updateFeedback}>Good</Options>
        <Options updateFeedback={updateFeedback}>Neutral</Options>
        <Options updateFeedback={updateFeedback}>Bad</Options>
        {totalFeedback !== 0 && (
          <button
            className={css.btn}
            onClick={() => {
              resetFeedback();
            }}
          >
            Reset
          </button>
        )}
      </div>
      {totalFeedback !== 0 ? (
        <FeedBack
          clicks={clicks}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
