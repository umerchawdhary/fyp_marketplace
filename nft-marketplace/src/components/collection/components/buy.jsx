import { useState } from "react";
import Api from "../../../api/api";
import { Notifications } from "../../../helper/notifications";
import { ethers } from "ethers";
import fypAbi from "./FYP.json";

function BuyModel({ singleNft, setShowBuyModel, price }) {
  const [quantity, setQuantity] = useState(0);
  const buyNFTHandle = async (e) => {
    console.log(singleNft);
    e.preventDefault();
    if (singleNft.type === "multi") {
      if (quantity > singleNft.availableCopies) {
        Notifications(
          "warning",
          `Maximum Limit is ${singleNft.availableCopies}`
        );
      } else if (quantity <= 0) {
        Notifications("warning", `Minimum Limit is 1`);
      } else {
        const res = await Api.buyFixedNFT(singleNft._id, { quantity });
        if (res.status === 200) {
          setQuantity(0);
          setShowBuyModel(false);
        }
      }
    } else {
      //u........................................................

      try {
        const { ethereum } = window;
        // let condractAddress = "0xAAc8936634b5b53A219f34Db6fE96902846417A3";
        // mumbai
        let condractAddress = "0xf5cf2D5C647Ea76B53fE4CC302Ee67a948f2b114";

        let buyer = singleNft.creator._id;
        let nftId = singleNft._id;

        const walletProvder = new ethers.providers.Web3Provider(ethereum);

        console.log(walletProvder);

        const singer = walletProvder.getSigner();
        console.log(singer);
        const sendTx = new ethers.Contract(condractAddress, fypAbi.abi, singer);
        console.log("I am inside");

        console.log(sendTx);

        const dataResult = await sendTx.buyNft(
          String(singleNft.creator._id),
          String(price),
          {
            gasLimit: 5000000,
          }
        );

        const res = await Api.buyFixedNFT(singleNft._id, { quantity });

        // if (res.status === 200) {
        //   setQuantity(0);
        //   setShowBuyModel(false);
        // }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div
      className="modal"
      style={{
        background: "#00000036",
        display: "block",
        paddingRight: "17px",
      }}
    >
      <div className="modal-dialog modal-dialog-centered de-modal">
        <div className="modal-content">
          <button
            type="button"
            className="btn-close"
            onClick={() => setShowBuyModel(false)}
          ></button>
          <div className="modal-body">
            <form onSubmit={buyNFTHandle} className="p-3 form-border">
              <h3>Checkout</h3>
              You are about to purchase a <b>{singleNft?.title}</b> from{" "}
              <b>{singleNft?.creator.fullName}</b>
              {singleNft?.type === "multi" ? (
                <>
                  <div className="spacer-single"></div>
                  <h6>
                    Enter quantity.{" "}
                    <span className="id-color-2">
                      {singleNft?.availableCopies} available
                    </span>
                  </h6>
                  <input
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                    maxLength={singleNft?.availableCopies}
                    required
                    className="form-control"
                  />
                </>
              ) : (
                ""
              )}
              <div className="spacer-single"></div>
              {/* <div className="de-flex">
                <div>Your balance</div>
                <div>
                  <b>10.67856 ETH</b>
                </div>
              </div> */}
              {/* <div className="de-flex">
                <div>Service fee 2.5%</div>
                <div>
                  <b>0.00325 ETH</b>
                </div>
              </div> */}
              <div className="de-flex">
                <div>You will pay</div>
                <div>
                  <b>{price}</b>
                </div>
              </div>
              <div className="spacer-single"></div>
              <button type="submit" className="btn-main btn-fullwidth">
                Buy
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyModel;
