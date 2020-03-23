import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'

import Panel from '../../components/Panel'
import combos from '../../constants/combos'
import attributes, { format } from '../../constants/attributes'
import { formatCurrency } from '../../utils'
import ComboCheckbox from './ComboCheckbox'
import Modal from '../../components/Modal'
import { calculateDiscount } from '../../constants/values'

const DetailsGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 10% 1fr;
  grid-template-areas:
    'header header'
    'content content';
  overflow-y: scroll;
  overflow-x: hidden;
`

const BaseButton = styled.button`
  cursor: pointer;
  border-radius: 3px;
  padding: 6px 0;
  margin: 0px;
  font-weight: 400;
  width: 100%;
  color: #fff;
  font-size: 25px;
  margin: 40px 0 0 0;

  &:disabled {
    background-color: #b3b3b3;
    border-color: #b3b3b3;
    cursor: not-allowed;
  }
`

const DangerButton = styled(BaseButton)`
  border: 1px solid red;
  background-color: red;

  &:hover {
    background-color: rgba(255, 0, 0, 0.7);
    border-color: rgba(255, 0, 0, 0.7);
  }
`

const SuccessButton = styled(BaseButton)`
  border: 1px solid green;
  background-color: green;

  &:hover {
    background-color: rgba(0, 255, 0, 0.7);
    border-color: rgba(0, 255, 0, 0.7);
  }
`

const InfoButton = styled(BaseButton)`
  border: 1px solid blue;
  background-color: blue;

  &:hover {
    background-color: rgba(0, 0, 255, 0.7);
    border-color: rgba(0, 0, 255, 0.7);
  }
`

const HeaderWrapper = styled.div`
  grid-area: header;
  width: 100%;
  height: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
`

const ContentWrapper = styled.div`
  grid-area: content;
  display: grid;
  grid-template-columns: 60% 1fr;
  margin: 0;
  padding: 0;
  width: 100%;
`

const DetailsPanel = styled(Panel)`
  margin: 10px 0;
  width: 80%;
  padding: 20px;
  align-items: flex-start;
  justify-content: space-between;
`

const ComboWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`

const ComboTitle = styled.span`
  font-size: 30px;
  font-weight: 200;
  align-self: center;
`
const AttrsList = styled.ul`
  list-style: none;

  & > li {
    font-size: 18px;
    margin: 5px 0 0;
  }
`

const ButtonRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const assembleFamilies = families =>
  Object.values(families).map(family => ({
    ...family,
    attributes: family.attributes.map(attribute => ({ value: attribute, label: format(attribute) }))
  }))

const defineDisabled = (combo, family) => combo || family

const ComboDetails = () => {
  const { params } = useRouteMatch()

  const [show, setShow] = useState(false)

  const combo = combos[params.type][params.combo]

  const initialAttributes = combo.attributes

  const families = attributes.families[params.type]

  const initialFamilyDisabled = Object.values(families).map(family => family.name)

  const [quantity, setQuantity] = useState(1)

  const [totalValue, setTotalValue] = useState(
    initialAttributes.reduce((acc, attr) => calculateDiscount(attr, quantity), 0)
  )
  const [selectedAttrs, setSelectedAttrs] = useState(initialAttributes)

  const [familyDisabled, setFamilyDisabled] = useState(initialFamilyDisabled)
  const [addingAtributeDisabled, setAddingAtributeDisabled] = useState(false)

  const totalValueCalculator = (array, qtd) =>
    array.reduce((acc, attr) => acc + calculateDiscount(attr, qtd), 0)

  useEffect(() => {
    if (addingAtributeDisabled) {
      setFamilyDisabled([])
    } else {
      setFamilyDisabled(initialFamilyDisabled)
    }
  }, [addingAtributeDisabled]) // eslint-disable-line

  useEffect(() => {
    if (selectedAttrs.length === combo.max) {
      setAddingAtributeDisabled(false)
    }
    setTotalValue(totalValueCalculator(selectedAttrs, quantity))
  }, [selectedAttrs, quantity]) // eslint-disable-line

  const comboDisabled = !addingAtributeDisabled && selectedAttrs.length === combo.max

  const renderFamilies = family => {
    const isDisabled = defineDisabled(
      comboDisabled,
      familyDisabled.some(disabled => disabled === family.name)
    )

    const onFamilyCheckboxChange = e => {
      if (e.target.checked) {
        if (!comboDisabled) {
          setSelectedAttrs(old =>
            [...old].concat(
              family.attributes
                .filter(({ value }) => !selectedAttrs.includes(value))
                .map(({ value }) => value)
            )
          )
        }
      } else {
        setSelectedAttrs(old =>
          [...old].filter(attr => !family.attributes.some(({ value }) => value === attr))
        )
      }
    }

    const onCheckboxChange = e => {
      const attrName = e.target.value

      if (e.target.checked) {
        setSelectedAttrs(old => [...old, attrName])
      } else setSelectedAttrs(old => old.filter(name => name !== attrName))
      if (!addingAtributeDisabled) {
        setFamilyDisabled(old => old.filter(old => old !== family.name))
      }
    }

    const onRadioButtonChange = e => {
      const value = e.target.value

      const hasAttr = selectedAttrs.some(attr =>
        family.attributes.some(familyAttr => familyAttr.value === attr)
      )

      if (hasAttr) {
        const selectedAttributes = selectedAttrs.filter(
          attr => !family.attributes.some(familyAttr => familyAttr.value === attr)
        )
        setSelectedAttrs([...selectedAttributes, value])
      } else setSelectedAttrs(old => [...old, value])
    }

    return (
      <ComboCheckbox
        key={family.name}
        family={family}
        isDisabled={isDisabled}
        onCheckboxChange={onCheckboxChange}
        onRadioButtonChange={onRadioButtonChange}
        selectedAttrs={selectedAttrs}
        onFamilyCheckboxChange={onFamilyCheckboxChange}
        familyDisabled={comboDisabled}
        inputDisabled={name => family.disabled && initialAttributes.includes(name)}
      />
    )
  }

  return (
    <>
      <DetailsGrid>
        <HeaderWrapper>
          <ComboTitle>
            Combo {params.type.toUpperCase()} - {combo.title}
          </ComboTitle>
        </HeaderWrapper>
        <ContentWrapper>
          <ComboWrapper>
            <DetailsPanel>
              <ComboTitle>Atributos do Combo</ComboTitle>
              {assembleFamilies(families).map(renderFamilies)}
              <DangerButton disabled={!comboDisabled} onClick={() => setShow(true)}>
                Selecionar atributos adicionais
              </DangerButton>
            </DetailsPanel>
          </ComboWrapper>
          <ComboWrapper>
            <DetailsPanel>
              <ComboTitle>Quantidade</ComboTitle>
            </DetailsPanel>
            <DetailsPanel>
              <ComboTitle>
                Resumo - <b>{formatCurrency(totalValue)}</b>
              </ComboTitle>
              <AttrsList>
                {selectedAttrs.map((attr, i) => (
                  <li key={i}>{format(attr)}</li>
                ))}
              </AttrsList>
            </DetailsPanel>
          </ComboWrapper>
        </ContentWrapper>
      </DetailsGrid>
      <Modal show={show} title="Atenção!" onClose={() => setShow(false)}>
        <h2>Os atributos adicionais, terão sua cobrança à parte!</h2>
        <ButtonRow>
          <InfoButton onClick={() => setShow(false)}>Voltar</InfoButton>
          <SuccessButton
            onClick={() => {
              setAddingAtributeDisabled(true)
              setShow(false)
            }}
          >
            Confirmar
          </SuccessButton>
        </ButtonRow>
      </Modal>
    </>
  )
}

export default ComboDetails
