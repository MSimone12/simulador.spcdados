import React from 'react'
import styled from 'styled-components'
import MaskedInput from 'react-text-mask'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
  align-self: center;
`

const MaskInput = styled(MaskedInput)`
  border: solid 1px #d5dded;
  border-radius: 4px;
  padding: 9px;
  margin: 10px 0;
  font-size: 16px;
`

const CustomInput = styled.input`
  border: solid 1px #d5dded;
  border-radius: 4px;
  padding: 9px;
  margin: 10px 0;
  font-size: 16px;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 16px;
`

const InputField = ({ mask, revertMask, label, ...props }) => {
  return (
    <InputContainer>
      <Label htmlFor={props.name}>{label}</Label>
      {mask ? <MaskInput guide={false} mask={mask} {...props} /> : <CustomInput {...props} />}
    </InputContainer>
  )
}

export default InputField
