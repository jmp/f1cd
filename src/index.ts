import {Countdown} from './countdown';
import {Formatter} from "./formatter";

const targetId = 'countdown';
const updateInterval = 1000;

const formatter = new Formatter();
const targetElement = document.getElementById(targetId)!;

function updateCountdown() {
    const countdown = new Countdown(new Date(), new Date('2022-12-24'), formatter);
    targetElement.innerHTML = countdown.format();
}

updateCountdown();
setInterval(() => updateCountdown(), updateInterval);
