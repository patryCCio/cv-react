import React from 'react';

import HomePage from '../pages/HomePage';
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import PortfolioPage from "../pages/PortfolioPage";

export const PageList = [
    {name: 'Biblioteki', path:'/', element: <HomePage/>},
    {name: 'o mnie', path: 'about', element: <AboutPage/>},
    {name: 'doświadczenie', path: 'skills', element: <SkillsPage/>},
    {name: 'portfolio', path: 'portfolio', element: <PortfolioPage/>},
]