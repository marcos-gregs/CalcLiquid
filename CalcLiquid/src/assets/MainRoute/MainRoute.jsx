import {createBrowserRouter } from 'react-router-dom'
import { Calc } from '../Calc/Calc'

export const MainRoute = createBrowserRouter([
    {
        path:'/',
        element:<Calc/>
    }
])