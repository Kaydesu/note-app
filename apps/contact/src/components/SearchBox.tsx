import React from 'react';
import styled from 'styled-components'
import { ButtonMain } from './Buttons';


const SearchWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    input {
        width: 400px;
        margin-right: 10px;
    }
`

function SearchBox() {
    return <SearchWrapper>
        <input type="text" />
        <ButtonMain>Search</ButtonMain>
    </SearchWrapper>
}

export default SearchBox;