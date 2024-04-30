import {
  FaFacebook,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 lg:p-20 back-main text-white justify-evenly">
        <nav className="mx-auto lg:mx-0">
          <h6 className="text-3xl font-bold text-secondary pb-6 uppercase">
            Company Info
          </h6>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">
            About Craftshells
          </a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">
            Social Responsibility
          </a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Affiliate</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">
            Craft Blogger
          </a>
        </nav>
        <nav className="mx-auto lg:mx-0">
          <h6 className="text-3xl font-bold text-secondary pb-6 uppercase">
            Help & Support
          </h6>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">
            Shipping Info
          </a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Returns</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">
            How to Order
          </a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">
            How to Track
          </a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Size Chart</a>
        </nav>
        <nav className="mx-auto lg:mx-0">
          <h6 className="text-3xl font-bold text-secondary pb-6 uppercase">
            customer care
          </h6>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Contact Us</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Payment</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Bonus Point</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Notices</a>
        </nav>
        <nav className="mx-auto lg:mx-0">
          <h6 className="text-3xl font-bold pb-6 uppercase text-secondary">
            Socials
          </h6>
          <div className="flex md:flex-wrap lg:flex-row gap-4">
            <a className="link link-hover text-3xl mx-auto md:mx-0 lg:mx-0">
              <FaFacebook />
            </a>
            <a className="link link-hover text-3xl mx-auto md:mx-0 lg:mx-0">
              <FaTwitter />
            </a>
            <a className="link link-hover text-3xl mx-auto md:mx-0 lg:mx-0">
              <FaInstagram />
            </a>
            <a className="link link-hover text-3xl mx-auto md:mx-0 lg:mx-0">
              <FaTiktok />
            </a>
            <a className="link link-hover text-3xl mx-auto md:mx-0 lg:mx-0">
              <FaSnapchat />
            </a>
          </div>
        </nav>
      </footer>
      <div className="text-center back-main text-white pb-12">
        <span>©2024 Craftshells All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
