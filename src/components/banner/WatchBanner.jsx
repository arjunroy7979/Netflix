import React from 'react'

const WatchBanner = () => {
    return (
        <div className='watchBanner mt-2'>
            <div className="container text-white">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1>Watch everywhere</h1>
                        <h5>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h5>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className='watch-video'>
                            <img src="./desktop.png" alt="" />
                            <video src="./v1.m4v" controls autoPlay loop width={400} height={400}></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WatchBanner