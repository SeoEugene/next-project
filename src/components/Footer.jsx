import React from 'react'
import Image from 'next/image';

const Footer = () => {
    return (
        <footer id="footer" role="contentinfo">
            <div class="footer__inner">
                <h2 class="footer__text">
                    <div>Eugene's Web Portfolio</div>
                </h2>
                <div class="footer__info">
                    <div class="left">
                        <div>
                            <div class="title">
                                <a href="#">Sign Up</a>
                            </div>
                            <p class="desc">회원가입을 하시면 댓글과 게시판 기능을 이용할 수 있습니다.</p>
                        </div>
                        <div>
                            <div class="title">
                                <a href="#">GSAP</a>
                            </div>
                            <p class="desc">GSAP의 여러 효과를 볼 수 있습니다.</p>
                        </div>
                        <div>
                            <div class="title">
                                <a href="#">Animation</a>
                            </div>
                            <p class="desc">Animation 효과를 볼 수 있습니다.</p>
                        </div>

                    </div>
                    <div class="right">
                        <h3>social</h3>
                        <ul>
                            <li>
                                <a href="https://webstoryboy.co.kr">
                                    <Image src="/assets/img/mail.png" alt="메일" width={150} height={150} />
                                    <p>Mail</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/SeoEugene/vite-project">
                                    <Image src="/assets/img/github.png" alt="깃허브" width={80} height={80} />
                                    <p>GitHub</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://webstoryboy.co.kr">
                                    <Image src="/assets/img/blog.png" alt="블로그" width={80} height={80} />
                                    <p>Blog</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://webstoryboy.co.kr">
                                    <Image src="/assets/img/Instargram.png" alt="인스타그램" width={80} height={80} />
                                    <p>Instagram</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://webstoryboy.co.kr">
                                    <Image src="/assets/img/kakao.png" alt="카카오톡" width={80} height={80} />
                                    <p>Kakao</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__right">
                    &copy; 2023 Joy WEB<br />
                    이 사이트는 비트를 이용하여 제작하였습니다.
                </div>
            </div>
        </footer>
    )
}

export default Footer