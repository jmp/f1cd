import {Session} from '../models/session';
import React, {ReactElement} from 'react';
import {Round} from '../models/round';

type SessionProps = {
    round: Round;
    date: Date;
}

export function SessionList({ round, date }: SessionProps) {
    const nextSession = round.findNextSession(date);
    const sessionsBefore = round.sessions.filter(({date}) => date.getTime() < nextSession.date.getTime());
    const sessionsAfter = round.sessions.filter(({date}) => date.getTime() >= nextSession.date.getTime());
    return <>
        <h3>Sessions</h3>
        <table data-testid='sessions'>
            <tbody>
            { formatSessions(sessionsBefore, 'before') }
            { formatSessions(sessionsAfter, 'after') }
            </tbody>
        </table>
        <p id='tzinfo'>All times are {getTimezone()}</p>
    </>;
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
    return `UTC${new Date().toString().match(/([-+][0-9]+)\s/)![1]}`;
}
