import styled from 'styled-components';

export const ItemForSaleStyled = styled.div
`
padding: 40px 0;
.items{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 13px;
    .item{
        width: 24%;
        text-align: center;
        h6{
            margin: 0;
            font-weight: normal;
            margin-top: 10px
        }
        .product-price{
            display: flex;
            gap: 10px;
            align-items: center;
            justify-content: center;
            margin: 7px 0 10px;
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
    }
}

`