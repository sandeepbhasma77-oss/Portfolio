import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            socialImg.name === "insta" ? (
              <a
                key={index}
                className="icon"
                href="https://www.instagram.com/sandeep.bhasma/"
                target="_blank"
                rel="noreferrer"
                aria-label="Sandeep on Instagram"
              >
                <img src={socialImg.imgPath} alt="Instagram" />
              </a>
            ) : socialImg.name === "fb" ? (
              <a
                key={index}
                className="icon"
                href="https://www.facebook.com/sandeep.bhashma"
                target="_blank"
                rel="noreferrer"
                aria-label="Sandeep on Facebook"
              >
                <img src={socialImg.imgPath} alt="Facebook" />
              </a>
            ) : socialImg.name === "github" ? (
              <a
                key={index}
                className="icon"
                href="https://github.com/sandeepbhasma77-oss"
                target="_blank"
                rel="noreferrer"
                aria-label="Sandeep on GitHub"
              >
                <img src={socialImg.imgPath} alt="GitHub" />
              </a>
            ) : (
              <div key={index} className="icon">
                <img src={socialImg.imgPath} alt="social icon" />
              </div>
            )
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Sandeep Bhasma Tharu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
