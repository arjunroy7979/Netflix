import React from 'react'

const AskedQuestion = () => {
    return (
        <div className='AskedQuestion mt-2'>
            <div className="container text-white">
                <div className="row">
                    <div className="col-12 text-center mt-5">
                        <h1>Frequently Asked Questions</h1>
                    </div>
                    <div className="col-12">
                        <div className='accordian-wrapper'>
                            <ul className='accordian'>
                                <li>
                                    <input type='radio' name='accordian' id='first' />
                                    <label htmlFor='first'>What is Netflix?</label>
                                    <div className='content'>
                                        <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.</p>
                                    </div>
                                </li>
                                <li>
                                    <input type='radio' name='accordian' id='second' />
                                    <label htmlFor='second'>How much does Netflix cost?</label>
                                    <div className='content'>
                                        <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.</p>
                                    </div>
                                </li>
                                <li>
                                    <input type='radio' name='accordian' id='third' />
                                    <label htmlFor='third'>Where can I watch?</label>
                                    <div className='content'>
                                        <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                                    </div>
                                </li>
                                <li>
                                    <input type='radio' name='accordian' id='four' />
                                    <label htmlFor='four'>How do I cancel?</label>
                                    <div className='content'>
                                        <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                                    </div>
                                </li>
                                <li>
                                    <input type='radio' name='accordian' id='five' />
                                    <label htmlFor='five'>What can I watch on Netflix?</label>
                                    <div className='content'>
                                        <p>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</p>
                                    </div>
                                </li>
                                <li>
                                    <input type='radio' name='accordian' id='six' />
                                    <label htmlFor='six'>Is Netflix good for kids?</label>
                                    <div className='content'>
                                        <p>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.</p>
                                        <p>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 mt-4">
                            <h4 className='text-center'>Ready to watch? Enter your email to create or restart your membership.</h4>
                            <div className='asked-input-wrapper gap-2 mt-3 mb-5'>
                                <input type="text" placeholder='Email address' className='form-control' />
                                <button className='btn btn-danger'>Get Started
                                    <i class="fa fa-angle-right ms-3" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AskedQuestion