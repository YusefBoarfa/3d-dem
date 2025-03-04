export const SVGFilters = () => {
  return (
    <svg className="hidden">
      <defs>
        <filter id="squiggle-0">
          <feTurbulence baseFrequency="0.02" numOctaves="3" seed="0" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>

        <filter id="squiggle-1">
          <feTurbulence baseFrequency="0.02" numOctaves="3" seed="1" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>

        <filter id="squiggle-2">
          <feTurbulence baseFrequency="0.02" numOctaves="3" seed="2" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>

        <filter id="squiggle-3">
          <feTurbulence baseFrequency="0.02" numOctaves="3" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>

        <filter id="squiggle-4">
          <feTurbulence baseFrequency="0.02" numOctaves="3" seed="4" />
          <feDisplacementMap in="SourceGraphic" scale="6" />
        </filter>
      </defs>
    </svg>
  );
};
