import { Outlet, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectUser } from "../redux/userSlice";
const  AuthRoutes = ()=>{
    // const user = useSelector(selectUser)
    // console.log(user);
    // let auth = {token:user!=null?true:false}
    // return auth.token ? <Outlet/>:<Navigate to="/login"/>
    let isAuthenticated = localStorage.getItem('isAuthenticated')
    return isAuthenticated === 'true' ? <Outlet/>:<Navigate to="/login"/>
}

export default AuthRoutes