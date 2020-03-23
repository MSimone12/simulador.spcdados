import React, { memo } from 'react'
import styled from 'styled-components'

const ComboSubtitle = styled.span`
  font-size: 23px;
  font-weight: bold;
`

const CheckBoxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  padding: 5px 0;
  width: 100%;
`

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`

const ComboCheckbox = ({
  family,
  onCheckboxChange,
  onRadioButtonChange,
  selectedAttrs,
  isDisabled,
  onFamilyCheckboxChange,
  familyDisabled,
  inputDisabled
}) => {
  return (
    <>
      <ComboSubtitle>
        <InputWrapper>
          <input
            type="checkbox"
            disabled={familyDisabled}
            id={family.name}
            onChange={onFamilyCheckboxChange}
          />
          <label htmlFor={family.name}>{family.title}</label>
        </InputWrapper>
      </ComboSubtitle>
      <CheckBoxWrapper>
        {family.attributes.map(attr => {
          const checked = selectedAttrs.some(selected => selected === attr.value)
          const disabled = inputDisabled(attr.value) || (isDisabled && !checked)
          return (
            <InputWrapper key={attr.value}>
              <input
                disabled={disabled}
                id={attr.value}
                type={family.type}
                name={family.name}
                value={attr.value}
                checked={checked}
                onChange={family.type === 'checkbox' ? onCheckboxChange : onRadioButtonChange}
              />
              <label htmlFor={attr.value}>{attr.label}</label>
            </InputWrapper>
          )
        })}
      </CheckBoxWrapper>
    </>
  )
}

export default memo(ComboCheckbox)
