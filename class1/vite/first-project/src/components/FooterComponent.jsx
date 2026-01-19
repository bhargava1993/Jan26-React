import FruitsCompnents from "./FruitsComponent";

function FooterComponent (){
      const laptops = ["apple","Lenovo","hp","Dell","aces","notebook"];
    return (
        <>
        <h1>Footer Component 3</h1>
        <FruitsCompnents arrayDetails = {laptops} status = {false}/>
        </>
    )
}

export default FooterComponent;