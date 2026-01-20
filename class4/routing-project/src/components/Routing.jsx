import { useEffect, useState } from "react";
import { Routes, Route, Link, useParams, Navigate } from "react-router-dom";

const About = () => {
    return <h3>About page</h3>
}

const Home = () => {
    return <h3> I am Home page</h3>
}

const Lisiting = () => {
    return <h3>I am Lisiting Page</h3>
}

const PageNotFound = () => {
    return <h3> Page Not Found</h3>
}

const Users = (props) => {

   const [data, setData] =useState(null);
    // console.log("props----", props);
    const params = useParams();
    // console.log("params---------", params);
    const userId = params.id;
    // console.log("userId--------", userId);

    // https://fakestoreapi.com/users/1

    useEffect(() => {

        async function fetchUserData() {
            try {
                const resp = await fetch(`https://fakestoreapi.com/users/${params.id}`);
                const userData = await resp.json();
                setData(userData)
                // console.log("userData----", userData)
            } catch (error) {
                console.log("error---", error);
            }
        }

        fetchUserData();
    }, [])

    return (
        <>
            {/* <h2>User Details:{userId}</h2> */}

            {data == null ?(
                <h3> ...Loading</h3>
            ):(
                <>
                    <h4>User Name: {data.username}</h4>
                    <h3>Name: {data.name.firstname +" "+data.name.lastname}</h3>
                    <h4>Phone: {data.phone}</h4>
                </>
            )}
        </>
    )
}

function Routing() {
    return (
        <>
            <h1> Routing Example</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/ ">Home page</Link>
                    </li>

                    <li>
                        <Link to="/about">About page</Link>
                    </li>

                    <li>
                        <Link to="/lisiting">Lisiting page</Link>
                    </li>

                    <li>
                        <Link to="/users">Users page</Link>
                    </li>
                </ul>

            </nav>
            <Routes>

                {/* path-> wild card */}
                <Route path="*" element={<PageNotFound></PageNotFound>}>
                    {" "}
                </Route>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/lisiting" element={<Lisiting></Lisiting>}></Route>
                <Route path="/users/:id" element={<Users isAdmin={true}></Users>}></Route>
                <Route path="/abc" element= {<Navigate to="/about"></Navigate>}></Route>
            </Routes>
        </>

    )
}

export default Routing;
