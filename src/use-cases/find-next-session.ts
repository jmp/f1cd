import {Round} from '../models/round';
import {Session} from '../models/session';

export class FindNextSession {
    constructor(private readonly round: Round) {}

    findNextSession(fromDate: Date): Session {
        const session = this.round.sessions.find(
            ({date}) => fromDate.getTime() <= date.getTime()
        ) ?? this.round.sessions.at(-1)!;
        return {
            title: session.title,
            date: session.date
        };
    }
}
