import tip from "../assets/images/tip.png";

const Content = () => {
    return ( 
        <> 
        <div className="contenttwo">
            <div className="wrapper">
                    <div className="content-container">
                        <div className="content-container-content">
                            <div className="content-cont-dog">
                                <div className="content-img-dog-mem">
                                    <img src={tip} alt="" />
                                </div>
                                <div className="content-dog">
                                    <p className="content content-text"> 
                                    <span className="content-color">Wen airdrop and token launch?</span> <br /><br />
                                        There are two ways to participate in the Presale: <br />
                                        1. Buy $BEEF through the website to receive tokens instantly. <br /> 
                                        2. Send $SOL to the presale address. <br />
                                        $BEEF tokens will be airdropped to you upon trading launch.
                                    </p>  
                                </div>
                            </div>
                        </div>
                 </div>
            </div>
        </div>
        </>
    );
}
 
export default Content;