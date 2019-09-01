import React from 'react';
import ChatList from './ChatList';
import CreateMessage from './CreateMessage';
import Header from './Header';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <ChatList />
      <CreateMessage />
      <Footer />
    </div>
  );
}

export default App;
