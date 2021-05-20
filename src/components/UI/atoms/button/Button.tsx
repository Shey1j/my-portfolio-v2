import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
	return (
		<button
			className="btn btn-block sheyi-button"
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;