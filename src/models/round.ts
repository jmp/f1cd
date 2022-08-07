import {Session} from './session';

export class Round {
    constructor(
        readonly title: string,
        readonly startDate: Date,
        readonly sessions: Session[]
    ) {}

    findNextSession(fromDate: Date): Session {
        return this.sessions.find(
            ({date}) => fromDate.getTime() <= date.getTime()
        ) ?? this.sessions.at(-1)!;
    }

    findSessionsBefore(date: Date): Session[] {
        return this.sessions.filter(session => session.date.getTime() < date.getTime());
    }

    findSessionsAfter(date: Date): Session[] {
        return this.sessions.filter(session => session.date.getTime() >= date.getTime());
    }
}
