import {Round} from '../models/round';
import {Session} from '../models/session';
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
    return sessionData.map(({title, startDate, sessions}) => new Round(
        title,
        new Date(startDate),
        sessions.map(({title, date}) => new Session(title, new Date(date)))
    ));
}

export const rounds = mapSessionDataToRounds(sessionData);
