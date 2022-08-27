import {Round} from './round';

export class Season {
    constructor(readonly rounds: Round[]) {}

    findNextRound(fromDate: Date): Round {
        const round = this.rounds.find(({startDate}) => {
            const date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + 3,
            );
            return fromDate.getTime() <= date.getTime();
        });
        if (round) {
            return round;
        }
        return this.rounds[this.rounds.length - 1];
    }
}
