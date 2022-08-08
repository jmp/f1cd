import {Session} from '../models/session';
import React, {ReactElement} from 'react';
import {Round} from '../models/round';
import './SessionList.css';

type SessionProps = {
    round: Round;
    date: Date;
    selectedSession: Session;
    onSessionSelect: (session: Session) => void;
}

export function SessionList({ round, date, selectedSession, onSessionSelect }: SessionProps) {
    const nextSession = round.findNextSession(date);
    const sessionsBefore = round.findSessionsBefore(nextSession.date);
    const sessionsAfter = round.findSessionsAfter(nextSession.date);
    return <div data-testid='session-list'>
        <h3 data-testid='session-list-heading'>Sessions</h3>
        <table>
            <tbody>
            { formatSessions(selectedSession, sessionsBefore, 'before', onSessionSelect) }
            { formatSessions(selectedSession, [nextSession], 'next', onSessionSelect) }
            { formatSessions(selectedSession, sessionsAfter, 'after', onSessionSelect) }
            </tbody>
        </table>
        <p data-testid='session-list-tzinfo' className='small'>All times are {getTimezone()}</p>
    </div>;
}

function formatSessions(selectedSession: Session, sessions: Session[], className: string, onClick: (session: Session) => void): ReactElement[] {
    return sessions.map(session => (
        <tr
            key={session.date.getTime()}
            className={`${className} ${selectedSession === session ? 'selected' : ''}`}
            onClick={() => onClick(session)}
        >
            <td>{session.title}</td>
            <td>{formatDate(session.date)}</td>
            <td>{formatTime(session.date)}</td>
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
