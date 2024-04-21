import { useState } from 'react'
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Dashboard from './dashboard/dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (           
  <div className="clerk">
    <SignedOut>
      <SignInButton className="btn">Sign In</SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
 )
}

export default App