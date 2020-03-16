import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { FiUsers } from 'react-icons/fi'
import { FaRegBuilding } from 'react-icons/fa'

import Panel from '../../components/Panel'

const ProfileWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;

  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`

const ProfileInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 70%;
  padding: 25px;
`

const ProfilePanel = styled(Panel)`
  justify-content: center;
  padding: 10% 0;
  cursor: pointer;
  transition: all 0.1s ease;
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 5px 10px 10px rgba(17, 7, 7, 0.04);
  }
`

const PanelTitle = styled.span`
  font-weight: 200;
  font-size: 40px;
`

const UsersIcon = styled(FiUsers)`
  margin-right: 10px;
`

const Building = styled(FaRegBuilding)`
  margin-right: 10px;
`

const Profile = () => {
  const history = useHistory()

  return (
    <ProfileWrapper>
      <ProfileInnerWrapper>
        <ProfilePanel onClick={() => history.push('/pf')}>
          <PanelTitle>
            <UsersIcon />
            Pessoa Física
          </PanelTitle>
        </ProfilePanel>
      </ProfileInnerWrapper>
      <ProfileInnerWrapper>
        <ProfilePanel onClick={() => history.push('/pj')}>
          <PanelTitle>
            <Building />
            Pessoa Jurídica
          </PanelTitle>
        </ProfilePanel>
      </ProfileInnerWrapper>
    </ProfileWrapper>
  )
}

export default Profile
