import React, { memo } from 'react'

import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Panel from '../../components/Panel'

import { formatCurrency } from '../../utils'
import { format } from '../../constants/attributes'

const ComboWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  width: 100%;
  height: 100%;
`

const ComboTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  line-height: 100%;
`

const CombosWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  overflow: scroll;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`

const ComboPanel = styled(Panel)`
  margin: 5px 15px 0;
  padding: 15px 0;
  height: 100%;
  min-width: 270px;
  min-height: 480px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 1fr 10%;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`

const ComboTitle = styled.span`
  font-weight: 200;
  font-size: 20px;
`

const ComboListWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const ComboList = styled.ul`
  list-style: none;

  & > li {
    font-size: 18px;
    margin: 5px 0 0;
  }
`

const ComboInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 80%;
  position: relative;
  left: 0;
`

const ComboLinkWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const ComboLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #2a67fd;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 25px;
  &:hover {
    color: black;
  }
`

const Combos = ({ combos, children }) => {
  const history = useHistory()

  return (
    <ComboWrapper>
      <ComboTitleWrapper>
        <ComboTitle>{children}</ComboTitle>
      </ComboTitleWrapper>
      <CombosWrapper>
        {combos.map((combo, i) => (
          <ComboInnerWrapper key={i}>
            <ComboPanel>
              <ComboInnerWrapper>
                <ComboTitle>
                  <i>{combo.title}</i> - <b>{formatCurrency(combo.value)}</b>
                </ComboTitle>
              </ComboInnerWrapper>
              <ComboListWrapper>
                <ComboList>
                  {combo.attributes.map((attr, i) => (
                    <li key={i}>{format(attr)}</li>
                  ))}
                </ComboList>
              </ComboListWrapper>
              <ComboLinkWrapper>
                <ComboLink onClick={() => history.push(combo.url)}>Clique e simule</ComboLink>
              </ComboLinkWrapper>
            </ComboPanel>
          </ComboInnerWrapper>
        ))}
      </CombosWrapper>
    </ComboWrapper>
  )
}

export default memo(Combos)
