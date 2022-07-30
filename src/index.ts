import {Countdown} from './countdown';
import {Formatter} from './formatter';
import {SessionFinder} from './session-finder';
import sessions from './data/sessions.json';

const formatter = new Formatter();
const sessionFinder = new SessionFinder(sessions);

function updateCountdown() {
    const now = new Date();
    const session = sessionFinder.findNext(now)!;
    const countdown = new Countdown(now, session.date, formatter);
    document.getElementById('round')!.innerHTML = session.round;
    document.getElementById('session')!.innerHTML = session.title;
    document.getElementById('countdown')!.innerHTML = countdown.format();
}

updateCountdown();
setInterval(() => updateCountdown(), 1000);
