import React from 'react'

const TvBanner = () => {
    return (
        <>
            <div className='tvbanner mt-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12 video-content-wrapper">
                            <h1>Enjoy on your TV</h1>
                            <h5>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h5>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className='video-wrapper'>
                                <img src="./tv.png" alt="" />
                                <video src="./video.m4v" controls autoPlay loop width={470} height={391}></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TvBanner