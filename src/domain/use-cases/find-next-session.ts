import {Round} from '../round';
import {RoundFinder} from '../round-finder';
import {SessionFinder} from '../session-finder';

export type NextSession = {
    roundTitle: string;
    sessionTitle: string;
    date: Date;
};

export class FindNextSession {
    constructor(private readonly rounds: Round[]) {}

    findNextSession(fromDate: Date): NextSession {
        const round = new RoundFinder(this.rounds).findNext(fromDate);
        const session = new SessionFinder(round.sessions).findNext(fromDate);
        return {
            roundTitle: round.title,
            sessionTitle: session.title,
            date: session.date
        };
    }
}
