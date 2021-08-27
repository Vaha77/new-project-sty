import React, { Component } from "react";
import {
  Container,
  NavbarWrapper,
  Navimg,
  NavItem,
  NavLogo,
  Title,
} from "./style";
import navlogo from "../img/logonav.svg";

export default class index extends Component {
  render() {
    return (
      <Container>
        <Title>
          SHIPPING AND RETURNS ARE ALWAYS FREE FROM OUR PLACE TO YOURS 🙂
        </Title>
        <NavbarWrapper>
          <NavItem>shop</NavItem>
          <NavItem>Always pan</NavItem>
          <Navimg src={navlogo} />

          <NavItem>mission</NavItem>
          <NavItem>
            faqs
            <NavLogo>0</NavLogo>
          </NavItem>
        </NavbarWrapper>
      </Container>
    );
  }
}
