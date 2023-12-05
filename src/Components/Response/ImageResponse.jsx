import React from 'react'

const ImageResponse = ({ url, desc }) => {
    return (
        <div>
            image
            <p>{desc}</p>
            <img src={url} alt="" />
        </div>
    )
}

export default ImageResponse
