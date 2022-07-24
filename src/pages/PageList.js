import React from 'react';
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import PortfolioPage from "../pages/PortfolioPage";

export const PageList = [
    {name: 'o mnie', path: '/', element: <AboutPage/>},
    {name: 'doświadczenie', path: 'skills', element: <SkillsPage/>},
    {name: 'portfolio', path: 'portfolio', element: <PortfolioPage/>},
]