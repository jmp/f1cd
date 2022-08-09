import {Session} from './session';
import {Round} from './round';
import {aSession, SessionBuilder} from './session.builder';

export class RoundBuilder {
    private _title: string = '';
    private _startDate: Date = new Date();
    private _sessions: Session[] = [];
    private _defaultSessions: Session[] = [];

    title(title: string): RoundBuilder {
        this._title = title;
        return this;
    }

    startDate(startDate: Date): RoundBuilder {
        this._startDate = startDate;
        return this;
    }

    session(session: SessionBuilder): RoundBuilder {
        this._sessions.push(session.build());
        return this;
    }

    defaultSession(session: SessionBuilder): RoundBuilder {
        this._defaultSessions.push(session.build());
        return this;
    }

    build(): Round {
        const sessions = this._sessions.length === 0 ? this._defaultSessions : this._sessions;
        return new Round(this._title, this._startDate, sessions);
    }
}

export function aRound(): RoundBuilder {
    return new RoundBuilder()
        .title('Hungary')
        .startDate(new Date('2022-07-29T12:00Z'))
        .defaultSession(aSession());
}
