import React from 'react';
import {Session} from '../models/session';
import './SessionInfo.css';

type CountdownProps = {
    session: Session;
    date: Date;
};

export function SessionInfo({session, date}: CountdownProps) {
    const remainingTime = session.getRemainingTime(date);
    return (
        <div data-testid='session-info' className='session'>
            <div data-testid='session-title' className='session-title'>{session.title}</div>
            <div data-testid='remaining-time' className='remaining-time'>{remainingTime}</div>
        </div>
    );
}
