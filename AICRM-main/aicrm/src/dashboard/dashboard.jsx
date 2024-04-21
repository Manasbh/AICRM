import { useState } from 'react'
import React from 'react';
import "./dashboard.css";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Das from './main/das.jsx';

function Dashboard() {
    const [count, setCount] = useState(0)

    return (
        <div className="app">
            <header className="header">
                <div className="header-left">
                    <h1 className="logo">AICRM</h1>
                    <nav className="sidebar">
                        <ul>
                            <li><a href="#">Dashboard</a></li>
                            <li><a href="#">Tasks</a></li>
                            <li><a href="#">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="clerk">
                        <SignedOut>
                            <SignInButton className="btn">Sign In</SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                            <Das />
                        </SignedIn>
                    </div>
                </div>
            </header>
            <section id="dashboard" style={{
  width: '100%',
  height: '100%',
  background: `
    radial-gradient(#000 5%, #0000 6%),
    radial-gradient(#000 5%, #0000 6%)
  `,
  backgroundPosition: '0 0, calc(3rem / 2) calc(3rem / 2)',
  backgroundSize: '3rem 3rem'
}}>
                <main className="main" >
                    <div className="content">
                    <h1 className="mainTect text-4xl pb-15" style={{ paddingBottom: '20px' }}>
  Welcome to AICRM
</h1>

                        <p>
                            Effortlessly enhance customer relationships with our streamlined management solutions. Simplify communication, track interactions, and nurture connections seamlessly, empowering your business to thrive.
                        </p>
                    </div>
                </main>
            </section>
        </div>
    );
}

export default Dashboard