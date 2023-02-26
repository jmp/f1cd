import {Session} from './session';

export class SessionBuilder {
    private _title: string = '';
    private _date: Date = new Date();

    title(title: string): SessionBuilder {
        this._title = title;
        return this;
    }

    date(date: number | string | Date): SessionBuilder {
        this._date = new Date(date);
        return this;
    }

    build(): Session {
        return new Session(this._title, this._date);
    }
}

export function aSession(): SessionBuilder {
    return new SessionBuilder()
        .title('Practice 1')
        .date('2022-01-01T00:00Z');
}
