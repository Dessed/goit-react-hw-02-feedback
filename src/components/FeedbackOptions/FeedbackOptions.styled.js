import styled from 'styled-components';

export const Button = styled.button`
    font-size: 35px;
    font-weight: 500;
    width: 150px;
    padding: 8px;
    margin-left: 20px;
    border-color: rgb(209, 209, 209);
    border-style: solid;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    cursor: pointer;

    :hover {
        background-color: aqua;
    }

    :nth-child(1) {
        margin: 0;
    }
`;