import React from 'react'

export default function Alert(props) {
    return (
     <div style={{height:'60px'}}>

        {props.alert && <div className="alert alert-success" role="alert">
            <h8>{props.alert.type}:</h8> <h9>{props.alert.msg}</h9>
        </div>}
       
     </div>
    )
}
