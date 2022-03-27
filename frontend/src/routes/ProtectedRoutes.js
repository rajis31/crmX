import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './Routes';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ProtectedRoutes() {
    return (
        <Routes>
            <Suspense
                fallback={<Box><CircularProgress /></Box>}
            >
                {routes.map(({ component: Component, path, exact }) => (
                    <Route
                        path={`/${path}`}
                        key={path}
                        exact={exact}
                    >
                        <Component />
                    </Route>
                ))}
            </Suspense>
        </Routes>
    )
}

export default ProtectedRoutes;
