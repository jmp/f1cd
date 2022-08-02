import {Round} from '../domain/round';
import sessionData from './sessions.json';

export type SessionData = {
    title: string;
    sessions: {
        title: string;
        date: string;
    }[];
}[];

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

export const rounds = mapSessionDataToRounds(sessionData);
