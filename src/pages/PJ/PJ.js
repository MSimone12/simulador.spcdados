import React from 'react'

import combos from '../../constants/combos'
import Combos from '../Combos'

const PF = () => {
  const combosList = Object.keys(combos.pj).map(combo => combos.pj[combo])

  return (
    <Combos combos={combosList}>
      Combos <b>PJ</b>
    </Combos>
  )
}

export default PF
