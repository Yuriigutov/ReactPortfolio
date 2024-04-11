import "./style.css";

import viber from "./../../img/icons/viber.svg";
import instagram from "./../../img/icons/instagram.svg";
import telegram from "./../../img/icons/telegram.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://msng.link/o?380990917398=vi" target="_blank">
                <img src={viber} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/gutov_skyiy?igsh=bDBwZWxkdjZ5YmRt&utm_source=qr"
                target="_blank"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://t.me/yura_gutovskyi" target="_blank">
                <img src={telegram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="#!">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/yurii-gutovskyi-2b0671283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 frontend-dev Yurii</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
