import {Round} from '../models/round';
import {Session} from '../models/session';

export type NextSession = {
    roundTitle: string;
    sessionTitle: string;
    date: Date;
};

export class FindNextSession {
    constructor(private readonly rounds: Round[]) {}

    findNextSession(fromDate: Date): NextSession {
        const round = this.findNextRound(fromDate);
        const session = this.findNextSessionInRound(fromDate, round);
        return {
            roundTitle: round.title,
            sessionTitle: session.title,
            date: session.date
        };
    }

    private findNextRound(fromDate: Date): Round {
        return this.rounds.find(
            ({startDate}) => fromDate.getTime() <= startDate.getTime()
        ) ?? this.rounds.at(-1)!;
    }

    private findNextSessionInRound(fromDate: Date, round: Round): Session {
        return round.sessions.find(
            ({date}) => fromDate.getTime() <= date.getTime()
        ) ?? round.sessions.at(-1)!;
    }
}
