import { useParams } from "react-router-dom"
import { useState } from 'react'

function Product() {
    //Достаем параметр id из URL
    const { id } = useParams();
    const [add, setAdd] = useState(0)

    return (
        <div>
            <h2>Товар с ID: {id}</h2>
            <button onClick={() => setAdd(add + 1)}>+</button>
            <h2>{add}</h2>
        </div>
    );
}

export default Product;