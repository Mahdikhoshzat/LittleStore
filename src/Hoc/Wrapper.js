import React from "react";

export default function Wrapper(WrappedComponent,ClassName){
    return(props) => (
        <div className={ClassName}>
            <WrappedComponent {...props} />
        </div>
    )
}