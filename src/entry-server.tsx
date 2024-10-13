import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App'
import Home from './pages/Home'
import SectorPage from './pages/SectorPage'

import { Provider } from 'react-redux';
import { store } from './store';
import { setData } from './store/slices/defaultslice';


export async function render(url) {


  //redux
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
  const serverdatalist = await response.json()


    // Populate Redux store with server data
  store.dispatch(setData(serverdatalist));




  let serverData = null
  let head = null
  // Check if we're on the home page and fetch data if needed
  if (url === '') {
    serverData = await Home.fetchData()
  }
  if (url === 'general-data/overview') {
    head = await SectorPage.getMetaInfo()
    
  }


  const preloadedState = store.getState();


  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
    <StaticRouter location={url}>
      <App serverData={serverData} />
    </StaticRouter>
    </Provider>
  )



  return { html, serverData, head, preloadedState }
}