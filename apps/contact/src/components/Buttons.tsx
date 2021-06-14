import React from 'react';
import styled from 'styled-components';

export const ButtonMain = styled.button`
    border-radius: 15px;
    border: 2px solid var(--secondary-light);
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