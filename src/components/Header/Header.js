import React from 'react'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

import logo from '../../assets/logoSPC.png'

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 8.5% 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  color: #2968ff;
  background-color: #f6f7fa;

  @media screen and (max-width: 768px) {
    grid-template-columns: 20% 1fr;
  }

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr 1fr;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 0 15px;
`

const Logo = styled.img.attrs({
  src: logo,
  alt: 'SPC Dados'
})`
  cursor: pointer;
`

const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Header = () => {
  const history = useHistory()

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Logo onClick={() => history.replace('/')} />
      </LogoWrapper>
      <HeaderContentWrapper></HeaderContentWrapper>
    </HeaderWrapper>
  )
}

export default Header
