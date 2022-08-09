import {Session} from '../models/session';
import React, {ReactElement} from 'react';
import {Round} from '../models/round';
import './SessionList.css';

type SessionProps = {
    round: Round;
    date: Date;
    session: Session;
    setSession: (session: Session) => void;
}

export function SessionList({ round, date, session, setSession }: SessionProps) {
    return <div data-testid='session-list'>
        <h3 data-testid='session-list-heading'>Sessions</h3>
        <table>
            <tbody>
            { formatSessions(session, round, date, setSession) }
            </tbody>
        </table>
        <p data-testid='session-list-timezone' className='small'>All times are {getTimezone()}</p>
    </div>;
}

function formatSessions(selectedSession: Session, round: Round, date: Date, onClick: (session: Session) => void): ReactElement[] {
    const pastSessions = round.findSessionsBefore(date);
    return round.sessions.map(session => {
        const classes = [];
        if (pastSessions.includes(session)) {
            classes.push('before');
        }
        if (session === selectedSession) {
            classes.push('selected');
        }
        return (
            <tr
                key={session.date.getTime()}
                className={classes.join(' ')}
                onClick={() => onClick(session)}
            >
                <td>{session.title}</td>
                <td>{formatDate(session.date)}</td>
                <td>{formatTime(session.date)}</td>
            </tr>
        );
    });
}

function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
}

function getTimezone(): string {
    const offset = new Date()
        .toString()
        .replace(/.+([-+]\d\d)(\d\d).+/, '$1:$2')
        .replace('-', '−');
    return `UTC${offset}`;
}
