import './index.css';
import { ReactComponent as BellIcon } from './icons/bell.svg';
import { ReactComponent as MessengerIcon } from './icons/messenger.svg';
import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as PlusIcon } from './icons/plus.svg';


import Navbar from './components/Navbar'
import NavItem from './components/NavItem'
import YdNav from './components/YdNav'
import SearchBar from './components/SearchBar'
import DropdownMenu from './components/DropdownMenu'
import ProductGrid from './components/ProductGrid'

import React from 'react';

function App() {
  return (
    <>
    <Navbar>
      <YdNav />
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
    <SearchBar />
    <ProductGrid />
    </>
  );
}


export default App;
