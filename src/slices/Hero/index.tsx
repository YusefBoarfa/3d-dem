import { FC } from "react";
import { Content } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading/Heading";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { WideLogo } from "./WideLogo/WideLogo";
import { TallLogo } from "./TallLogo/TallLogo";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="bg-brand-pink relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 items-center p-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block" />
        <TallLogo className="w-full text-brand-purple block opacity-20 mix-blend-multiply lg:hidden" />
      </div>
      <div className="absolute inset-0 mx-auto max-w-6xl mt-24 py-12 px-6 grid grid-rows-2 place-items-end">
        <Heading
          as="h1"
          size="xl"
          className="relative max-w-2xl place-self-start "
        >
          <PrismicText field={slice.primary.heading} />
        </Heading>
        <div className="flex w-full relative flex-col items-center justify-between gap-3 lg:flex-row">
          <div className="max-w-[45ch] font-semibold text-center">
            <PrismicRichText field={slice.primary.body} />
          </div>
          <ButtonLink
            field={slice.primary.button}
            icon="skateboard"
            size="lg"
            className="z-10 mt-2 block"
          >
            {slice.primary.button.text}
          </ButtonLink>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
