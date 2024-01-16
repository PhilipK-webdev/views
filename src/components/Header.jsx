import { Grid, useMediaQuery } from "@mui/material";
import styled from "styled-components";
function Header() {
  const mobile = useMediaQuery("(max-width:1024px)");
  return (
    <HeaderStyle mobile={mobile}>
      <Grid item className="header">
        <h1> רשימת קניות</h1>
      </Grid>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 41px;
  background-color: #e9ecef;
  .header {
    flex-direction: row;
    display: flex;
    justify-content: center;
    padding: 25px;
  }
  h1 {
    font-size: ${(props) => (props.mobile ? "35px" : "50px")};
    font-weight: 400;
  }
`;
export default Header;
