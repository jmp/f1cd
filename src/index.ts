import {Countdown} from './countdown';
import {Formatter} from './formatter';
import {SessionFinder} from './session-finder';
import sessionData from './data/sessions.json';

const targetId = 'countdown';
const updateInterval = 1000;

const formatter = new Formatter();
const sessions = sessionData.map(({ title, date }) => ({ title, date: new Date(date) }));
const sessionFinder = new SessionFinder(sessions);
const targetElement = document.getElementById(targetId)!;

function updateCountdown() {
    const now = new Date();
    const session = sessionFinder.findNext(now);
    const countdown = new Countdown(now, session!.date, formatter);
    targetElement.innerHTML = countdown.format();
}

updateCountdown();
setInterval(() => updateCountdown(), updateInterval);
