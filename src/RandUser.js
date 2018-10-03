import React from 'react';

function RandUser(props) {
    return (
        <div id={'rand'}>
            <img src={props.user.picture.large} alt={''}/>
            <p>{props.user.name.first[0].toUpperCase()}{props.user.name.first.slice(1)}{' '}
                {props.user.name.last[0].toUpperCase()}{props.user.name.last.slice(1)}</p>
            <p>{props.user.email}</p>
            <p>{props.user.phone}</p>
            <p>{props.user.address}</p>
        </div>
    );
}

export default RandUser;