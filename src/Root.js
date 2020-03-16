import React from 'react'
import { Switch, Route, Redirect, useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { FiArrowLeft } from 'react-icons/fi'

import Profile from './pages/Profile'
import PF from './pages/PF'

import Header from './components/Header'

import { ReactComponent as Logo } from './assets/logoms.svg'

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 70px 70px 1fr;
  grid-template-areas: 'header' 'title' 'content';
  grid-gap: 5px;
  height: 100vh;
  overflow: hidden;
`

const HeaderWrapper = styled.div`
  grid-area: header;
  width: 100%;
  height: 100%;

  display: block;
`

const TitleWrapper = styled.div`
  background-color: #2968ff;
  color: #fff;
  grid-area: title;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 5% 1fr;

  box-shadow: 0 5px 5px #d3d3d3;

  > * {
    font-size: 35px;
    font-weight: 300;
  }
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const LogoMS = styled(Logo)`
  margin: 0 10px;
`

const BackLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`

const ContentWrapper = styled.div`
  grid-area: content;
  height: 100%;
  width: 100%;

  display: flex;
`

const BackLink = styled(FiArrowLeft)`
  cursor: pointer;
  &:hover {
    color: #ffee35;
  }
`

const Root = () => {
  const history = useHistory()
  const location = useLocation()
  console.log(history)
  return (
    <AppGrid>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <TitleWrapper>
        <BackLinkWrapper>
          {location.pathname !== '/profile' && <BackLink onClick={() => history.goBack()} />}
        </BackLinkWrapper>
        <LogoWrapper>
          <LogoMS />
          <span>
            Simulador <b>SPC Dados</b>
          </span>
        </LogoWrapper>
      </TitleWrapper>
      <ContentWrapper>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/pf" component={PF} />
          <Route path="/pj" component={Profile} />
          <Redirect from="*" to="/profile" />
        </Switch>
      </ContentWrapper>
    </AppGrid>
  )
}

export default Root
