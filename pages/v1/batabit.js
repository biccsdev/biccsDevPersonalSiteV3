import Image from 'next/image'
import styles from '../../styles/v1/Home.module.css'

import insta from '../../public/v1/instagramLogo.svg';
import twitter from '../../public/v1/twitterLogo.svg';
import github from '../../public/v1/githubLogo.svg';
import coin from '../../public/v1/nftCoin.png';

export default function Batabit() {

    return (
        <>

            <div className={styles.main}>
                <body>
                    <header>
                        <img src="../batabit/assets/icons/img/logo.svg" alt="logo batatabit" />
                        <div class="header--title-container">
                            <h1>The next revolution in crypto exchange</h1>
                            <p>
                                Batatabit helps you browse between different prices and tendencies
                            </p>
                            <a href="#plans" class="header--button">Check our plans<span></span></a>
                        </div>
                    </header>
                    <main>
                        <section class="main-exchange-container">
                            <div class="backgroundImg"></div>
                            <div class="main-exchange-container--title">
                                <h2>We show you every exchange rate.</h2>
                                <p>
                                    Bringing you information in real time about the most important dexes and crypto tokens in the world.
                                </p>
                            </div>
                            <section class="main-tables-container">
                                <div class="carousel-table__item">
                                    <div class="main-table-decorator--container">
                                        <h3>Try it today! FREE</h3>
                                    </div>
                                </div>
                                <div class="carousel-table__item">
                                    <div class="main-currency-table">
                                        <p class="currency-table--title">Tokens</p>
                                        <div class="currency-table--container">
                                            <table>
                                                <tr>
                                                    <td class="table__top-left">Bitcoin</td>
                                                    <td class="table__top-right table__right">
                                                        $53,594.63<span class="down"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Ethereum</td>
                                                    <td class="table__right">
                                                        $4,197.14<span class="up"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Solana</td>
                                                    <td class="table__right">
                                                        $210.60<span class="up"></span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="table__bottom-left">Cardano</td>
                                                    <td class="table__bottom-right table__right">
                                                        $1.55<span class="down"></span>
                                                    </td>
                                                </tr>
                                            </table>
                                            <div class="currency-table--update">
                                                <p><b>Updated on:</b> 2 Dec 17:13</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-table__item">
                                    <div class="main-comission-table">
                                        <p class="comission-table--title">Comissions</p>
                                        <div class="comission-table--container">
                                            <table>
                                                <tr>
                                                    <td class="table__top-left">Bitrade</td>
                                                    <td class="table__top-right table__right">$12.96</td>
                                                </tr>
                                                <tr>
                                                    <td>Bitpreco</td>
                                                    <td class="table__right">$13.07</td>
                                                </tr>
                                                <tr>
                                                    <td>Novadax</td>
                                                    <td class="table__right">$13.15</td>
                                                </tr>
                                                <tr>
                                                    <td class="table__bottom-left">Coinext</td>
                                                    <td class="table__botom-right table__right">$14.96</td>
                                                </tr>
                                            </table>
                                        </div>
                                        <div class="comission-table--update">
                                            <p><b>Updated on:</b> 2 Dec 17:15</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section class="main-product-detail">
                            <span class="product-detail--batata-logo"></span>
                            <div class="product-detail--title">
                                <h2>We made a product like no other.</h2>
                                <p>Trustworthy & crafted for your daily use.</p>
                            </div>
                            <section class="product-cards--content">
                                <article class="product-detail--card">
                                    <span class="clock"></span>
                                    <p class="product--card-title">Real time</p>
                                    <p class="product--card-body">
                                        Our API gathers information every minute regarding most influential behavior rates
                                    </p>
                                </article>
                            </section>
                            <section class="product-cards--content">
                                <article class="product-detail--card">
                                    <span class="eye"></span>
                                    <p class="product--card-title">No hidden fees</p>
                                    <p class="product--card-body">
                                        At every time, we show you the real price of what you are buying
                                    </p>
                                </article>
                            </section>
                            <section class="product-cards--content">
                                <article class="product-detail--card">
                                    <span class="dollar"></span>
                                    <p class="product--card-title">Compare tokens</p>
                                    <p class="product--card-body">
                                        No more rumors, with Batatabit, you will know the real value on the current market
                                    </p>
                                </article>
                            </section>
                            <section class="product-cards--content">
                                <article class="product-detail--card">
                                    <span class="right-arrow"></span>
                                    <p class="product--card-title">Trustful information</p>
                                    <p class="product--card-body">
                                        Our sources are 100% verified and we review their work on a daily
                                    </p>
                                </article>
                            </section>
                        </section>
                        <section class="bitcoin-img-container">
                            <h2>Try it today.</h2>
                        </section>
                        <section id="plans" class="main-plans-container">
                            <div class="plans--title">
                                <h2>Choose the best plan for you.</h2>
                                <p>Any plan gives you full access to our platform.</p>
                            </div>
                            <section class="plans-container--slider">
                                <article class="carousel__item">
                                    <article class="plans-container--card">
                                        <p class="recommended">Recommended</p>
                                        <div class="plan-info-container">
                                            <h3 class="plan-card--title">Annual Plan</h3>
                                            <p class="plan-card--price"><span>$</span>69.95</p>
                                            <p class="plan-card--saving">* Save $19.99 from monthly plan</p>
                                            <button class="plan-card--ca">Choose this<span></span></button>
                                        </div>
                                    </article>
                                </article>
                                <article class="carousel__item">
                                    <article class="plans-container--card">
                                        <div class="plan-info-container">
                                            <h3 class="plan-card--title">Monthly Plan</h3>
                                            <p class="plan-card--price"><span>$</span>9.99</p>
                                            <p class="plan-card--saving">* Get started with your plan</p>
                                            <button class="plan-card--ca">Choose this<span></span></button>
                                        </div>
                                    </article>
                                </article>
                                <article class="carousel__item">
                                    <article class="plans-container--card">
                                        <div class="plan-info-container">
                                            <h3 class="plan-card--title">Forever Plan</h3>
                                            <p class="plan-card--price"><span>$</span>499</p>
                                            <p class="plan-card--saving">* Save thousands with this plan</p>
                                            <button class="plan-card--ca">Choose this<span></span></button>
                                        </div>
                                    </article>
                                </article>
                            </section>
                        </section>
                    </main>

                    <footer>
                        <section class="left">
                            <ul>
                                <li><a href="#">Linkedin</a></li>
                                <li><a href="#">Crunchbase</a></li>
                                <li><a href="#">Hackernews</a></li>
                            </ul>
                        </section>
                        <section class="right">
                            <img src="../batabit/assets/icons/img/logo-footer.svg" alt="Logo de batatabit 2020" />
                        </section>
                    </footer>
                </body>
            </div>
        </>
    )
}
