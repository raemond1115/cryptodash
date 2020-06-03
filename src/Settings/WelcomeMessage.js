import React from 'react';
import {AppContext} from '../App/AppProvider';

export default () => {
    return (
    <AppContext.Consumer>
        { ({firstVisit}) => {
                console.log(firstVisit);
                return firstVisit ? <div>Welcome to CryptoDash, please select your favorite coins to begin.{' '}</div> : null
            } 
        }
    </AppContext.Consumer>
    );
};