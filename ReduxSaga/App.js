import React from 'react'
import { Provider } from 'react-redux'
import Screen from './src/components/Screen'
import {store} from './src/store'

const App = () => {
  return (
    <Provider store={store}>
        <Screen/>
    </Provider>
  )
}

export default App