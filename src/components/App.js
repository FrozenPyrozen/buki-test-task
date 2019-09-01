import React from 'react';
import ChatList from './ChatList';
import CreateMessage from './CreateMessage';
import Header from './Header';
function App() {
  return (
    <div className="App">
      <Header />
      <ChatList />
      <CreateMessage />
    </div>
  );
}

export default App;
