import React from 'react'

function RouteDoc({routeData}) {
    if (routeData?.name){
        return (
            <div>
                <h2>{routeData.name}</h2>
                <p><b>{routeData.path}</b></p>
                <p><b>{routeData.method}</b></p>
                {routeData?.input ? <><p>Input:</p><pre>{JSON.stringify(routeData.input, null, "    ")}</pre></> : <></>}
                {routeData?.output ? <><p>Output:</p><pre>{JSON.stringify(routeData.output, null, "    ")}</pre></> : <></>}
                {routeData.fields ? <div><h3>Fields</h3>
                <p><i>(fields required unless otherwise specified)</i></p>
                <table>
                    <tr>
                        <th>Field name</th>
                        <th>Field type</th>
                        <th>Descripton</th>
                        <th>Required</th>
                    </tr>
                    {routeData.fields.map(field => (
                        <tr>
                            <td><code>{field.name}</code></td>
                            <td><code>{field.type}</code></td>
                            <td>{field.description}</td>
                            <td>{field.required.toString()}</td>
                        </tr>
                    ))}
                </table></div> : <></>}
            </div>
        )}
    else{
        return(<div></div>)}
}

export default RouteDoc