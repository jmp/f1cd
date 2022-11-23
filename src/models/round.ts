import {Session} from './session';

export class Round {
    readonly startDate: Date;
    readonly endDate: Date;

    constructor(
        readonly title: string,
        readonly sessions: Session[]
    ) {
        let startDate = sessions[0].date;
        let endDate = sessions[0].date;
        sessions.forEach(({ date }) => {
            if (date.getTime() <= startDate.getTime()) {
                startDate = new Date(
                    Date.UTC(
                        date.getUTCFullYear(),
                        date.getUTCMonth(),
                        date.getUTCDate()
                    )
                );
            }
            if (date.getTime() >= endDate.getTime()) {
                endDate = new Date(
                    Date.UTC(
                        date.getUTCFullYear(),
                        date.getUTCMonth(),
                        date.getUTCDate() + 1
                    )
                );
            }
        });
        this.startDate = startDate;
        this.endDate = endDate;
    }

    findNextSession(fromDate: Date): Session {
        const session = this.sessions.find(({date}) => fromDate.getTime() <= date.getTime());
        if (session) {
            return session;
        }
        return this.sessions[this.sessions.length - 1];
    }

    findSessionsBefore(date: Date): Session[] {
        return this.sessions.filter(session => session.date.getTime() < date.getTime());
    }

    findSessionsAfter(date: Date): Session[] {
        return this.sessions.filter(session => session.date.getTime() > date.getTime());
    }
}
