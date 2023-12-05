import styled from 'styled-components';

export const TopHeaderStyled = styled.div
`
background: #000;
padding: 30px 0 15px;
.container{
    & > div{
        display: flex;
        justify-content: end;
            .search{
                display:flex;
                width:50%;
                input{
                    background: #FFF;
                    border: 0;
                    border-radius: 5px;
                    padding: 5px;
                    width: 100%;
                    color: #000;
                    &:focus-visible{
                        outline: none;
                    }
                }
            }
    }
   
}


`

export const CartControlStyled = styled.div`
display: flex;
margin-inline-start: 50px;
align-items: center;
gap: 15px;
    img{
        width: 20px;
        height: 15px;
    }
    svg{
        color: #FFF;
        font-size: 12px;
        cursor: pointer;
    }
`