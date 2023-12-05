import styled from 'styled-components';

export const BottomHeaderStyled = styled.div
`
background: #000;
color: #FFF;
display: flex;
gap: 5px;
align-items: center;
padding: 0 10px;
button{
    display: flex;
    align-items: center;
    gap: 2px;
    svg{
        font-size: 18px;
    }
}
nav{
    display: flex;
    align-items: center;
    gap: 8px;
    flex-grow: 1;
    justify-content: space-between;
    ul{
        display: flex;
        align-items: center;
        gap: 10px;
        list-style: none;
        padding-inline-start: 0;
        flex-grow: 1;
        justify-content: space-between;
        li{
            font-size: 12px;
            cursor: pointer;
        }
    }
    @media(min-width: 992px){
        max-width: 700px;
    }
}
@media(min-width: 992px){
    justify-content: center;
}
`