import {Round} from '../models/round';
import sessionData from './sessions.json';

export type SessionData = {
    title: string;
    startDate: string;
    sessions: {
        title: string;
        date: string;
    }[];
}[];

export function mapSessionDataToRounds(sessionData: SessionData): Round[] {
    return sessionData.map(({startDate, sessions, ...rest}) => ({
        ...rest,
        startDate: new Date(startDate),
        sessions: sessions.map(({date, ...rest}) => ({
            ...rest,
            date: new Date(date)
        }))
    }));
}

export const rounds = mapSessionDataToRounds(sessionData);
