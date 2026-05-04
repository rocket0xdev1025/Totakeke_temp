import React, { useState } from "react";
import { FaCopy, FaRegCheckCircle } from "react-icons/fa";

const HowToBuySection = ({ id }) => {
  const [isCopied, setIsCopied] = useState(false);
  const contractAddress = "0xcomingsoon";
  const contractAddressShort =
    contractAddress.slice(0, 6) + "..." + contractAddress.slice(-4);

  const copyContractAddress = () => {
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(contractAddress)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch((error) => {
          console.error("Error copying contract address to clipboard:", error);
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = contractAddress;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (error) {
        console.error("Error copying contract address to clipboard:", error);
      } finally {
        document.body.removeChild(textArea);
      }
    }
  };

  return (
    <section
      id={id}
      className="how-to-buy-section section about-section tokenomics-section page-section"
      style={{
        marginTop: "40px",
      }}
    >
      <div className="holder">
        <div className="center">
          <h3>
            How to buy <b>Apple</b>
          </h3>
          <div className="tokenomics-details animal-farm">
            <ul>
              <li>
                <p>
                  Download and install a ETH-compatible wallet like{" "}
                  <a href="https://metamask.io/" target="_blank">
                    MetaMask
                  </a>{" "}
                  or{" "}
                  <a href="https://trustwallet.com/" target="_blank">
                    Trust Wallet
                  </a>
                  .
                </p>
              </li>
              <li>
                <p>
                  Buy ETH from a reputable exchange and transfer it to your
                  wallet.
                </p>
              </li>
              <li>
                <p>Visit Uniswap and connect your wallet</p>
              </li>
              <li>
                <p>
                  Copy the{" "}
                  <a
                    href={`data:text/plain,${contractAddress}`}
                    download="ca.txt"
                  >
                    Apple contract address
                  </a>{" "}
                  and swap your ETH for Apple tokens.
                </p>
              </li>
            </ul>
            <button
              className="button"
              disabled={isCopied}
              onClick={copyContractAddress}
            >
              CA: {contractAddressShort}{" "}
              {isCopied ? (
                <FaRegCheckCircle />
              ) : (
                <FaCopy
                  style={{
                    marginLeft: "7px",
                  }}
                />
              )}{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuySection;
