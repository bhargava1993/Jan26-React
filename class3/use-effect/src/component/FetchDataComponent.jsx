import { useState, useEffect } from "react";


const FetchDataComponent = () => {

    const [data, setData] = useState(null);

    useEffect(() => {

        try {
            const fetchData = async () => {
                const response = await fetch("https://jsonplaceholder.typicode.com/todos");
                const result = await response.json();
                console.log("result----", result);
                console.log("data-----before---------", data);
                setData(result);
                console.log("data-----after---------", data);
            };

            fetchData();
            
        } catch (error) {
            console.log("error------", error)
        }


    }, []);//Only runs once

    return (
        <>
            {data ? <p>data loaded: {data.title}</p> : <p>Loading....</p>}
        </>
    )
}

// if (data) {
//     <p>data loaded</p>
// } else {
//     <p>Loading....</p>
// }

export default FetchDataComponent;