import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Logo />
        <Side />
        <DesktopView>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Side />
        </DesktopView>
        <LaptopDownView>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </LaptopDownView>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media (${QUERIES.tabletAndDown}) {
    border-top: 4px solid ${COLORS.gray[900]};
  }

  @media (${QUERIES.phone}) {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const DesktopView = styled.div`
  display: flex;
  flex: 1 auto;

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const LaptopDownView = styled.div`
  display: none;

  @media (${QUERIES.tabletAndDown}) {
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
    gap: 32px;
  }

  @media (${QUERIES.phone}) {
    gap: 24px;
  }
`;

export default Header;
