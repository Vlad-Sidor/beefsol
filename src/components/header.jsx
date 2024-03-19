import beef from "../assets/images/beef.png";
import beefimg from "../assets/images/beefimg.png";
import telegram from "../assets/images/telegram.svg";
import x from "../assets/images/x.svg";


const Header = () => {

    return ( 
        <>
            <header className="header">
                <div className="wrapper">
                    <div className="header-container">
                        <div className="header-container-content">
                            <div className="dogwifcash">
                                <h1>$BEEF is literally Beeple Wif Coq</h1>
                                <div className="social-conteiner">
                                    <div className="social">
                                        <ul>
                                            <li><a href="https://t.me/beefsolana"><img src={telegram} alt="" /></a></li>
                                            <li className="social-last-item"><a href="https://twitter.com/beefonsol"><img src={x} alt="" /></a></li>
                                        </ul>
                                        <div>
                                            <p>Powered by Solana</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dog">
                                <div className='twenty-conteiner'>
                                    <img className='dog-left' src={beef} alt="" />
                                    <img className='dog-right' src={beefimg} />
                                </div>
                            </div>
                            <div className="wallet-conteiner hidden">
                                <div className="wallet">
                                    <h2>BUY $BEEF (PRESALE)</h2>
                                    <div>
                                        <div className="wallet-transaction">
                                            <h3 className="you-pay">YOU PAY</h3>
                                            <input type="text" />
                                            <h3>$SOL</h3>
                                        </div>
                                        <div className="wallet-transaction">
                                            <h3>YOU GET</h3>
                                            <input type="text" />
                                            <h3>$BEEF</h3>
                                        </div>
                                    </div>
                                    <div className="button-conteiner">
                                        <button className="button" >CONNECT WALLET</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
 
export default Header;