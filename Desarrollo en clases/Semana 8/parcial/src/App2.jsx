import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';

import beepSound from '../public/BeepExamen.mp3';

const App2 = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [alarmHour, setAlarmHour] = useState(0);
  const [alarmMinute, setAlarmMinute] = useState(0);
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [isAlarmActive, setIsAlarmActive] = useState(false);
  const [countdownExpired, setCountdownExpired] = useState(false);
  const [isCounting, setIsCounting] = useState(false);
  const [soundInterval, setSoundInterval] = useState(null);
  const [silenceInterval, setSilenceInterval] = useState(null);
  const [alarmCount, setAlarmCount] = useState(0);
  const [isAlarmSounding, setIsAlarmSounding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (isAlarmActive && !isCounting) {
      const alarmTime = new Date();
      alarmTime.setHours(alarmHour);
      alarmTime.setMinutes(alarmMinute);
      alarmTime.setSeconds(0);

      if (currentTime >= alarmTime) {
        setIsCounting(true);
        setCountdownExpired(true);
        playAlarmSound();

        const soundInterval = setTimeout(() => {
          setCountdownExpired(false);
          stopAlarmSound();
          setIsAlarmSounding(false);
        }, 30000);

        const silenceInterval = setTimeout(() => {
          setAlarmCount((prevCount) => prevCount + 1);
        }, 60000);

        setSoundInterval(soundInterval);
        setSilenceInterval(silenceInterval);
      }
    }
  }, [isAlarmActive, isCounting, alarmHour, alarmMinute, currentTime]);

  useEffect(() => {
    if (alarmCount >= 3) {
      setIsCounting(false);
      setIsAlarmActive(false);
      clearTimeout(soundInterval);
      clearTimeout(silenceInterval);
      setAlarmCount(0);
    }
  }, [alarmCount, soundInterval, silenceInterval]);

  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  const playAlarmSound = () => {
    const sound = new Howl({
      src: [beepSound],
      loop: true,
    });

    sound.play();
    setIsAlarmSounding(true);
  };

  const stopAlarmSound = () => {
    const sound = new Howl({
      src: [beepSound],
    });

    sound.stop();
  };

  const handleAlarmSet = () => {
    setIsAlarmSet(true);
    setIsAlarmActive(true);
  };

  const handleAlarmDisable = () => {
    setIsAlarmSet(false);
    setIsAlarmActive(false);
    setIsCounting(false);
    setCountdownExpired(false);
    clearTimeout(soundInterval);
    clearTimeout(silenceInterval);
    setAlarmCount(0);
    stopAlarmSound();
    setIsAlarmSounding(false);
  };

  const handleHourChange = (e) => {
    const value = parseInt(e.target.value);
    setAlarmHour(value > 23 ? 23 : value);
  };

  const handleMinuteChange = (e) => {
    const value = parseInt(e.target.value);
    setAlarmMinute(value > 59 ? 59 : value);
  };

  const renderClock = () => {
    const hours = formatTime(currentTime.getHours());
    const minutes = formatTime(currentTime.getMinutes());
    const seconds = formatTime(currentTime.getSeconds());
    const date = currentTime.toLocaleDateString();

    return (
      <div className="clock">
        <h1>{`${hours}:${minutes}:${seconds}`}</h1>
        <p>{date}</p>
      </div>
    );
  };

  const renderAlarm = () => {
    return (
      <div className="alarm">
        <div className="alarm-inputs">
          <label>Horas:</label>
          <input
            type="number"
            value={alarmHour}
            onChange={handleHourChange}
            min={0}
            max={23}
            disabled={isAlarmSet}
            className="alarm-input"
          />
          <label>Minutos:</label>
          <input
            type="number"
            value={alarmMinute}
            onChange={handleMinuteChange}
            min={0}
            max={59}
            disabled={isAlarmSet}
            className="alarm-input"
          />
        </div>
        {!isAlarmSet && (
          <button onClick={handleAlarmSet}>Establecer alarma</button>
        )}
        {isAlarmSet && (
          <button onClick={handleAlarmDisable} disabled={isCounting}>
            Desactivar alarma
          </button>
        )}
      </div>
    );
  };

  const renderCountdown = () => {
    if (countdownExpired) {
      const countdown = Math.floor(
        (currentTime - new Date().setHours(alarmHour, alarmMinute, 0)) / 1000
      );

      return (
        <div className="countdown expired">
          <h2>{`-${formatTime(Math.abs(countdown) % 60)}`}</h2>
        </div>
      );
    } else {
      const countdown = Math.floor(
        (new Date().setHours(alarmHour, alarmMinute, 0) - currentTime) / 1000
      );

      return (
        <div className="countdown">
          <h2>{`${formatTime(Math.floor(countdown / 3600))}:${formatTime(
            Math.floor((countdown % 3600) / 60)
          )}:${formatTime(countdown % 60)}`}</h2>
        </div>
      );
    }
  };

  return (
    <div className="alarma">
      {renderClock()}
      {isAlarmSet && renderCountdown()}
      {renderAlarm()}
    </div>
  );
};

export default App2;

