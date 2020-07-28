import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import Main from './components/pages/Main'
import GifPage from './components/pages/GifPage'
import NoMatch from './components/pages/NoMatch'
import {lightTheme, darkTheme} from './components/ui/theme'
import { ThemeProvider } from '@material-ui/core'
import { useSelector } from 'react-redux'


function App() {
  const themeMode = useSelector(state => state.theme)
  
  return (
    <ThemeProvider theme={themeMode ? lightTheme : darkTheme}>
      
        {/* <Switch > */}
          <Route exact path='/'>
            <Main />
          </Route>
          {/* <Route>
            <NoMatch />
          </Route>
        </Switch> */}
        <Route path={`/:id`}>
          <GifPage />
        </Route>
     
    </ThemeProvider>
  );
}

export default App;
