import React from 'react'

const Intro = () => {
    return (
        <section id="intro">
            <div className="intro__inner">
                <div className="intro__title">Web Portfolio using React</div>

                <div className="intro__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <div className="intro__text">
                    <div className="img"></div>
                    <div className="text">
                        <p>Welcome to</p>
                        <p>my first web site,</p>
                        <p>enjoy</p>
                        <p>unique webdesign.</p>
                    </div>
                </div>
                <div className="intro__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>

            </div>
        </section>
    )
}

export default Intro