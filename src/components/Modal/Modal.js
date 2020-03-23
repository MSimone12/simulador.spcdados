import React from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 50px;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Dialog = styled.div`
  background-color: #fff;
  border-radius: 5px;
  max-width: 60%;
  min-width: 500px;
  max-height: 60%;
  min-height: 300px;
  padding: 5px 30px;

  display: block;
`

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

const CloseButton = styled.span`
  font-size: 50px;
  cursor: pointer;
`

const Modal = ({ show, title, onClose, children }) => {
  return show ? (
    <Backdrop>
      <Dialog>
        <TitleWrapper>
          <h1>{title}</h1>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </TitleWrapper>
        {children}
      </Dialog>
    </Backdrop>
  ) : null
}

export default Modal
