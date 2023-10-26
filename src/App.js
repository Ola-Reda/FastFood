import React, {useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import { Header, SideBar, Main } from './components/index'
import { Home, MealDetails, MealCategory, Error  } from './pages/index';
import CategoryProvider from './store/category-context';
import MealProvider from './store/meal-context';


const App = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleSidebarHandler = () => {
    setSidebarIsOpen(prevState => !prevState)
  }

  return (
    <MealProvider>
    <CategoryProvider>
      <Header toggleSidebar={toggleSidebarHandler}/>
      <SideBar toggleSidebar={toggleSidebarHandler} toggle={sidebarIsOpen}/>
      <Main/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/meals/:mealId" element={<MealDetails/>} />
        <Route path="/meals/category/:name" element={<MealCategory/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </CategoryProvider>
    </MealProvider>
  );
}

export default App;
