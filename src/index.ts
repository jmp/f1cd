import {Countdown} from './countdown';
import {Formatter} from './formatter';
import {SessionFinder} from './session-finder';
import sessionData from './data/sessions.json';

const updateInterval = 1000;

const formatter = new Formatter();
const sessions = sessionData.map(({ round, title, date }) => ({ round, title, date: new Date(date) }));
const sessionFinder = new SessionFinder(sessions);

const roundElement = document.getElementById('round')!;
const sessionElement = document.getElementById('session')!;
const countdownElement = document.getElementById('countdown')!;

function updateCountdown() {
    const now = new Date();
    const session = sessionFinder.findNext(now);
    const countdown = new Countdown(now, session!.date, formatter);
    roundElement.innerHTML = session!.round;
    sessionElement.innerHTML = session!.title;
    countdownElement.innerHTML = countdown.format();
}

updateCountdown();
setInterval(() => updateCountdown(), updateInterval);
