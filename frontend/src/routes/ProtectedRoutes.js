import { Route } from 'react-router-dom';
import routes from './Routes';
import PrivateRoute from './PrivateRoute';

function ProtectedRoutes() {
    return (
            routes.map((route, idx) => (
              <Route
                key={idx}
                path={route.path}
                element={<PrivateRoute>{ route.component }</PrivateRoute>}
                exact={route.exact}
              />
            ))
    )
}

export default ProtectedRoutes;
