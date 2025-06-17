/** @jsxImportSource @emotion/react */
import { FlipBox } from "../component/Card/Flip";
import { useWindowContext } from "../context/WindowContext";
import inner_casino from "../assets/image/inner_casino.jpg";
import casino_lounge from "../assets/image/casino_lounge.jpg";
import poker from "../assets/image/poker.jpg";
import red_casino from "../assets/image/red_casino.jpg";
import poker_light from "../assets/image/poker_light.jpg";
import poker_video from "../assets/video/poker_video.mp4";
import { css, Theme, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { FuncItem } from "../component/styled/Button/Button";
import { ContentsContainer, PageContainer } from "../component/layouts/Layouts";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { LiveCasino } from "../component/Casino/LiveCasino";

const imageList = [inner_casino, casino_lounge, poker, red_casino, poker_light];

export function Main() {
  const { windowWidth } = useWindowContext();
  const theme = useTheme();

  const flipRef = useRef<HTMLDivElement>(null);
  const [flipContainerHeight, setFlipContainerHeight] = useState<number>(0);

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [videoShownIndex, setVideoShownIndex] = useState<number | null>(0);
  const [videoFadingOut, setVideoFadingOut] = useState(false);

  useLayoutEffect(() => {
    if (flipRef.current) {
      setFlipContainerHeight(flipRef.current.offsetHeight);
    }
  }, [selectedIndex]);

  useEffect(() => {
    setVideoShownIndex(selectedIndex);
    setVideoFadingOut(false);

    const timer = setTimeout(() => {
      setVideoFadingOut(true); // fade 시작

      // fade 시간 후 비디오 제거
      setTimeout(() => {
        setVideoShownIndex(null);
        setVideoFadingOut(false);
      }, 800); // <- transition 시간과 동일
    }, 5000);

    return () => clearTimeout(timer); // index 바뀌면 기존 타이머 정리
  }, [selectedIndex, windowWidth]);

  const childrenList = imageList.map((image, index) => (
    <Fragment key={index}>
      <div
        css={css`
          width: 100%;
          max-width: ${windowWidth}px;
          height: 100%;
          isolation: isolate;
        `}
      >
        {selectedIndex === index && (
          <>
            <div
              css={css`
                position: absolute;
                top: 10%;
                left: 6%;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                z-index: 2;
              `}
            >
              <img
                css={css`
                  width: 12vw;
                  height: 5vh;
                  filter: invert(100%);
                `}
                src="https://www.evolution.com/wp-content/themes/evolution-wp/assets/img/evolution_logo.svg"
                alt="logo"
              />
            </div>
            <div
              css={css`
                position: absolute;
                bottom: 24%;
                left: 6%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-start;
                color: #ffffff;
                gap: 1vh;
                z-index: 2;
              `}
            >
              <Title theme={theme}>EVOLUTION GAMING</Title>
              <Description theme={theme}>
                에볼루션 게이밍은 세계에서 가장 유명한 라이브 카지노 중
                하나입니다.
                <br />
                <br />
                고객중심의 겜블테이블을 제공하는 이 카지노는
                <br />
                당신에게 황홀한 하루를 선물할 것입니다.
                <br />
                <br />이 카지노에서 당신의 황홀경을 만들어보시겠습니까?
              </Description>
            </div>
            <div
              css={css`
                position: absolute;
                bottom: 10%;
                left: 6%;

                display: flex;
                flex-direction: column;
                gap: 1vh;
                z-index: 2;
              `}
            >
              <div
                css={css`
                  display: flex;
                  flex-direction: row;
                  justify-content: center;
                  align-content: center;
                  gap: 1vw;
                `}
              >
                <StyledButton
                  label="DEMO"
                  func={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  backgroundColor={theme.mode.buttonIsActiveBackground}
                  color="#ffffff"
                />
                <StyledButton
                  startIcon={<PlayCircleIcon />}
                  label="PLAY"
                  func={function (): void {
                    throw new Error("Function not implemented.");
                  }}
                  backgroundColor={theme.mode.buttonActiveBackground}
                  color="#ffffff"
                />
              </div>
            </div>
          </>
        )}
        {videoShownIndex === index && (
          <video
            autoPlay
            playsInline
            muted
            loop
            src={poker_video}
            css={css`
              position: absolute;
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: opacity 0.8s ease-in-out;
              opacity: ${videoFadingOut ? 0 : 1};
              pointer-events: none;
            `}
          />
        )}

        {/* 이미지 */}
        <ImageCase
          imageUrl={image}
          theme={theme}
          isActive={index === selectedIndex}
          css={css`
            max-width: ${windowWidth}px;
            width: 100%;
            height: 100%;
            // transition: opacity 0.8s ease-in-out;
            // opacity: ${videoFadingOut || videoShownIndex !== index ? 1 : 0};
          `}
        />
      </div>
    </Fragment>
  ));

  return (
    <>
      <PageContainer width={windowWidth - 200} marginTop={0}>
        <ContentsContainer
          css={css`
            height: ${flipContainerHeight}px;
            position: relative;
            overflow: visible;
          `}
        >
          <div
            ref={flipRef}
            css={css`
              width: 100%;
            `}
          >
            <FlipBox
              nodeList={childrenList}
              maxWidth={windowWidth}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          </div>
        </ContentsContainer>
        <ContentsContainer>
          <LiveCasino title="LIVE CASINO" titleView={true}></LiveCasino>
        </ContentsContainer>
      </PageContainer>
    </>
  );
}

const Title = styled.span<{ theme: Theme }>(
  ({ theme }) => css`
    font-size: 2.4em;
    font-family: ${theme.mode.font.banner.title};
    font-weight: 600;
  `,
);

const Description = styled.span<{ theme: Theme }>(
  ({ theme }) => css`
    font-size: 1.1em;
    font-family: ${theme.mode.font.banner.description};
    font-weight: 500;
  `,
);

const ImageCase = styled.div<{
  theme: Theme;
  imageUrl: string;
  isActive: boolean;
}>(
  ({ theme, imageUrl, isActive }) => css`
    height: 100%;
    background-image: ${isActive
      ? `linear-gradient(to right, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%), url(${imageUrl})`
      : `url(${imageUrl})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: ${theme.borderRadius.softBox};
  `,
);

const StyledButton = styled(FuncItem, {
  shouldForwardProp: (prop) => !["backgroundColor", "color"].includes(prop),
})<{
  backgroundColor: string;
  color: string;
}>(
  ({ backgroundColor, color }) => css`
    flex-shrink: 0;
    padding-right: 2.4rem;
    padding-left: 2rem;
    font-size: 1vw;
    background: ${backgroundColor};
    color: ${color};
  `,
);
