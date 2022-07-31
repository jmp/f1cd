import {Session} from './session';
import {Round} from './round';

type Data = {
    title: string;
    sessions: {
        title: string;
        date: string;
    }[];
}[];

export class SessionFinder {
    private readonly rounds: Round[];

    constructor(data: Data) {
        this.rounds = data.map(({ title, sessions , ...rest}) => ({
            ...rest,
            title,
            sessions: sessions.map(({ date , ...rest}) => ({
                ...rest,
                round: title,
                date: new Date(date)
            }))
        }));
    }

    findNext(fromDate: Date): Session {
        const nextSession = (session: Session) => fromDate.getTime() <= session.date.getTime();
        let round = this.rounds.find(({ sessions }) => sessions.find(nextSession));
        if (!round) {
            round = this.rounds[this.rounds.length - 1];
        }
        return round.sessions.find(nextSession) ?? round.sessions[round.sessions.length - 1];
    }
}