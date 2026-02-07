import React, { useState, useCallback } from 'react';

const Use_callback = () => {
    const [items, setItems] = useState(["item1", "item2", "item3", "item4", "item5"]);

    // useCallback(() => { }, []);

    const removeItem = useCallback((item) => {
        console.log("item remove item");
        setItems((prevItem)=> prevItem.filter((ele) => ele !== item))
    }, []);


    //  const removeItem = (item) => {
    //     // items.filter((ele)=> ele !== item)
    //     console.log("item remove item");
    //     setItems((prevItem)=> prevItem.filter((ele) => ele !== item))
    // }
        
    return (
        <>
            <h1>Use callback</h1>
            {items.map((ele, index) => (
                <div key={index}>
                    {ele}
                    <button onClick={() => removeItem(ele)}>removeItem</button>
                </div>
            )
            )}
        </>
    );
}

export default Use_callback;