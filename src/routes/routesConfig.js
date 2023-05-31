import PeoplePage from '@containers/PeoplePage';
import HomePage from '@containers/HomePage/HomePage';
import NotFoundPage from '@containers/NotFoundPage/NotFoundPage';
import PersonPage from '@containers/PersonPage/PersonPage';
import FavoritesPage from '@containers/FavoritesPage/FavoritesPage'
import SearchPage from '@containers/SearchPage/SearchPage'
import ErrorMessage from '@components/ErrorMessage'


const routesConfig = [
    {
        path:'/',
        element: <HomePage/>
    },
    {
        path:'/people',
        element: <PeoplePage/>
    },
    {
        path:'/search',
        element: <SearchPage/>
    },
    {
        path:'/not-found',
        element: <NotFoundPage/>
    },
    {
        path:'/fail',
        element: <ErrorMessage/>
    },
    {
        path:'/people/:id',
        element: <PersonPage/>
    },
    {
        path:'*',
        exact:false,
        element: <NotFoundPage/>
    },
    {
        path:'/favorites',
        element: <FavoritesPage/>
    },
]

export default routesConfig