import {Round} from '../models/round';

export type NextSession = {
    roundTitle: string;
    sessionTitle: string;
    date: Date;
};

export class FindNextSession {
    constructor(private readonly round: Round) {}

    findNextSession(fromDate: Date): NextSession {
        const session = this.round.sessions.find(
            ({date}) => fromDate.getTime() <= date.getTime()
        ) ?? this.round.sessions.at(-1)!;
        return {
            roundTitle: this.round.title,
            sessionTitle: session.title,
            date: session.date
        };
    }
}
