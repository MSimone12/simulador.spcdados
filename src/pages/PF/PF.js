import React from 'react'

import combos from '../../constants/combos'
import Combos from '../Combos'

const PF = () => {
  const combosList = Object.keys(combos.pf).map(combo => combos.pf[combo])

  return (
    <Combos combos={combosList}>
      Combos <b>PF</b>
    </Combos>
  )
}

export default PF
