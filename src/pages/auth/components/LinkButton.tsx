type LinkButtonProps = {
    label: string;
    toggleIsSignUp: () => void;
};

const LinkButton = ({ label, toggleIsSignUp }: LinkButtonProps) => {
    return (
        <button
            style={{
                background: 'none',
                border: 'none',
                padding: 0,
                font: 'inherit',
                cursor: 'pointer',
                textDecoration: 'underline',
            }}
            type="button"
            onClick={() => {
                toggleIsSignUp();
            }}
            className="block"
        >
            {label}
        </button>
    );
};

export { LinkButton };
