import { Icon, IconButton, Input, Logo, Popover } from "@/components";
import { languages, path } from "@/constants";
import classNames from "classnames";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  const isAuthenticated = true;

  const [language, setLanguage] = useState(languages[0]);

  return (
    <header className="flex items-center justify-between px-10 py-4 bg-gray-800 h-[90px]">
      <div className="flex items-center gap-8">
        {isAuthenticated ? (
          <>
            <button>
              <Icon icon="solid-grid-2" className="w-6 h-6" />
            </button>
            <Input
              name="search"
              placeholder="Search in dashboard..."
              icon="search"
              className="text-sm !mb-0"
              showDivider={false}
            />
          </>
        ) : (
          <Logo />
        )}
      </div>
      <div className="flex gap-3">
        <Popover
          header="Select Language"
          className="hidden lg:block"
          hasIcon
          trigger={
            <>
              <ReactCountryFlag countryCode={language.code} svg className="object-cover !w-6 !h-6 mr-3 rounded-full" />
              <span className="text-sm">{language.name}</span>
            </>
          }
          content={
            <div className="grid grid-cols-3">
              {languages.map((e) => (
                <button onClick={() => setLanguage(e)} className="flex flex-col items-center gap-2" key={e.code}>
                  <div
                    className={classNames(
                      "relative flex items-center justify-center rounded-full border-2 w-16 h-16",
                      {
                        "border-primary": e.code === language.code,
                      },
                      {
                        "border-transparent": e.code !== language.code,
                      }
                    )}
                  >
                    {e.code === language.code && (
                      <Icon
                        icon="solid-check-circle"
                        className="absolute w-6 h-6 bg-gray-700 border-4 border-gray-800 rounded-full -top-1 -right-1 text-primary"
                      />
                    )}
                    <ReactCountryFlag
                      countryCode={e.code}
                      svg
                      className="object-cover !w-11 !h-11 rounded-full border-6 border-gray-800"
                    />
                  </div>

                  <p className="text-sm text-white">{e.name}</p>
                </button>
              ))}
            </div>
          }
        />
        {isAuthenticated && (
          <>
            <IconButton icon="wallet" color="secondary" onClick={() => navigate(path.wallet)} />
            <IconButton icon="settings" color="secondary" />
            <IconButton icon="bell" color="secondary" />
          </>
        )}
      </div>
    </header>
  );
};
