import {Round} from './round';

export class Season {
    constructor(readonly rounds: Round[]) {}

    findNextRound(fromDate: Date): Round {
        const round = this.rounds.find(({startDate}) => fromDate.getTime() <= startDate.getTime());
        if (round) {
            return round;
        }
        return this.rounds[this.rounds.length - 1];
    }
}
