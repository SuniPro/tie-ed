/** @jsxImportSource @emotion/react */
import { Fragment } from "react";

import { css, useTheme } from "@emotion/react";
import { EvolutionGamingLogo } from "../styled/CasinoLogos/CasinoIcons";
import { BorderCard } from "../Card/BorderCard";

const SAMPLE_IMAGE_LIST = [
  {
    title: <EvolutionGamingLogo />,
    image:
      "https://wallpapercat.com/w/middle-vertical-retina/8/1/5/1142938-2000x2500-phone-hd-poker-wallpaper-photo.jpg",
  },
  {
    title: <EvolutionGamingLogo />,
    image:
      "https://wallpapercat.com/w/middle-vertical-retina/4/f/9/1142958-1420x3073-iphone-hd-poker-wallpaper-photo.jpg",
  },
  {
    title: <EvolutionGamingLogo />,
    image:
      "https://w0.peakpx.com/wallpaper/668/108/HD-wallpaper-eva-green-women-actress-hollywood-cleavage-bond-girls-casino-royale.jpg",
  },
  {
    title: <EvolutionGamingLogo />,
    image:
      "https://w0.peakpx.com/wallpaper/811/932/HD-wallpaper-casino-royale-007-gun-james-bond-poker-shoot-smokin-war.jpg",
  },
  {
    title: <EvolutionGamingLogo />,
    image:
      "https://wallpapercat.com/w/middle-vertical-retina/8/1/5/1142938-2000x2500-phone-hd-poker-wallpaper-photo.jpg",
  },
  {
    title: <EvolutionGamingLogo />,
    image:
      "https://wallpapercat.com/w/middle-vertical-retina/4/f/9/1142958-1420x3073-iphone-hd-poker-wallpaper-photo.jpg",
  },
  {
    title: <EvolutionGamingLogo />,
    image:
      "https://w0.peakpx.com/wallpaper/668/108/HD-wallpaper-eva-green-women-actress-hollywood-cleavage-bond-girls-casino-royale.jpg",
  },
  {
    title: <EvolutionGamingLogo />,
    image:
      "https://w0.peakpx.com/wallpaper/811/932/HD-wallpaper-casino-royale-007-gun-james-bond-poker-shoot-smokin-war.jpg",
  },
];

export function LiveCasino() {
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
        gap: 20px;
      `}
    >
      {SAMPLE_IMAGE_LIST.map((item) => (
        <Fragment key={item.image}>
          <BorderCard
            width={350}
            height={400}
            image={item.image}
            title={item.title}
            theme={theme}
          />
        </Fragment>
      ))}
    </div>
  );
}
