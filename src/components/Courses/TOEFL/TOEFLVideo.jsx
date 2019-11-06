import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

const TOEFLVideo = ({data, props, showSidebar}) => {
    console.log(data)

    const [idx, setIdx] = useState(null)

    useEffect(() => {
        console.log(props.match.params.id)
        if (props.match.params.id == 'introduction') setIdx(0)
        else setIdx(props.match.params.id)
    }, [props.match.params.id])

    console.log(props)
    
    if (idx != null) {
    return (
        <div>
            <div id ="videobar"> 
                <div className="containerr">
                    <ReactPlayer url={data[idx].link} width={showSidebar? '1100px': "1400px" } height={showSidebar? "550px" : "715px"} playing controls/>
                </div>
              </div>
              <div id="deskripsi">
                <div className="container">
                  <div className="deskripsii">
                    <p>{data[idx].description}</p>
                  </div>
                </div>
              </div>
        </div>
    )
    } else {
        return <h1>Loading</h1>
    }
}

export default TOEFLVideo
