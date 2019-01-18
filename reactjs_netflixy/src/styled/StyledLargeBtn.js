import styled from "styled-components";
import { devices } from "../utils/styledUtils";

const StyledLargeBtn = styled.button`

border : 0;
border-radius : 5px;
color : #fff;
width : 100%;
height : 50px;
display : block;
margin : 0 auto;
background : #eb6259;
${devices.md`
width : 60%;
`}

`;

export default StyledLargeBtn;