import useRole from 'hooks/useRole';
import { Login } from 'pages/paths';
import { Navigate, Outlet } from 'react-router-dom';
import { UserRoles } from 'utils/enum';

const ProtectedRoute = ({ minRole }: { minRole?: UserRoles }) => {
    const { hasMinRole } = useRole();

    if (!hasMinRole(minRole)) {
        return <Navigate to={Login} />;
    }
    return <Outlet />;
};

export default ProtectedRoute;
