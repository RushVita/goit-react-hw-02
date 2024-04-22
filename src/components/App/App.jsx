import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import "normalize.css";
import css from "./App.module.css";

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
    return setClicks((prevFeedback) => {
      return { ...clicks, [feedbackType]: prevFeedback[feedbackType] + 1 };
    });
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
        <Options
          btn={keysBtn}
          onUpdateFeedback={updateFeedback}
          totalFeedback={totalFeedback}
          onReset={resetFeedback}
        />
      </div>
      {totalFeedback > 0 ? (
        <Feedback clicks={clicks} total={totalFeedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;
