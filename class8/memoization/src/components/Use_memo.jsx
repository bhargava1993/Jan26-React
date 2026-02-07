import { useMemo, useState } from "react";

const generateLargeArray = () => {
    const largeArray = [];

    console.time("generateLargeArray");

    for (let i = 0; i < 100000; i++) {
        largeArray.push(i);
    }

    console.timeEnd("generateLargeArray");
    return largeArray;
}

const sumArray = (array) => {
    console.time("sumArray");
    let result = array.reduce((acc, current) => acc + current, 0);
    console.timeEnd("sumArray");
    return result;

}

const Use_memo = () => {

    const [count, setCount] = useState(0);
    const largeArray = useMemo(() => generateLargeArray(), []);
    const sum = useMemo(() => sumArray(largeArray), []);

    // const largeArray = generateLargeArray();
    // const sum = sumArray(largeArray);

    return (
        <>
            <h1>Use memo Example</h1>
            <h1>Sum: {sum}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>Count: {count}</p>
        </>
    );
}

export default Use_memo;