import { FC, useState, useEffect } from "react";

import "./Timer.scss";

interface TimerProps {
  deadline: string;
}

// Timer logic
export const Timer: FC<TimerProps> = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTripStarted, setIsTripStarted] = useState(false);

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    const isStarted = time < 0;

    setIsTripStarted(isStarted);

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));

  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="timer">
      {isTripStarted ? (
        <p>This trip is already started</p>
      ) : (
        <>
          <div className="timer__item">
            <p className="timer__time">{days < 10 ? "0" + days : days}</p>
            <span className="timer__text">Days</span>
          </div>
          <div className="timer__item">
            <p className="timer__time">{hours < 10 ? "0" + hours : hours}</p>
            <span className="timer__text">Hours</span>
          </div>
          <div className="timer__item">
            <p className="timer__time">
              {minutes < 10 ? "0" + minutes : minutes}
            </p>
            <span className="timer__text">Minutes</span>
          </div>
          <div className="timer__item">
            <p className="timer__time">
              {seconds < 10 ? "0" + seconds : seconds}
            </p>
            <span className="timer__text">Seconds</span>
          </div>
        </>
      )}
    </div>
  );
};
