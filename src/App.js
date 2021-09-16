import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { DataProvider } from './GlobalState'
import Header from './components/headers/Header'
import SideBar from './components/headers/SideBar'
import MainPages from './components/mainpages/Pages'


function App() {
  return (
    <DataProvider>
      <Router>
        <main>
          <div >
            <Header />
            <div className="main">
              <SideBar />
              <MainPages />
            </div>
          </div>
        </main>
      </Router>
    </DataProvider>
  );
}

export default App;
