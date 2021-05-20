import React from 'react';

interface HeaderProps {
    identifier: string;
    styleClass: string;
}

const Header: React.FC<HeaderProps> = ({ children, styleClass, identifier }) => {
    return (
        <p className={`sheyi-header ${styleClass} d-flex align-items-center`} id={identifier}>
            {children} 
        </p>
    )
}

export default Header;