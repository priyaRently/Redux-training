import { View, Text } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Todo from './src/components/TodoApp'

import store from './src/store'

const App = () => {
  return (
    <Provider store={store}>
      <Todo/>
    </Provider> 
  )
}

export default App