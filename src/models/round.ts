import {Session} from './session';

export class Round {
    constructor(
        readonly title: string,
        readonly startDate: Date,
        readonly sessions: Session[]
    ) {}

    findNextSession(fromDate: Date): Session {
        const session = this.sessions.find(
            ({date}) => fromDate.getTime() <= date.getTime()
        ) ?? this.sessions.at(-1)!;
        return {
            title: session.title,
            date: session.date
        };
    }

    findSessionsBefore(date: Date): Session[] {
        return this.sessions.filter(session => session.date.getTime() < date.getTime());
    }

    findSessionsAfter(date: Date): Session[] {
        return this.sessions.filter(session => session.date.getTime() >= date.getTime());
    }
}
