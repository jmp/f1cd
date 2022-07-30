export class Formatter {
    format(totalSeconds: number): string {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds - minutes * 60;
        return `0 days, 0 hours, ${minutes} minutes and ${seconds} seconds`;
    }
}