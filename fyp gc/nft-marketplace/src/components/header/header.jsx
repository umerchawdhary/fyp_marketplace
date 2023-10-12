import { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import Api from "../../api/api";
import logo from "../../assets/logo.png";
import Search from "./components/search";

function Header() {
  const [allNfts, setAllNFTs] = useState([]);
  //u................................................................

  const { ethereum } = window;

  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState("0x000");

  const handleConnectWallet = async (e) => {
    e.preventDefault();
    try {
      await ethereum.request({
        method: "wallet_requestPermissions",
        params: [
          {
            eth_accounts: {},
          },
        ],
      });
      let accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAddress(accounts[0]);
      setConnected(true);
    } catch (e) {}
  };

  const getAllNFT = useCallback(async (isSubscribe) => {
    const res = await Api.getAllNFT();
    if (isSubscribe) {
      if (res.status === 200) {
        setAllNFTs(res.data.data);
      }
    }
  }, []);

  useEffect(() => {
    let isSubscribe = true;
    getAllNFT(isSubscribe);
    return () => (isSubscribe = false);
  }, []);

  return (
    <header className="transparent header-light smaller scroll-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div className="de-flex-col">
                  {/* <!-- logo begin --> */}
                  <div id="logo">
                    <Link to="/">
                      <img
                        src={logo}
                        style={{ width: "35px" }}
                        lazyloading="true"
                        alt="logo"
                        decoding="async"
                        className="img-fluid lazyload logo-2"
                      />
                    </Link>
                  </div>
                  {/* <!-- logo close --> */}
                </div>
                <Search allNfts={allNfts} />
              </div>
              <div className="de-flex-col header-col-mid">
                {/* <!-- mainmenu begin --> */}
                <ul id="mainmenu">
                  <li>
                    <Link to="/">
                      Explore<span></span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/create">
                      Create<span></span>
                    </Link>
                  </li>
                </ul>
                {/* umeeeeeeeeeerrrrrrrrrrrr */}
                <div className="menu_side_area">
                  {/* <div to="/wallet" className="btn-main btn-wallet"> */}
                  <div
                    onClick={handleConnectWallet}
                    className="btn-main btn-wallet"
                  >
                    {/* <i className="icon_wallet_alt"></i> */}
                    {connected ? (
                      <span>{address}</span>
                    ) : (
                      <span>Connect Wallet</span>
                    )}
                  </div>
                  <span id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
