import {Round} from './round';
import {Session} from './session';

export class RoundFinder {
    constructor(private readonly rounds: Round[]) {}

    findNext(fromDate: Date): Round {
        const nextSession = (session: Session) => fromDate.getTime() <= session.date.getTime();
        const nextRound = (round: Round) => round.sessions.find(nextSession);
        return this.rounds.find(nextRound) ?? this.rounds[this.rounds.length - 1];
    }
}
