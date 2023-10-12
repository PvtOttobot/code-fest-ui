import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type InputFieldProps = {
    label: string;
    id: string;
    registerOptions: UseFormRegisterReturn<any>;
    error?: FieldError;
    errorMessage?: string;
    type?: string;
};

const InputField = ({
    label,
    id,
    registerOptions,
    error,
    errorMessage = 'This field is required',
    type = 'text',
}: InputFieldProps) => {
    return (
        <div className="pb-4">
            <label htmlFor={id} className="block">
                {label}
            </label>
            <input
                id={id}
                {...registerOptions}
                type={type}
                className="border rounded py-1 px-2 w-full"
            />
            {error && (
                <span className="text-red-600 text-sm">{errorMessage}</span>
            )}
        </div>
    );
};

export { InputField };
