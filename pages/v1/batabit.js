import Image from 'next/image'
import styles from '../../styles/v1/Batabit.module.css'


import logo from '../../public/v1/batatabit/img/logo.svg'
import logoFooter from '../../public/v1/batatabit/img/logo-footer.svg'

export default function Batabit() {

    return (
        <>
            <div className={styles.main}>
                <div className={styles.body}>
                    <div className={styles.header}>
                        <Image className={styles.img} src={logo} alt="logo batatabit" />
                        <div className={styles.headerTitleContainer}>
                            <h1>The next revolution in crypto exchange</h1>
                            <p>
                                Batatabit helps you browse between different prices and tendencies
                            </p>
                            <a href="#plans" className={styles.headerButton}>Check our plans<span></span></a>
                        </div>
                    </div>
                    <div className={styles.mainContainer}>
                        <section className={styles.mainExchangeContainer}>
                            <div className={styles.backgroundImg}></div>
                            <div className={styles.mainExchangeContainerTitle}>
                                <h2>We show you every exchange rate.</h2>
                                <p>
                                    Bringing you information in real time about the most important dexes and crypto tokens in the world.
                                </p>
                            </div>
                            <section className={styles.mainTablesContainer}>
                                <div className={styles.carouselTableItem}>
                                    <div className={styles.mainTableDecoratorContainer}>
                                        <h3>Try it today! FREE</h3>
                                    </div>
                                </div>
                                <div className={styles.carouselTableItem}>
                                    <div className={styles.mainCurrencyTable}>
                                        <p className={styles.currencyTableTitle}>Tokens</p>
                                        <div className={styles.currencyTableContainer}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className={styles.table__topLeft}>Bitcoin</td>
                                                        <td className={styles.tableTopRight}>
                                                            $53,594.63<span className={styles.down}></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Ethereum</td>
                                                        <td className={styles.tableRight}>
                                                            $4,197.14<span class="up"></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Solana</td>
                                                        <td className={styles.tableRight}>
                                                            $210.60<span className={styles.up}></span>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className={styles.tableBottomLeft}>Cardano</td>
                                                        <td className={styles.tableBottomRight}>
                                                            $1.55<span className={styles.down}></span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div className={styles.currencyTableUpdate}>
                                                <p><b>Updated on:</b> 2 Dec 17:13</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.carouselTableItem}>
                                    <div className={styles.mainComissionTable}>
                                        <p className={styles.comissionTableTitle}>Comissions</p>
                                        <div className={styles.comissionTableContainer}>
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className={styles.tableTopReft}>Bitrade</td>
                                                        <td className={styles.tableTopRight}>$12.96</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Bitpreco</td>
                                                        <td className={styles.tableRight}>$13.07</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Novadax</td>
                                                        <td className={styles.tableRight}>$13.15</td>
                                                    </tr>
                                                    <tr>
                                                        <td className={styles.tableBottomLeft}>Coinext</td>
                                                        <td className={styles.tableBotomRight}>$14.96</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className={styles.comissionTableUpdate}>
                                            <p><b>Updated on:</b> 2 Dec 17:15</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </section>
                        <section className={styles.mainProductDetail}>
                            <span className={styles.productDetailBatataLogo}></span>
                            <div className={styles.productDetailTitle}>
                                <h2>We made a product like no other.</h2>
                                <p>Trustworthy & crafted for your daily use.</p>
                            </div>
                            <section className={styles.productCardsContent}>
                                <article className={styles.productDetailCard}>
                                    <span className={styles.clock}></span>
                                    <p className={styles.productCardTitle}>Real time</p>
                                    <p className={styles.productCardBody}>
                                        Our API gathers information every minute regarding most influential behavior rates
                                    </p>
                                </article>
                            </section>
                            <section className={styles.productCardsContent}>
                                <article className={styles.productDetailCard}>
                                    <span className={styles.eye}></span>
                                    <p className={styles.productCardTitle}>No hidden fees</p>
                                    <p className={styles.productCardBody}>
                                        At every time, we show you the real price of what you are buying
                                    </p>
                                </article>
                            </section>
                            <section className={styles.productCardsContent}>
                                <article className={styles.productDetailCard}>
                                    <span className={styles.dollar}></span>
                                    <p className={styles.productCardTitle}>Compare tokens</p>
                                    <p className={styles.productCardBody}>
                                        No more rumors, with Batatabit, you will know the real value on the current market
                                    </p>
                                </article>
                            </section>
                            <section className={styles.productCardsContent}>
                                <article className={styles.productDetailCard}>
                                    <span className={styles.rightArrow}></span>
                                    <p className={styles.productCardTitle}>Trustful information</p>
                                    <p className={styles.productCardBody}>
                                        Our sources are 100% verified and we review their work on a daily
                                    </p>
                                </article>
                            </section>
                        </section>
                        <section className={styles.bitcoinImgContainer}>
                            <h2>Try it today.</h2>
                        </section>
                        <section id="plans" className={styles.mainPlansContainer}>
                            <div className={styles.plansTitle}>
                                <h2>Choose the best plan for you.</h2>
                                <p>Any plan gives you full access to our platform.</p>
                            </div>
                            <section className={styles.plansContainerSlider}>
                                <article className={styles.carouselItem}>
                                    <article className={styles.plansContainerCard}>
                                        <p className={styles.recommended}>Recommended</p>
                                        <div className={styles.planInfoContainer}>
                                            <h3 className={styles.planCardTitle}>Annual Plan</h3>
                                            <p className={styles.planCardPrice}><span>$</span>69.95</p>
                                            <p className={styles.planCardSaving}>* Save $19.99 from monthly plan</p>
                                            <button className={styles.planCardCa}>Choose this<span></span></button>
                                        </div>
                                    </article>
                                </article>
                                <article className={styles.carouselItem}>
                                    <article className={styles.plansContainerCard}>
                                        <div className={styles.planInfoContainer}>
                                            <h3 className={styles.planCardTitle}>Monthly Plan</h3>
                                            <p className={styles.planCardPrice}><span>$</span>9.99</p>
                                            <p className={styles.plan}>* Get started with your plan</p>
                                            <button className={styles.planCardCa}>Choose this<span></span></button>
                                        </div>
                                    </article>
                                </article>
                                <article className={styles.carouselItem}>
                                    <article className={styles.plansContainerCard}>
                                        <div className={styles.planInfoContainer}>
                                            <h3 className={styles.planCardTitle}>Forever Plan</h3>
                                            <p className={styles.planCardPrice}><span>$</span>499</p>
                                            <p className={styles.planCardSaving}>* Save thousands with this plan</p>
                                            <button className={styles.planCardCa}>Choose this<span></span></button>
                                        </div>
                                    </article>
                                </article>
                            </section>
                        </section>
                    </div>

                    <div className={styles.footer}>
                        <section className={styles.left}>
                            <ul>
                                <li><a href="#">Linkedin</a></li>
                                <li><a href="#">Crunchbase</a></li>
                                <li><a href="#">Hackernews</a></li>
                            </ul>
                        </section>
                        <section className={styles.right}>
                            <Image src={logoFooter} alt="Logo de batatabit 2020" />
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
