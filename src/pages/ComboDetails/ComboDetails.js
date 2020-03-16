import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import Panel from '../../components/Panel'
import combos from '../../constants/combos'
import { formatCurrency } from '../../utils'

const DetailsGrid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5% 10% 1fr;
  grid-template-areas:
    'header header'
    'description description'
    'content content';
`

const HeaderWrapper = styled.div`
  grid-area: header;
  width: 100%;
  height: 100%;
  padding: 0 15px;
`

const DescriptionWrapper = styled.div`
  grid-area: description;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 15px;
`

const ContentWrapper = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  width: 100%;
  height: 100%;
`

const ComboWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ComboTitle = styled.span`
  font-size: 30px;
  font-weight: 200;
`

const ComboDetails = () => {
  const { params } = useRouteMatch()

  const combo = combos[params.type][params.combo]

  const [totalValue, setTotalValue] = useState(combo.value)

  return (
    <DetailsGrid>
      <HeaderWrapper>
        <ComboTitle>
          Combo {params.type.toUpperCase()} - {combo.title}
        </ComboTitle>
      </HeaderWrapper>
      <DescriptionWrapper>
        <ComboTitle>Descrição</ComboTitle>
      </DescriptionWrapper>
      <ContentWrapper>
        <ComboWrapper>
          <Panel>
            <ComboTitle>Lista de Atributos</ComboTitle>
          </Panel>
        </ComboWrapper>
        <ComboWrapper>
          <Panel>
            <ComboTitle>
              {combo.title} - <b>{formatCurrency(totalValue)}</b>
            </ComboTitle>
          </Panel>
        </ComboWrapper>
      </ContentWrapper>
    </DetailsGrid>
  )
}

export default ComboDetails
