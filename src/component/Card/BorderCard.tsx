import { css, Theme } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode } from "react";

export interface borderCardPropsType {
  width: number;
  height: number;
  image: string;
  title: ReactNode;
  theme: Theme;
}

export function BorderCard(props: borderCardPropsType) {
  const { width, height, image, title, theme } = props;
  return (
    <Card theme={theme} width={width} height={height} imageUrl={image}>
      <Border className="border" theme={theme} width={width} height={height}>
        <Title theme={theme}>{title}</Title>
      </Border>
    </Card>
  );
}

const Card = styled.div<{
  imageUrl: string;
  width: number;
  height: number;
  theme: Theme;
}>(
  ({ imageUrl, width, height, theme }) => css`
    max-width: ${width}px;
    min-width: ${width}px;
    width: ${width}px;
    height: ${height}px;

    border-radius: ${theme.borderRadius.roundedBox};
    background-color: ${theme.mode.cardBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    scroll-snap-align: start;
    overflow: hidden;

    box-sizing: border-box;
    border-radius: ${theme.borderRadius.roundedBox};
    transition:
      background 0.8s,
      width 0.8s ease-in-out,
      height 0.8s ease-in-out;
    background: black;
    box-shadow: 0 70px 63px -60px #000000;
    position: relative;
    background: url(${imageUrl}) center center no-repeat;
    background-position: center;
    background-size: ${width}px;

    h2 {
      margin: 0;
      padding: 0;
    }
    svg {
      margin-left: 10px;
      padding: 0;
      width: ${width / 2.02}px;
      height: ${width / 5.5}px;
    }

    &:hover {
      background: url(${imageUrl}) left center no-repeat;
      background-size: ${width + 30}px;
      svg {
        opacity: 1;
      }
      h2 {
        opacity: 1;
      }

      .fa {
        opacity: 1;
      }
    }
  `,
);

const Border = styled.div<{ width: number; height: number; theme: Theme }>(
  ({ width, height, theme }) => css`
    width: ${width - 20}px;
    height: ${height - 20}px;
    background: transparent;
    border-radius: ${theme.borderRadius.roundedBox};
    transition: border 1s;
    position: relative;
    &:hover {
      border: 1px solid white;
    }

    &:focus {
      border: 1px solid white;
    }
  `,
);

const Title = styled.h2<{ theme: Theme }>(
  ({ theme }) => css`
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: white;
    margin: 20px;
    opacity: 0;
    transition: opacity 1s;

    svg {
      width: 180px;
      color: ${theme.mode.textPrimary};
      fill: ${theme.mode.textPrimary};
    }
    svg {
      color: ${theme.mode.textPrimary};
    }
  `,
);
