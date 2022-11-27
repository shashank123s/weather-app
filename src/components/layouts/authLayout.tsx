import { Outlet } from 'react-router-dom';

function AuthLayout() {
    return (<>
        <div className="container-fluid"  >
            <div className="row justify-content-center align-items-center min-vh-100 bg-login">
                <div className="col-md-5 rounded--2 position-relative bg-primary p-5" style={{ minHeight: '10rem' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    </>);
}

export default AuthLayout;