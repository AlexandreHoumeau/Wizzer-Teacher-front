import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import { isLogin } from '../utils/isLogin';

const PrivateRoute = ({component: Component, roles, path, ...rest}) => {
    roles = roles || [];
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;

// TODO: https://www.wanadev.fr/204-react-js-2-comment-gerer-le-routing-et-la-securite-sur-une-application-react/
// const Route = ({ component: Component, roles, path }) => {
//     roles = roles || [];
//     return (
//         <Route
//             path={path}
//             exact={true}
//             render={(props) => 
//                 hasRoles(roles) ? (
//                     <Component {...props} />
//                 ) : (
//                     isAuth() ? (
//                         <Unauthorized />
//                     ) : (
//                         <Redirect to="/login" />
//                     )
//                 )
//             }
//         />
//     );
// }
