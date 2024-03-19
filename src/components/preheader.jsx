import leo from "../assets/images/leo.png";

const Preheader = () => {
    return ( 
        <>
            <div className="tokenomics">
                <div className="wrapper">
                <div className="wallet-conteiner hidden-mobile">
                    <div className="wallet">
                            <div>
                                <h2>BUY $BEEF (PRESALE)</h2>
                                <div className="wallet-transaction">
                                    <h3 className="you-pay">YOU PAY</h3>
                                    <input type="text" />
                                    <h3>$SOL</h3>
                                </div>
                                <div className="wallet-transaction">
                                    <div className="wallet-transaction">
                                        <h3>YOU GET</h3>
                                        <input type="text" />
                                        <h3>$BEEF</h3>
                                    </div>
                                </div>
                            </div>
                        <div className="button-conteiner">
                            <button className="button" >CONNECT WALLET</button>
                        </div>
                    </div>
                </div>
                <div className="content-cont-dog">
                            <div className="content-dog">
                                <p className="content"> 
                                    It's well known that Beeple has a fondness for Cocks.<br />
                                    The abundance of Cocks in his X account inspired us <br />
                                    to launch the BEEF Movement.  <br />
                                    Let's share a laugh with Beeple <br />
                                    and spread positivity in the web3 Space  
                                </p>  
                            </div>
                            <div className="content-img-dog">
                                <img src={leo} alt="" />
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}
 
export default Preheader;