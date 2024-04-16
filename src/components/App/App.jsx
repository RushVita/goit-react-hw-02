import Description from "../Description/Description";
import Response from "../Response/Response"
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import "normalize.css";
import css from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [clicks, setClicks] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(clicks));
  }, [clicks]);

  const keysBtn = Object.keys(clicks);

  const updateFeedback = (feedbackType) => {
    console.log(feedbackType);
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
      <Description />
      <div className={css.wraperBtn}>
        <Options btn={keysBtn} updateFeedback={updateFeedback}></Options>

        {totalFeedback !== 0 && (
          <button className={css.btn} onClick={resetFeedback}>
            Reset
          </button>
        )}
      </div>
      {totalFeedback > 0 ? (
        <Response clicks={clicks} total={totalFeedback} positiveFeedback={positiveFeedback}/>
      ) : (
        <Notification message="No feedback yet" />
      )}
      
    </div>
  );
}

export default App;
