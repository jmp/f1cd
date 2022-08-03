import {Round} from '../round';
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
        const session = this.findNextSessionInRound(fromDate, round);
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

    private findNextSessionInRound(fromDate: Date, round: Round): Session {
        const nextSession = (session: Session) => fromDate.getTime() <= session.date.getTime();
        return round.sessions.find(nextSession) ?? round.sessions[round.sessions.length - 1];
    }
}
