import {Session} from '../models/session';

export class FindNextSession {
    constructor(private readonly sessions: Session[]) {}

    findNextSession(fromDate: Date): Session {
        const session = this.sessions.find(
            ({date}) => fromDate.getTime() <= date.getTime()
        ) ?? this.sessions.at(-1)!;
        return {
            title: session.title,
            date: session.date
        };
    }
}
