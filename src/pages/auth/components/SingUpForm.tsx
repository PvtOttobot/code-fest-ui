import * as MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from './FormContainer.tsx';
import { InputField } from './InputField.tsx';
import { Button } from './Button.tsx';
import { LinkButton } from './LinkButton.tsx';

type SignUpFormData = {
    emailSignUp: string;
    passwordSignUp: string;
    confirmPassword: string;
    usernameSignUp: string;
};

type SignUpFormProps = {
    toggleIsSignUp: () => void;
    mockAdapter: MockAdapter;
};

const SignUpForm = ({ toggleIsSignUp, mockAdapter }: SignUpFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpFormData>();

    const navigate = useNavigate();

    mockAdapter.onPost('https://yourapi.com/signup').reply(200, {
        success: true,
        token: 'sample_token',
    });

    const onSubmit = async (data: SignUpFormData) => {
        try {
            const response = await axios.post('https://yourapi.com/signup', {
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
                    label="Username"
                    id="usernameSignUp"
                    registerOptions={register('usernameSignUp', {
                        required: true,
                    })}
                    error={errors.usernameSignUp}
                    type="text"
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
                    type="password"
                />

                <Button label="Sign Up" />

                <LinkButton label="Log In" toggleIsSignUp={toggleIsSignUp} />
            </form>
        </FormContainer>
    );
};

export { SignUpForm };
