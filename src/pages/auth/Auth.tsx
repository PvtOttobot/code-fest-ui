import { useForm } from 'react-hook-form';
import { useToggle } from 'usehooks-ts';
import { Button, FormContainer, InputField, LinkButton } from './components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type LogInFormData = {
    email: string;
    password: string;
};

type LogInFormProps = {
    toggleIsSignUp: () => void;
};

const LogInForm = ({ toggleIsSignUp }: LogInFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LogInFormData>();

    const navigate = useNavigate();

    const onSubmit = async (data: LogInFormData) => {
        try {
            const response = await axios.post('https://yourapi.com/login', {
                email: data.email,
                password: data.password,
            });

            if (response.data.success) {
                navigate('/home');
            } else {
                // Handle login error, e.g. show a message to the user
            }
        } catch (error) {
            // Handle request error, e.g. show a message to the user
        }
    };

    return (
        <FormContainer>
            <div className="col-span-8 col-start-3 justify-center w-full">
                <img
                    src="/src/assets/logo_name.png"
                    alt="logo"
                    className="pb-8"
                />
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="col-span-8 col-start-3 flex flex-col items-center justify-center"
            >
                <InputField
                    label="Email"
                    id="email"
                    registerOptions={register('email', {
                        required: true,
                    })}
                    error={errors.email}
                    type="email"
                />

                <InputField
                    label="Password"
                    id="password"
                    registerOptions={register('password', {
                        required: true,
                    })}
                    error={errors.password}
                    type="password"
                />

                <Button label="Log In" />

                <LinkButton label="Sign Up" toggleIsSignUp={toggleIsSignUp} />
            </form>
        </FormContainer>
    );
};

type SignUpFormData = {
    emailSignUp: string;
    passwordSignUp: string;
    confirmPassword: string;
};

type SignUpFormProps = {
    toggleIsSignUp: () => void;
};

const SignUpForm = ({ toggleIsSignUp }: SignUpFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>();

    const navigate = useNavigate();

    const onSubmit = async (data: SignUpFormData) => {
        try {
            const response = await axios.post('https://yourapi.com/login', {
                email: data.emailSignUp,
                password: data.passwordSignUp,
                confirmPassword: data.confirmPassword,
            });

            if (response.data.success) {
                navigate('/home');
            } else {
                // Handle login error, e.g. show a message to the user
            }
        } catch (error) {
            // Handle request error, e.g. show a message to the user
        }
    };

    return (
        <FormContainer>
            <div className="col-span-8 col-start-3 justify-center w-full">
                <img
                    src="/src/assets/logo_name.png"
                    alt="logo"
                    className="pb-8"
                />
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="col-span-8 col-start-3 flex flex-col items-center justify-center"
            >
                <InputField
                    label="Email"
                    id="emailSignUp"
                    registerOptions={register('emailSignUp', {
                        required: true,
                    })}
                    error={errors.emailSignUp}
                    type="email"
                />

                <InputField
                    label="Password"
                    id="password"
                    registerOptions={register('passwordSignUp', {
                        required: true,
                    })}
                    error={errors.passwordSignUp}
                    type="password"
                />

                <InputField
                    label="Confirm password"
                    id="confirmPassword"
                    registerOptions={register('confirmPassword', {
                        required: true,
                    })}
                    error={errors.confirmPassword}
                    type="confirmPassword"
                />

                <Button label="Sign Up" />

                <LinkButton label="Log In" toggleIsSignUp={toggleIsSignUp} />
            </form>
        </FormContainer>
    );
};

const Auth = () => {
    const [isSignUp, toggleIsSignUp] = useToggle(false);

    return !isSignUp ? (
        <LogInForm toggleIsSignUp={toggleIsSignUp} />
    ) : (
        <SignUpForm toggleIsSignUp={toggleIsSignUp} />
    );
};

export { Auth };
