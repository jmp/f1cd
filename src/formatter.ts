export class Formatter {
    format(totalSeconds: number): string {
        const days = Math.floor(totalSeconds / (24 * 3600));
        const hours = Math.floor((totalSeconds - days * 24 * 3600) / 3600);
        const minutes = Math.floor((totalSeconds - days * 24 * 3600 - hours * 3600) / 60);
        const seconds = totalSeconds - days * 24 * 3600 - hours * 3600 - minutes * 60;
        return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;
    }
}