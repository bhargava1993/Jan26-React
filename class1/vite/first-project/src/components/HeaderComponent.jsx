import NavBarComponent from "./NavBar";
import FruitsCompnents from "./FruitsComponent";

const HeaderComponent = ()=>{
    // const fruitsArray=["Apple","Banana","Mangole","orang","Pineapple"];
    const fruitsArray= [];
    return (
        <>
            <h1>Header Component 2</h1>
            {/* <NavBarComponent /> */}
            <FruitsCompnents arrayDetails = {fruitsArray} status = {true}/>
        </>
    )
}



export default HeaderComponent;