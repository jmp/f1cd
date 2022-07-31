import {Countdown} from './countdown';
import {Formatter} from './formatter';
import {SessionFinder} from './session-finder';
import {RoundFinder} from './round-finder';
import data from './data/sessions.json';

const formatter = new Formatter();

const roundFinder = new RoundFinder(data);
const round = roundFinder.findNext(new Date());
const sessionFinder = new SessionFinder(round.sessions);

function updateCountdown() {
    const now = new Date();
    const session = sessionFinder.findNext(now);
    const countdown = new Countdown(now, session.date, formatter);
    document.getElementById('round')!.innerHTML = round.title;
    document.getElementById('session')!.innerHTML = session.title;
    document.getElementById('countdown')!.innerHTML = countdown.format();
}

updateCountdown();
setInterval(updateCountdown, 1000);
