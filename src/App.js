import React , { Component } from 'react';
import { View , Text } from 'react-native';
import { Header } from './components/common';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList'

class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
            <View style = {{ flex: 1 }}>
                <Header headerName = "Tech-Stack" />
                <LibraryList />
            </View>
        </Provider>
    );
  }
}

export default App;