import { Icon, Logo } from "@/components";
import classNames from "classnames";
import ReactCountryFlag from "react-country-flag";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const links = [
    {
      text: "Buy Crypto",
      to: "/buy-crypto",
      isNew: false,
    },
    {
      text: "Market",
      to: "/market",
      isNew: false,
    },
    {
      text: "NFT",
      to: "/nft",
      isNew: true,
    },
    {
      text: "Promotion",
      to: "/promotion",
      isNew: false,
    },
    {
      text: "About",
      to: "/about",
      isNew: false,
    },
    {
      text: "Blog",
      to: "/blog",
      isNew: false,
    },
  ];

  return (
    <header className="flex items-center justify-between px-5 py-5 bg-black lg:px-28">
      <div className="flex items-center gap-8">
        <Logo />
        <button>
          <Icon icon="solid-grid-2" className="w-6 h-6" />
        </button>
        <div className="flex gap-6">
          {links.map((e) => (
            <NavLink
              to={e.to}
              key={e.to}
              className={({ isActive }) =>
                classNames(
                  "hover:text-primary transition-colors",
                  {
                    "relative after:absolute after:-top-5 after:-right-9 after:text-white after:bg-orange after:content-['New'] after:px-[6px] after:rounded-md after:text-2xs mr-7 before:border-8 before:border-orange before:border-t-transparent before:border-r-transparent before:border-b-transparent before:absolute before:-top-2 before:-right-6":
                      e.isNew,
                  },
                  { "text-primary": isActive }
                )
              }
            >
              {e.text}
            </NavLink>
          ))}
        </div>
      </div>
      <button className="hidden px-5 py-4 lg:block bg-dark rounded-3xl">
        <ReactCountryFlag countryCode="GB" svg className="object-cover !w-6 !h-6 mr-3 rounded-full" />
        <span className="text-sm">English</span>
        <Icon icon="solid-angle-down-small" className="w-6 h-6 ml-2" />
      </button>
    </header>
  );
};
