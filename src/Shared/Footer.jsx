const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 lg:p-20 bg-base-100 md:gap-12 text-base-content">
        <aside>
          <h2 className="text-4xl font-bold mx-auto md:mx-0 lg:mx-0">
            PortVilla
          </h2>
          <p className="max-w-96 text-[#C8C8C8] pt-8 text-center md:text-left lg:text-left">
            They key difference between ordinary and special. No matter the
            season, our spaces are as nuanced as the lifestyles they reflect, do
            not just dream it.
          </p>
        </aside>
        <nav className="mx-auto lg:mx-0">
          <h6 className="text-3xl font-bold text-black pb-6">COMPANY</h6>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">About</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Press</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Careers</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Contact</a>
        </nav>
        <nav className="mx-auto lg:mx-0">
          <h6 className="text-3xl font-bold text-black pb-6">VISIT US</h6>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Address</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Website</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">
            Privacy Policy
          </a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">
            Term & Condition
          </a>
        </nav>
        <nav className="mx-auto lg:mx-0">
          <h6 className="text-3xl font-bold text-black pb-6">CONNECT</h6>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Instagram</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Linkedin</a>
          <a className="link link-hover mx-auto md:mx-0 lg:mx-0">Twitter</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
