import styled from 'styled-components';

export const OfferBannerStyled = styled.div
`
margin: 40px 0;
position: relative;
.container{
    img{
        max-width: 100%;
    }
    button{
        position: absolute;
        bottom: 90px;
        right: 320px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        padding: 5px 15px;
        background: transparent;
        color: #FFF;
        border: 1px solid #D70101;
        border-radius: 5px;
        @media (max-width: 992px){
           display: none;
        }
    }
}
`