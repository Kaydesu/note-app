import React from 'react';
import styled, {css} from 'styled-components';

export const ButtonMain = styled.button`
    border-radius: 15px;
    ${({theme}) => {
        console.log(theme)
        return css`
            border: 2px solid ${theme.borderColor};
            color: ${theme.textColor};
        `
    }}
    display: flex;
    img {
        width: 14px;
        margin-left: 10px;
    }
`

export const ButtonDanger = styled(ButtonMain)`
    border: none;
    background-color: #EB3333;
    color: #fff;
    &:hover {
        opacity: 0.8;
    }
`

export const ButtonSuccess = styled(ButtonMain)`
    border: none;
    background-color: #33EB50;
    color: #fff;
    &:hover {
        opacity: 0.8;
    }
`