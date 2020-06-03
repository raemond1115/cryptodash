import React from 'react';
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider';
import CoinTile from './CoinTile';
 //grid-template-columns: repeat(5, 1fr);
export const CoinGridStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`;

const getLowerSectionCoins = (coinList, filteredCoins) => {
    console.log('filterCoins',filteredCoins);
    return filteredCoins ? Object.keys(filteredCoins) : Object.keys(coinList).slice(0, 100);
}

const getCoinsToDisplay = (coinList, topSection, favorites, filteredCoins) => {
    return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
}

export default ({topSection}) => {
    return <AppContext.Consumer>
        { ({coinList, favorites, filteredCoins}) => (
            <CoinGridStyled>
                {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey => <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey}/>)}
            </CoinGridStyled>
        )}
    </AppContext.Consumer>
}