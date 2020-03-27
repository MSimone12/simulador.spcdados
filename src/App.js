import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Root from './Root'
import routes from './constants/routes'

import Profile from './pages/Profile'
import PF from './pages/PF'
import PJ from './pages/PJ'
import ComboDetails from './pages/ComboDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Root>
        <Switch>
          <Route path={routes.PROFILE} component={Profile} />
          <Route exact path={routes.PF} component={PF} />
          <Route exact path={routes.PJ} component={PJ} />
          <Route path={routes.COMBO_DETAILS} component={ComboDetails} />
          <Redirect from="*" to={routes.PROFILE} />
        </Switch>
      </Root>
    </BrowserRouter>
  )
}

export default App
