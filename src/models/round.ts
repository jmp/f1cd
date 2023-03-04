import {Session} from './session';

export class Round {
    readonly startDate: Date;
    readonly endDate: Date;

    constructor(
        readonly title: string,
        readonly sessions: Session[]
    ) {
        let startDate = this.convertToUTC(sessions[0].date);
        let endDate = startDate;
        let previousDate = startDate;
        sessions.forEach(({ date }) => {
            if (date.getTime() <= startDate.getTime()) {
                startDate = this.convertToUTC(date);
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
            if (date.getTime() < previousDate.getTime()) {
                throw new Error('sessions should be ordered by date');
            }
            previousDate = date;
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

    private convertToUTC(date: Date): Date {
        return new Date(
            Date.UTC(
                date.getUTCFullYear(),
                date.getUTCMonth(),
                date.getUTCDate()
            )
        )
    }
}
