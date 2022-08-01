import React, {useEffect, useState} from 'react';
import {Countdown} from './domain/countdown';
import {Formatter} from './domain/formatter';
import {SessionFinder} from './domain/session-finder';
import {RoundFinder} from './domain/round-finder';
import data from './data/sessions.json';

const formatter = new Formatter();
const roundFinder = new RoundFinder(data);
const round = roundFinder.findNext(new Date());
const sessionFinder = new SessionFinder(round.sessions);
const session = sessionFinder.findNext(new Date());
const createCountdown = () => new Countdown(new Date(), session.date, formatter);

function App() {
  const [countdown, setCountdown] = useState(createCountdown());

  useEffect(() => {
    const interval = setInterval(() => setCountdown(createCountdown()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Countdown</h1>
      <h2 data-testid="round">{round.title}</h2>
      <p><b data-testid="session">{session.title}</b> starts in <b data-testid="countdown">{countdown.format()}</b>.</p>
      <p><a href="https://github.com/jmp/f1cd">View the source on GitHub</a></p>
    </div>
  );
}

export default App;
