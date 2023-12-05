import styled from 'styled-components';

export const FirstBannerStyled = styled.div
`background: #000;
padding: 36px 0;
.container{
    position: relative;
    img{
        max-width: 100%;
    }
    button{
        position: absolute;
        bottom: 150px;
        right: 188px;
        text-transform: capitalize;
        font-weight: bold;
        font-size: 22px;
        padding: 3px 14px;
        @media (max-width: 992px){
            right: 50%;
            transform: translateX(50%);
            bottom: 20px;
        }
    }
}

`