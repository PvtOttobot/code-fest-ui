import { useToggle } from 'usehooks-ts';
import { LogInForm, SignUpForm } from './components';
import * as MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mockAdapter = new MockAdapter(axios, { delayResponse: 100 });

const Auth = () => {
    const [isSignUp, toggleIsSignUp] = useToggle(false);

    return !isSignUp ? (
        <LogInForm toggleIsSignUp={toggleIsSignUp} mockAdapter={mockAdapter} />
    ) : (
        <SignUpForm toggleIsSignUp={toggleIsSignUp} mockAdapter={mockAdapter} />
    );
};

export { Auth };
