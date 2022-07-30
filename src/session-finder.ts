import {Session} from './session';

export class SessionFinder {
    private sessions: Session[];

    constructor(data: { round: string, title: string, date: string }[]) {
        this.sessions = data.map(({ round, title, date }) => ({
            round,
            title,
            date: new Date(date)
        }))
    }

    findNext(fromDate: Date): Session | undefined {
        return this.sessions.find(session => fromDate.getTime() <= session.date.getTime());
    }
}