import sherk from "../assets/images/sherk.png";

const Tokenomics = () => {
    return ( 
        <>
            <div className="tokenomics">
                <div className="wrapper">
                    <div className="tokenomics-container color">
                        <div className="tokenomics-container-img">
                            <img src={sherk} alt="" />
                        </div>
                        <div className="tokenomics-container-content">
                            <h2>BEEFNOMICS</h2>
                            <ul className="tokenomics-content">
                                <li><p>1 $BEEF = 0.00001 $SOL</p></li>
                                <li><p>Total supply will be available after completion of the presale. All unsold $BEEF will be burned</p></li>
                                <li><p>50% $BEEF goes to presale participants</p></li>
                                <li><p>50% $BEEF and raised $SOL goes to the LP</p></li>
                                <li><p>LP will be burned</p></li>
                                <li><p>No Taxes</p></li>
                                <li><p>Contract will be Revoked/Unmintable/Immutable</p></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Tokenomics;
