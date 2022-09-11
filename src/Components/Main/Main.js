import React, {useEffect,useRef,useContext} from "react"
import AuthContext from "../../Context/AuthContext"

export default function Main(props){
    const btnRef = useRef(null)
    const myContext = useContext(AuthContext)
    

    useEffect(() => {
        console.log("Main.js UseEffect")
        btnRef.current.click()
        return () => {
            console.log("main.js clean up main")
        }
    },[])
    const btn={
        backgroundColor: "purple",
        font: "inherit",
        color: "white",
        margin: "0.6rem auto",
        padding: "0.6rem",
        border: "none",
        outline: "none",
        borderRadius: "3px"
    }

    const btn1={
        backgroundColor: "blue",
        font: "inherit",
        color: "white",
        margin: "auto",
        padding: "0.6rem 4rem",
        border: "none",
        outline: "none",
        borderRadius: "3px"
    }



    return(
         <div>
            <h1>My Stroe</h1>
            <button ref={btnRef} style={btn} onClick={props.myClick}>Show/Hide Products</button>
            <br></br>
            
            {<button style={btn1} onClick={myContext.login}>Login</button>}
            
         </div>
    )
}