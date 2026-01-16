const FruitsCompnents =({arrayDetails,status})=>{
    // console.log("fruitsArray----",fruitsArray)
    console.log("Array----",arrayDetails)
    // console.log(sampleFun());
    return (
        <>
            <h2>List:</h2>
            {/* <h3>Banana</h3>
            <h3>Mango</h3>
            <h3>Apple</h3>
            <h3>Pineapple</h3>
            <h3>orngle</h3> */}
    
                {status ? "success" :"failure"}
            {
                 arrayDetails.map((ele, index)=>(
                    <h3 key={index}>{ele}</h3>
                )            
                )
            }
             {/* <h2>laptops List:</h2>
            {
                laptops.map((ele,index)=>(
                    <h3 key={index}>{ele}</h3>
                ))
            } */}

          {/* <h2>personDetails:</h2>
          <h3>{personDetails.name}</h3>
           <h3>{personDetails["salary"]}</h3> */}
        </>
    )
}

export default FruitsCompnents;