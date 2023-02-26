import {Round} from './round';

export class Season {
    constructor(readonly rounds: Round[]) {
        let previousStartDate = rounds[0].startDate;
        rounds.forEach(({startDate}) => {
            if (startDate.getTime() < previousStartDate.getTime()) {
                throw new Error('rounds should be ordered by date');
            }
            previousStartDate = startDate;
        });
    }

    findNextRound(fromDate: Date): Round {
        const round = this.rounds.find(({endDate}) => fromDate.getTime() <= endDate.getTime());
        if (round) {
            return round;
        }
        return this.rounds[this.rounds.length - 1];
    }
}
