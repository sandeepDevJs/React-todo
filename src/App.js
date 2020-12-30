import React from 'react'
import { Header } from "./header"
import Card from "./body/card"
import NavBar from "./navs"
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "./redux/store"

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    <NavBar/>
                    <Header/>
                    <Card />
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    )
}
