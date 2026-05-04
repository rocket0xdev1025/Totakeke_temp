import React from "react";
import { FaFacebook, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiCoinmarketcap } from "react-icons/si";

// const tokenomicsDetails = {
//   totalSupply: '1,000,000,000,000 $SNOW',
//   distribution: [
//     { category: 'Presale', percentage: 40 },
//     { category: 'Liquidity', percentage: 30 },
//     { category: 'Team', percentage: 10 },
//     { category: 'Marketing', percentage: 10 },
//     { category: 'Development', percentage: 10 },
//   ],
//   taxStructure: {
//     buy: 5,
//     sell: 5,
//     transfer: 2,
//   },
// }

const AboutSection = ({ id }) => {
  return (
    <section id={id} className="about-section tokenomics-section page-section">
      <h2>Viral on TikTok</h2>
      <div className="tokenomics-details about-details">
        <p>
          The owner of Cheems Balltze confirmed something big — Cheems has a
          twin,
          <br /> and his name is <b>Apple</b>.
        </p>

        {/* <a
          href="https://www.facebook.com/BalltzeFat96/posts/my-twin-brother-/755443512609745/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.facebook.com/BalltzeFat96/posts/my-twin-brother-/755443512609745/
        </a> */}

        <p>
          This is crazy because $Cheems launched on BNB and went to $500M. Now
          imagine what happens when the same dog has a twin with a clean slate
          and a fresh run.
        </p>

        <p>
          If we take into account that CHEEMS, his recognized twin reached 500
          million, we still have a lot of Xs to go
        </p>

        <p>
          We’re here to restore the glory of BNB Chain, to carry forward my twin
          brother’s legacy and take it even further. This time, we’re not just
          matching history, we’re making it.
        </p>
        <div className="links-holder">
          {/* <p>
            <b>Social Links:</b>
          </p> */}
          <div className="links">
            <a
              href="https://t.me/applefox_eth"
              target="_blank"
              rel="noreferrer"
              className="link-btn"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://x.com/applefox_eth"
              target="_blank"
              rel="noreferrer"
              className="link-btn"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://dexscreener.com/ethereum/0xcomingsoon"
              target="_blank"
              rel="noreferrer"
              className="link-btn dex-screener"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="angle">
        <div className="i item"></div>
        <div className="ii item"></div>
      </div>

      {/* <div className="holder">
        <div className="left">
          <h3>
            Animal Farm's <span>7</span> Rules
          </h3>
          <div className="tokenomics-details animal-farm">
            <ul>
              <li>Whatever goes upon two legs is an enemy.</li>
              <li>Whatever goes upon four legs, or has wings, is a friend.</li>
              <li>No animal shall wear clothes.</li>
              <li>No animal shall sleep in a bed.</li>
              <li>No animal shall drink alcohol.</li>
              <li>No animal shall kill any other animal.</li>
              <li>All animals are equal.</li>
            </ul>
          </div>
        </div>

        <div className="right">
          <h3>
            Snowball <span>7</span> Commandments
          </h3>
          <div className="tokenomics-details snowball">
            <ul>
              <li>Centralized Exchanges are the Enemy.</li>
              <li>Decentralized Networks and DeFi are Friends.</li>
              <li>No Coin Shall Be Dressed in Hidden Fees.</li>
              <li>No Whale Shall Rest on the Community's Hard Work.</li>
              <li>No Coin Shall Be Corrupted by Greed.</li>
              <li>No Token Shall Harm Another in the Ecosystem.</li>
              <li>All Holders are Equal.</li>
            </ul>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutSection;
