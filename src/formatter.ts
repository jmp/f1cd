export class Formatter {
    format(totalSeconds: number): string {
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor(totalSeconds % (3600 * 24) / 3600);
        const minutes = Math.floor(totalSeconds % 3600 / 60);
        const seconds = Math.floor(totalSeconds % 60);

        return [
            days, days === 1 ? 'day' : 'days',
            hours, hours === 1 ? 'hour' : 'hours',
            minutes, minutes === 1 ? 'minute' : 'minutes',
            seconds, seconds === 1 ? 'second' : 'seconds'
        ].join(' ');
    }
}