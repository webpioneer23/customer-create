import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const Wrapper = styled.div`
  height: 4rem;
  background: ${oc.teal[6]};
  border-bottom: 1px solid ${oc.teal[8]};

  color: white;
  font-weight: 500;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = () => <Wrapper>Contact</Wrapper>;

export default Header;
