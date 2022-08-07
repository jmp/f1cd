import {Session} from '../models/session';
import React, {ReactElement} from 'react';
import {Round} from '../models/round';
import './SessionList.css';

type SessionProps = {
    round: Round;
    date: Date;
}

export function SessionList({ round, date }: SessionProps) {
    const nextSession = round.findNextSession(date);
    const sessionsBefore = round.findSessionsBefore(nextSession.date);
    const sessionsAfter = round.findSessionsAfter(nextSession.date);
    return <div data-testid='session-list'>
        <h3 data-testid='session-list-heading'>Sessions</h3>
        <table>
            <tbody>
            { formatSessions(sessionsBefore, 'before') }
            { formatSessions([nextSession], 'next') }
            { formatSessions(sessionsAfter, 'after') }
            </tbody>
        </table>
        <p data-testid='session-list-tzinfo' className='small'>All times are {getTimezone()}</p>
    </div>;
}

function formatSessions(sessions: Session[], className: string): ReactElement[] {
    return sessions.map(({title, date}) => (
        <tr key={date.getTime()} className={className}>
            <td>{title}</td>
            <td>{formatDate(date)}</td>
            <td>{formatTime(date)}</td>
        </tr>
    ))
}

function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
}

function getTimezone(): string {
    return `UTC${new Date().toString().match(/([-+]\d+)\s/)![1]}`;
}
