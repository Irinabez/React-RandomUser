import React from 'react';


function Loader(props) {


    return (

            <button onClick={() => props.loadNewUser()}
                    className={'button'}>LOAD USER</button>
    );
}

export default Loader;
