import {Round} from '../models/round';

export class FindNextRound {
    constructor(private readonly rounds: Round[]) {}

    findNextRound(fromDate: Date): Round {
        return this.rounds.find(
            ({startDate}) => fromDate.getTime() <= startDate.getTime()
        ) ?? this.rounds.at(-1)!;
    }
}
