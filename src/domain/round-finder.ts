import {Round} from './round';
import {SessionData} from '../data/session-data';
import {Session} from './session';

export class RoundFinder {
    private readonly rounds: Round[];

    constructor(data: SessionData) {
        this.rounds = data.map(({title, sessions, ...rest}) => ({
            ...rest,
            title,
            sessions: sessions.map(({date, ...rest}) => ({
                ...rest,
                date: new Date(date)
            }))
        }));
    }

    findNext(fromDate: Date): Round {
        const nextSession = (session: Session) => fromDate.getTime() <= session.date.getTime();
        const nextRound = (round: Round) => round.sessions.find(nextSession);
        return this.rounds.find(nextRound) ?? this.rounds[this.rounds.length - 1];
    }
}
