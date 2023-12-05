import styled from 'styled-components';

export const BestSellerStyled = styled.div
`position: relative;
.container{
    &>div{
        display: flex;
        position: relative;
        top: -115px;
        background: #FFF;
        border-radius: 50px;
        padding: 50px 35px;
        gap: 15px;
        .side {
            background: #F5F5F5;
            border-radius: 15px;
            padding: 25px 20px;
            h4{
                color: #D70202;
                margin:0;
            }
            p{
                font-size: 14px;
            }
            img{
                max-width: 100%;
            }
            .product-price{
                display: flex;
                gap: 10px;
                align-items: center;
                justify-content: center;
                margin-top: 10px;
                .price{
                    color: #D70202;
                    font-size: 12px;
                    font-weight: bold;
                }
                .discount{
                    color: #D70202;
                    font-size: 12px;
                    background: #D7020245;
                    font-weight: bold;
                }
            }
            &.left{
                width: 47%;
            }
        }
    }
}
`