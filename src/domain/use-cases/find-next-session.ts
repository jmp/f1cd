import {Round} from '../round';
import {SessionFinder} from '../session-finder';
import {Session} from '../session';

export type NextSession = {
    roundTitle: string;
    sessionTitle: string;
    date: Date;
};

export class FindNextSession {
    constructor(private readonly rounds: Round[]) {}

    findNextSession(fromDate: Date): NextSession {
        const round = this.findNextRound(fromDate);
        const session = new SessionFinder(round.sessions).findNext(fromDate);
        return {
            roundTitle: round.title,
            sessionTitle: session.title,
            date: session.date
        };
    }

    private findNextRound(fromDate: Date): Round {
        const nextSession = (session: Session) => fromDate.getTime() <= session.date.getTime();
        const nextRound = (round: Round) => round.sessions.find(nextSession);
        return this.rounds.find(nextRound) ?? this.rounds[this.rounds.length - 1];
    }
}
