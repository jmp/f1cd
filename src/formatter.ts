export class Formatter {
    format(totalSeconds: number): string {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor(totalSeconds / 60) - hours * 60;
        const seconds = totalSeconds - hours * 3600 - minutes * 60;
        return `0 days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    }
}