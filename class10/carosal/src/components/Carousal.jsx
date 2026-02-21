import { useEffect, useState } from "react"


const items = [
    {
        id: 1,
        imageUrl: "https://fastly.picsum.photos/id/730/200/300.jpg?hmac=Xa_29B3ZIok8lz4JGLZUBU_ARxJew0twrMWMHEy_T1I",
        title: "image1",
        description: "des image1"
    },
    {
        id: 2,
        imageUrl: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        title: "image2",
        description: "des image2"
    },
    {
        id: 3,
        imageUrl: "https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI",
        title: "image3",
        description: "des image3"
    },
    {
        id: 4,
        imageUrl: "https://fastly.picsum.photos/id/870/200/300.jpg?grayscale&hmac=SPsp3B3FsA53PDmvHusUdMjd391ibse2Quf-iVwDpbQ",
        title: "image4",
        description: "des image4"
    },
    {
        id: 5,
        imageUrl: "https://fastly.picsum.photos/id/492/200/300.jpg?hmac=qSBjlTNMOPN_ejfPwtAFG_nI_v4XCzpwib3c4miH4fM",
        title: "image5",
        description: "des image5"
    }

]

const Carosal = () => {

    const [currentItem, setCurrentItem] = useState(0)

    const nextItem = () => {
        if (currentItem === items.length - 1) {
            setCurrentItem(0);
        } else {
            setCurrentItem((curr) => curr + 1)
        }

    }

    const prevItem = () => {

        if (currentItem === 0) {
            setCurrentItem(items.length - 1)
        } else {
            setCurrentItem((curr) => curr - 1)
        }

    }

    useEffect(() => {

        const timer = setInterval(() => {
            nextItem();
        }, 2000)

        return ()=> clearInterval(timer)

    },[currentItem])



    return (
        <div>
            <button onClick={prevItem} style={{ background: "blue" }}>PrevButton</button>
            <div>
                <img
                    height="300"
                    width="200"
                    src={items[currentItem].imageUrl}
                    alt={items[currentItem].title}
                />
                <h2>{items[currentItem].title}</h2>
                <h2>{items[currentItem].description}</h2>
            </div>
            <button onClick={nextItem} style={{ background: "yellow" }}>Next</button>
        </div>
    )
}

export default Carosal;