import React from 'react'
const Banner = () => {
    return (
        <>
            <div className='banner-img'>
                <div className='banner-back '>
                    <h1 className='text-light'>Unlimited movies, TV shows and more</h1>
                    <h5 className='text-light'>Watch anywhere. Cancel anytime.</h5>
                    <p className='text-light'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='d-flex gap-2 input-box'>
                        <input type="emial" placeholder='Email address' className='form-control w-50' />
                        <button className='btn btn-danger'>Get Started
                            <i class="fa fa-angle-right ms-3" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner