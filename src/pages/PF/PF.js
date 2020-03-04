import React from 'react'

import styled from 'styled-components'

import Panel from '../../components/Panel'

const PFWrapper = styled.div`
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-gap: 3px;
  width: 100%;
  height: 100%;
`

const PFTitle = styled.div`
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

  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 10px 10px rgba(17, 7, 7, 0.04);
  }

  @media screen and (max-width: 425px) {
  }
`

const ComboTitle = styled.span`
  font-weight: 200;
  font-size: 30px;
`

const ComboInnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 70%;
`

const PF = () => {
  return (
    <PFWrapper>
      <PFTitle>
        <ComboTitle>
          Combos <b>PF</b>
        </ComboTitle>
      </PFTitle>
      <CombosWrapper>
        <ComboInnerWrapper>
          <ComboPanel>
            <ComboTitle>
              <i>Básico</i>
            </ComboTitle>
          </ComboPanel>
        </ComboInnerWrapper>
        <ComboInnerWrapper>
          <ComboPanel>
            <ComboTitle>
              <i>Intermediário</i>
            </ComboTitle>
          </ComboPanel>
        </ComboInnerWrapper>
        <ComboInnerWrapper>
          <ComboPanel>
            <ComboTitle>
              <i>Completo</i>
            </ComboTitle>
          </ComboPanel>
        </ComboInnerWrapper>
        <ComboInnerWrapper>
          <ComboPanel>
            <ComboTitle>
              <i>Master</i>
            </ComboTitle>
          </ComboPanel>
        </ComboInnerWrapper>
      </CombosWrapper>
    </PFWrapper>
  )
}

export default PF
