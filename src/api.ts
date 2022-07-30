import {Countdown} from './countdown';
import {Formatter} from "./formatter";

const formatter = new Formatter();

export function countdown(from: Date, to: Date): string {
    const countdown = new Countdown(from, to, formatter);
    return countdown.format();
}
