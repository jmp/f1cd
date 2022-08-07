import {Session} from './session';

export class Round {
    constructor(
        readonly title: string,
        readonly startDate: Date,
        readonly sessions: Session[]
    ) {}
}
