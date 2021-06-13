import React ,{useState, useRef, useEffect} from 'react';
import './App.css';
import clockIcon from './clock.svg'

function App() {

  const[timerDays, setTimerDays] = useState("00")
  const[timerHours, setTimerHours] = useState("00")
  const[timerMinutes, setTimerMinutes] = useState("00")
  const[timerSeconds, setTimerSeconds] = useState("00")

  let interval = useRef()

  const startTimer = () => {
    const countDownDate = new Date('May 30, 2020 00:00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const timeGap = countDownDate -  now

      const days = Math.floor(timeGap / 1000 * 60 * 60 * 24)
      const hours = Math.floor((timeGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeGap % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((timeGap % (1000 * 60) / 1000))

      if (timeGap < 0){
        // stop the timer
        clearInterval(interval.current)
      } else {
        // update the timer

        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)

      }
    },1000)

   
  }

   // component did update
   useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    }
  })

  return (
    <div className="App">
      <section className="timer-container">
        <section className="timer">
          <div>
            <span><img src={clockIcon} alt="clock icon" className="timerIcon"/></span>
            <h2>Countdown timer</h2>
            <p>Countdown to a really special one</p>
          </div>
          <div>
         
            <section>
              <p>{timerDays}</p>
              <p><small>Days</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p><small>hours</small></p>
            </section>
            <span>:</span>

            <section>
              <p>{timerMinutes}</p>
              <p><small>minutes</small></p>
            </section>
            <span>:</span>

            <section>
              <p>{timerSeconds}</p>
              <p><small>seconds</small></p>
            </section>

          </div>
        </section>
      </section>
    </div>
  );
}

export default App;
