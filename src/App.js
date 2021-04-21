import React from 'react';
import './App.css';
import 'normalize.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/header/Header';
import HeaderWrapper from './components/header/HeaderWrapper';
import Slogan from './components/header/Slogan';
import HeaderContentParagraph from './components/header/HeaderContentParagraph';

import UserSpace from './components/userSpace/UserSpace'

import UserMenu from './components/userSpace/userMenu/UserMenu';
import UserLib from './components/userSpace/userLib/UserLib';

import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
        <Header>
            <HeaderWrapper>
                <Slogan/>
                <HeaderContentParagraph/>
            </HeaderWrapper>
        </Header>

        <UserSpace>
            <UserMenu/>
            <hr/>
            <UserLib/>
        </UserSpace>
        <Footer/>
    </div>
  );
}

export default App;
