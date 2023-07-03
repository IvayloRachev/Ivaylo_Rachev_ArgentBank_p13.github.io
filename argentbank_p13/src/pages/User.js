import React from 'react';
import UserName from '../components/UserName';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

export default function User() {
    let navigate = useNavigate();
    const isLogged = useSelector((state) => state.loggedReducer);

    if (!isLogged) {
        return navigate("/login")
    }

    return (
        <main className='main bg-dark'>
            <UserName />
            <h2 className='sr-only'>Accounts</h2>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className='account-title'>Argent Bank Checking (x8349)</h3>
                    <p className='account-amount'>$2,082.79</p>
                    <p className='account-amount-description'>Avialable Balance</p>
                </div>
                <div className='account-content-wrapper cta'>
                    <button className='transaction-button'>View transactions</button>
                </div>
            </section>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className='account-title'>Argent Bank Saving (x6712)</h3>
                    <p className='account-amount'>$10,928.42</p>
                    <p className='account-amount-description'>Avialable Balance</p>
                </div>
                <div className='account-content-wrapper cta'>
                    <button className='transaction-button'>View transactions</button>
                </div>
            </section>
            <section className='account'>
                <div className='account-content-wrapper'>
                    <h3 className='account-title'>Argent Bank Credit Card (x8349)</h3>
                    <p className='account-amount'>$184.30</p>
                    <p className='account-amount-description'>Current Balance</p>
                </div>
                <div className='account-content-wrapper cta'>
                    <button className='transaction-button'>View transactions</button>
                </div>
            </section>
        </main>
    )
}