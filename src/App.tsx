import React, {useEffect, useState} from 'react';
import {Countdown} from './domain/countdown';
import {Formatter} from './domain/formatter';
import {SessionFinder} from './domain/session-finder';
import {RoundFinder} from './domain/round-finder';
import {mapSessionDataToRounds} from './data/session-data-mapping';
import sessionData from './data/sessions.json';

const now = new Date();
const formatter = new Formatter();
const rounds = mapSessionDataToRounds(sessionData);
const round = new RoundFinder(rounds).findNext(now);
const session = new SessionFinder(round.sessions).findNext(now);
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
