import {Round} from '../models/round';
import {Session} from '../models/session';
import sessionData from './sessions.json';
import {Season} from '../models/season';

export type SessionData = {
    title: string;
    startDate: string;
    sessions: {
        title: string;
        date: string;
    }[];
}[];

export function mapSessionDataToSeason(sessionData: SessionData): Season {
    return new Season(
        sessionData.map(({title, startDate, sessions}) => new Round(
            title,
            new Date(startDate),
            sessions.map(({title, date}) => new Session(title, new Date(date)))
        ))
    );
}

export const season = mapSessionDataToSeason(sessionData);
