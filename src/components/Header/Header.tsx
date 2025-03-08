import Link from "next/link";
import { ButtonLink } from "../ButtonLink/ButtonLink";
import { Logo } from "../Logo/Logo";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
export const Header = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="header absolute left-0 right-0 top-0 z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
        <Link href="/" className="justify-self-start">
          <Logo className="text-brand-purple h-12 md:h-16 lg:h-20" />
        </Link>
        <nav
          aria-label="Main navigation"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex items-center justify-center flex-wrap gap-6">
            {settings.data.navigation.map((item) => (
              <li key={item.link.text}>
                <PrismicNextLink field={item.link}>
                  {item.link.text}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="justify-self-end">
          <ButtonLink
            href=""
            icon="cart"
            color="purple"
            className="block w-fit"
            size="sm"
          >
            <span className="hidden md:inline">Cart (1)</span>

            <span className="md:hidden">(1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};
