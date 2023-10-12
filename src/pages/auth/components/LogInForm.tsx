import * as MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormContainer } from './FormContainer.tsx';
import { InputField } from './InputField.tsx';
import { Button } from './Button.tsx';
import { LinkButton } from './LinkButton.tsx';

type LogInFormData = {
    email: string;
    password: string;
};

type LogInFormProps = {
    toggleIsSignUp: () => void;
    mockAdapter: MockAdapter;
};

const LogInForm = ({ toggleIsSignUp, mockAdapter }: LogInFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LogInFormData>();

    const navigate = useNavigate();

    mockAdapter.onPost('https://yourapi.com/login').reply(200, {
        success: true,
        token: 'sample_token',
    });

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

export { LogInForm };
