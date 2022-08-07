import {Round} from './round';

export class Season {
    constructor(readonly rounds: Round[]) {}

    findNextRound(fromDate: Date) {
        return this.rounds.find(
            ({startDate}) => fromDate.getTime() <= startDate.getTime()
        ) ?? this.rounds.at(-1)!;
    }
}