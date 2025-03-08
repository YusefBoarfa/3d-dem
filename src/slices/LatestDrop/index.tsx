import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `LatestDrop`.
 */
export type LatestDropProps = SliceComponentProps<Content.LatestDropSlice>;

/**
 * Component for "LatestDrop" Slices.
 */
const LatestDrop: FC<LatestDropProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for latest_drop (variation: {slice.variation})
      Slices
    </section>
  );
};

export default LatestDrop;
