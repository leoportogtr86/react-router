import {Link, Outlet} from "react-router-dom";

const Page1 = () => {
    return (
        <div>
            <h1>Page 1</h1>
            <p>Bem vindo à página 1</p>
            <Link to={"filhaPage1"}>Filha da Page 1</Link>
            <Outlet/>
        </div>
    )
}

export default Page1;