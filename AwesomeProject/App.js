import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Counter from './src/components/Counter'
import {store} from './src/store'

const App = () => {
  return (
    <Provider store={store}>
      <Counter/>
    </Provider>
  )
}

export default App