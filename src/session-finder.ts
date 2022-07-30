import {Session} from './session';

export class SessionFinder {
    constructor(private sessions: Session[]) {}

    findNext(fromDate: Date): Session | undefined {
        return this.sessions.find(session => fromDate.getTime() <= session.date.getTime());
    }
}