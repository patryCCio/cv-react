import React from "react";
import { Routes, Route } from "react-router-dom";
import { PageList } from "../pages/PageList";
import ErrorPage from "../pages/ErrorPage";

const Content = () => {
  const pages = PageList.map(page => (
    <Route key={page.name} path={page.path} element={page.element}/>
  ));
  return (
      <Routes>
        {pages}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  );
};

export default Content;