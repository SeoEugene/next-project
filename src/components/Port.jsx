import React, { useEffect, useRef } from 'react'
import { portText } from '../constants'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';


const Port = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;

        let scrollTween = gsap.to(sections, {
            xPercent: -120 * (sections.length - 3),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 56px",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            }
        });
        return () => {
            scrollTween.kill();
        }
    }, [])

    return (
        <section id="port" ref={horizontalRef}>
            <div className="port__inner">
                <div className="port__title">
                    protfolio <em>작업물</em>
                </div>
                <div className="port__wrap">
                    {portText.map((text, key) => (
                        <div className={`port__item p${key + 1}`}
                            key={key}
                            ref={(el) => (sectionRef.current[key] = el)}
                        >
                            <span className="num">{text.num}.</span>
                            <a href="/">
                                <Image src={text.img} alt={`포트폴리오0${key + 1}`} width={420} height={262} />
                            </a>
                            <h3 className="title">{text.title}</h3>
                            <p className="desc">
                                {text.desc}
                            </p>
                            <div>
                                <div className="code">code: {text.code}</div>
                                <div className="view">view: {text.view}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Port