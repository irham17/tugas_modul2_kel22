import styled, {css} from 'styled-components';

export default styled.button`
    font-family:Arial, Helvetica, sans-serif;
    font size:1.3rem;
    border:none;
    border radius:5px;
    padding:7px 10px;
    background:green;
    margin:5px;
    ${(props) => props.background && css`
    background:${(props) =>props.background}; `}
    color:white;
    &:hover{
        text decoration:underline;
    }
`;
