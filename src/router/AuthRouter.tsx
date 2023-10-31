import { Navigate, useLocation } from "react-router-dom";

interface Iprops {
  children: any
}
export default function AuthRouter(props: Iprops) {
  const { children } = props;
  const location = useLocation();
  const token = localStorage.getItem('token');
  console.log('token', token)
  // const token = '11'
  if (token) {
    if (location.pathname == '/login') {
      return <Navigate to={'/'} replace={true}></Navigate>
    }
    return <>{children}</>
  } else {
    if (location.pathname == '/login') {
      return <>{children}</>
    }
    return <Navigate to={'/login'} replace={true}></Navigate>
  }
}