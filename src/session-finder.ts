import {Session} from './session';

export class SessionFinder {
    private readonly sessions: Session[];

    constructor(data: { round: string, title: string, date: string }[]) {
        this.sessions = data.map(({ date , ...rest}) => ({
            ...rest,
            date: new Date(date)
        }))
    }

    findNext(fromDate: Date): Session {
        const session = this.sessions.find(session => fromDate.getTime() <= session.date.getTime());
        if (session) {
            return session;
        }
        return this.sessions[this.sessions.length - 1];
    }
}