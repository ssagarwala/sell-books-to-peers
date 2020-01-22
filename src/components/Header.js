import React from 'react';

const Header = (props) => {
    return (
        <div>
        {props.title}
        {props.subTitle}
        </div>
    )
}

export default Header;