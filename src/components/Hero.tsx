import logo from "../assets/logo.svg";

const Hero = () => {
  return (
    <header className="w-full flex flex-col justify-center items-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="saaransh-logo" className="w-28 object-contain" />
        <button
          className="black_btn"
          onClick={() => window.open("https://www.github.com/theviveksahu")}
        >
          Github
        </button>
      </nav>
    </header>
  );
};

export default Hero;
