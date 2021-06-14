import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components';
import { ButtonDanger, ButtonSuccess } from './Buttons';
import EditIcon from '../assets/edit.svg';
import TrashIcon from '../assets/trash.svg';
import { RootState } from '../store';
import { deleteActions, fetchActions } from '../actions';

const CardList = styled.div`
    margin-top: 50px;
    height: calc(100% - 65px);
    overflow: auto;
`
const CardItem = styled.article`
    padding: 10px 20px;
    padding-bottom: 20px;
    margin-bottom:  35px;
    border-radius: 15px;
    width: 70%;
    margin: 0 auto 35px auto;

    ${({ theme }) => {
        return css`
            color: ${theme.textColor};
            background: ${theme.cardBodyColor};
            box-shadow: ${theme.cardBodyShadow};
        `
    }}


    .card-item__header {
        display: flex;
        font-size: 26px;
        justify-content: space-between;
        margin-bottom: 10px;
        .card-item__header-actions {
            button {
                display: inline-flex;
                margin:0 5px;
            }
    }
    }

    
`


function InfoList() {

    const contactList = useSelector((state: RootState) => state.contacts);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(fetchActions());
        }, 700)
    }, []);

    return (
        <CardList>
            {
                contactList.map(cardItem => {
                    return <CardItem key={cardItem.id}>
                        <div className="card-item__header">
                            <div className="card-item__header-title">
                                {cardItem.name}
                            </div>
                            <div className="card-item__header-actions">
                                <ButtonSuccess> Edit <img src={EditIcon} alt="" /> </ButtonSuccess>
                                <ButtonDanger onClick={() => dispatch(deleteActions(cardItem.id))}> Delete <img src={TrashIcon} alt="" /></ButtonDanger>
                            </div>
                        </div>
                        <div className="card-item__body">
                            <div className="card-item-info">Phone: {cardItem.phone}</div>
                            <div className="card-item-info">Email: {cardItem.mail}</div>
                            <div className="card-item-info">Address: {cardItem.address}</div>
                        </div>
                    </CardItem>
                })
            }
        </CardList>
    )
}

export default InfoList
