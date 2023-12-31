type ButtonProps = {
    label: string;
};

const Button = ({ label }: ButtonProps) => {
    return (
        <button
            type="submit"
            className="border-secondary border-4 rounded-sm bg-secondary text-white py-1 px-8 my-2 w-8/12 block self-center"
        >
            {label}
        </button>
    );
};

export { Button };
