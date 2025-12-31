import { FaLocationArrow } from 'react-icons/fa';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import MagicButton from './ui/MagicButton';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={20} />, href: 'https://github.com/kranthiyelaboina' },
    { icon: <FaLinkedinIn size={20} />, href: 'https://www.linkedin.com/in/kranthi-yelaboina-a95690295/' },
    { icon: <FaTwitter size={20} />, href: 'https://twitter.com/kranthiyelaboina' },
  ];

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background grid image */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          alt="grid"
          loading="lazy"
          className="w-full h-full opacity-50"
          src="/src/assets/Professional _ Radnaabazar Bulgan_files/footer-grid.svg"
          style={{ color: 'transparent' }}
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Let's <span className="text-accent">connect</span> and build something amazing together!
        </h1>
        <p className="text-white/60 md:mt-10 my-5 text-center">
          I'm eager to learn, collaborate, and contribute to exciting projects. Feel free to reach out!
        </p>
        <a href="mailto:kranthiyelaboinahere@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Kranthi Yelaboina
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black/40 rounded-lg border border-black/30 hover:border-accent/50 transition-all duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
