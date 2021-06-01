import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAunthenticated,
    component: Component,
    ...rest
}) => {

    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <Route
            {...rest}
            component={ (props) => (
                ( isAunthenticated )
                    ? (<Component {...props} />)
                    : (<Redirect to="/login" />) 
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAunthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
