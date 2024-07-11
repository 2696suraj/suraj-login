import Styled from "styled-components"

export   const ImageDiv = Styled.div`
background-image: url("${props => (props.imageurl)}");
    height: 400px;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`


