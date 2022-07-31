import {Session} from './session';

export class SessionFinder {
    constructor(private sessions: Session[]) {}

    findNext(fromDate: Date): Session {
        const nextSession = (session: Session) => fromDate.getTime() <= session.date.getTime();
        return this.sessions.find(nextSession) ?? this.sessions[this.sessions.length - 1];
    }
}