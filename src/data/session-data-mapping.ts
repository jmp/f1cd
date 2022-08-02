import {SessionData} from './session-data';
import {Round} from '../domain/round';

export function mapSessionDataToRounds(sessionData: SessionData): Round[] {
    return sessionData.map(({title, sessions, ...rest}) => ({
        ...rest,
        title,
        sessions: sessions.map(({date, ...rest}) => ({
            ...rest,
            date: new Date(date)
        }))
    }));
}
