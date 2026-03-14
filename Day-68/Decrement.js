import { useState } from "react";
import Decrement from "./Decrement"

export default function Decrement({counts, setCounts}){


    return (
        <>
        <button onClick={()=>setCounts(counts-1)}>Decrement</button>
        </>
    )
}