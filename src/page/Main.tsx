/** @jsxImportSource @emotion/react */
import { useWindowContext } from "../context/WindowContext";
import { ContentsContainer, PageContainer } from "../component/layouts";
import { DisplayIntro } from "../component/display/DisplayIntro";
import { ThumbnailCard } from "../component/Card/ThumbnailCard";
import styled from "@emotion/styled";
import { Fragment } from "react";

export function Main() {
  const { windowWidth } = useWindowContext();

  return (
    <>
      <PageContainer width={windowWidth - 200} marginTop={0}>
        <DisplayIntro />
        <ContentsContainer>
          <ContentsTitle></ContentsTitle>
          <HorizontalContainer>
            {Array.from({ length: 3 }).map((_, i) => (
              <Fragment key={i}>
                <ThumbnailCard />
              </Fragment>
            ))}
          </HorizontalContainer>
        </ContentsContainer>
      </PageContainer>
    </>
  );
}

const ContentsTitle = styled.div`
  width: 100%;
  text-align: left;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  gap: 1vw;
`;
