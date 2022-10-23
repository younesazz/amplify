import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator, Alert } from '@aws-amplify/ui-react';

Amplify.configure(awsmobile)

function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Hey there {user.username}</h2>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
