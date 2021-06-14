import React from 'react'
import { ButtonMain } from './Buttons'
import styled from 'styled-components'
import SearchBox from './SearchBox'

const HeaderWrapper = styled.div`
    display: flex;

    .add-contact-btn-container {
        flex-grow: 1;
        display: flex;
        justify-content: flex-end;
    }
`


function Header() {
    return (
        <HeaderWrapper>
            <SearchBox />
            <div className="add-contact-btn-container">
                <ButtonMain>Add Contact</ButtonMain>
            </div>
        </HeaderWrapper>
    )
}

export default Header
