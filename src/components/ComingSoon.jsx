import { useState, useEffect } from "react";

export default function ComingSoon() {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3); // Set the target date 3 days from now

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    const countdownInterval = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <div className=" d-flex justify-content-center align-items-center vh-100 text-center coming-soon-main">
      <div
        style={{
          padding: " 20px",
          borderRadius: "10px",
          backgroundColor: "#ffffff30",
        }}
      >
        <h1>We are coming soon!!!</h1>
        <p className=" pb-3 text-black-50">Stay tuned for something amazing</p>
        <div className="timer d-flex justify-content-center align-items-center gap-3 flex-wrap">
          <span>
            <h1>{countdown.days}</h1>
            <p>Days</p>
          </span>
          <span>
            <h1>{countdown.hours}</h1>
            <p>Hours</p>
          </span>
          <span>
            <h1>{countdown.minutes}</h1>
            <p>Minutes</p>
          </span>
          <span>
            <h1>{countdown.seconds} </h1>
            <p>Seconds</p>
          </span>
        </div>
      </div>
    </div>
  );
}
