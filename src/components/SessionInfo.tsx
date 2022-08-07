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
        <div data-testid='session-info'>
            <h3 data-testid='session-info-heading'>Next Session</h3>
            <div className='session'>
                <div data-testid='session-title' className='session-title'>{session.title}</div>
                <div data-testid='countdown' className='countdown'>{remainingTime}</div>
            </div>
        </div>
    );
}
