import { ReactNode } from 'react';

type FormContainerProps = {
    children: ReactNode;
};
const FormContainer = ({ children }: FormContainerProps) => {
    return (
        <div className="flex items-center min-h-screen font-sans auto-rows-max">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-12 gap-4">{children}</div>
            </div>
        </div>
    );
};

export { FormContainer };
