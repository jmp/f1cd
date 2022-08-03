import {Session} from './session';

export type Round = {
    title: string;
    startDate: Date;
    sessions: Session[];
};
