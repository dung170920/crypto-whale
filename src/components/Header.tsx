import { Icon, Logo } from "@/components";
import classNames from "classnames";
import { Link } from "react-router-dom";

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
    <header className="flex items-center justify-between px-5 py-5 bg-black md:px-28">
      <div className="flex items-center gap-8">
        <Logo />
        <button>
          <Icon icon="solid-grid-2" className="w-6 h-6" />
        </button>
        <div className="flex gap-6">
          {links.map((e) => (
            <Link
              to={e.to}
              key={e.to}
              className={classNames("hover:text-primary transition-colors", {
                "relative after:absolute after:-top-5 after:-right-9 after:text-white after:bg-orange after:content-['New'] after:px-[6px] after:py-[2px] after:rounded-md after:text-[10px] mr-6":
                  e.isNew,
              })}
            >
              {e.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="">Language</div>
    </header>
  );
};
