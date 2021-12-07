import React from "react";
import { fontWeight, styled } from '@mui/system';

const StyledHeader = styled('div')({
  padding: 8,
  marginLeft: '10px',
  marginTop: '20px'
});
const StyledHOne = styled('h1')({
    fontSize: '25px',
    marginLeft: '50px',
    textTransform: 'capitalize'
  });
  const StyledHTwo = styled('h2')({
    fontSize: '20px',
    marginLeft: '50px',
    textTransform: 'capitalize',
  });
export const Header = (props) => {
    return(
        <StyledHeader>
            <StyledHOne>{props.header}</StyledHOne>
            <StyledHTwo>{props.subheader}</StyledHTwo>
        </StyledHeader>
    )
}