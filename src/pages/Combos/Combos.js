import React, { memo } from 'react'

import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Panel from '../../components/Panel'

import { formatCurrency } from '../../utils'
import { format } from '../../constants/attributes'

const ComboWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-gap: 3px;
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
  justify-content: space-around;

  width: 100%;

  overflow-y: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`

const ComboPanel = styled(Panel)`
  margin: 15px;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 1fr 10%;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 10px 10px rgba(17, 7, 7, 0.04);
  }
`

const ComboTitle = styled.span`
  font-weight: 200;
  font-size: 30px;
`

const ComboListWrapper = styled.div`
  height: 100%;
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: column;
`

const ComboList = styled.ul`
  list-style: none;

  & > li {
    font-size: 25px;
  }
`

const ComboInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 80%;
`

const ComboLinkWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
        {combos.map(combo => (
          <ComboInnerWrapper>
            <ComboPanel>
              <ComboInnerWrapper>
                <ComboTitle>
                  <i>{combo.title}</i> - <b>{formatCurrency(combo.value)}</b>
                </ComboTitle>
              </ComboInnerWrapper>
              <ComboListWrapper>
                <ComboList>
                  {combo.attributes.map(attr => (
                    <li>{`${format.pf(attr.name)}${
                      attr.quantity ? ` [${attr.quantity}]` : ''
                    }`}</li>
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
