import React, {Suspense} from "react"
import {Route, Routes, Link} from "react-router-dom";
import {Sidebar} from "widgets/Sidebar";
import {useTheme} from "app/providers/ThemeProvider";
import "./styles/index.scss"
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router"
import {Navbar} from "widgets/Navbar";

const App = () => {
  const {theme} = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
      <Navbar/>
    </div>
  )
}

export default App;

