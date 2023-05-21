import React from 'react'

function RouteDoc({routeData}) {
    if (routeData?.name){
        return (
            <div>
                <h2>{routeData.name}</h2>
                <p><b>{routeData.route}</b></p>
                <p><b>{routeData.method}</b></p>
                {routeData?.input ? <><p>Input:</p><pre>{JSON.stringify(routeData.input, null, "    ")}</pre></> : <></>}
                <p>Output:</p><pre>{JSON.stringify(routeData.output, null, "    ")}</pre>
            </div>
        )}
    else{
        return(<div></div>)}
}

export default RouteDoc