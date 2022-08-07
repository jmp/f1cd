import {Round} from '../models/round';
import {Season} from '../models/season';

export class FindNextRound {
    constructor(private readonly season: Season) {}

    findNextRound(fromDate: Date): Round {
        return this.season.rounds.find(
            ({startDate}) => fromDate.getTime() <= startDate.getTime()
        ) ?? this.season.rounds.at(-1)!;
    }
}
