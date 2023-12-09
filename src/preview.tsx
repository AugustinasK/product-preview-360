import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Parts } from './types';
import { PartsNavigation } from './parts/navigation';
import { PartsDots } from './parts/dots';

const ProductPreview = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ProductWrapper = styled.div`
  position: relative;
`;

const ProductImage = styled.img`
  z-index: -1;
  width: 100%;
`;

const FlipButton = styled.button`
  border: none;
  background-color: cornflowerblue;
  padding: 15px 25px;
  cursor: pointer;
  margin: 30px 0;
`;

interface PreviewProps {
  parts: Parts[];
  images: {
    front: string;
    back: string;
  }
}

const Preview = ({ parts, images }: PreviewProps) => {
  const [isShowingFront, setShowingFront] = useState(true);
  const [highlightedPart, setHighlightedPart] = useState<number>();
  const [imageWidth, setImageWidth] = useState<number>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = images.front;
    img.onload = () => {
      setImageWidth(img.width);
    };
  }, [images.front])

  const handlePartClick = (index: number) => {
    setHighlightedPart(highlightedPart === index ? undefined : index);
  }

  const handleFlipClick = () => {
    setShowingFront(!isShowingFront);
  }

  return (
    <ProductPreview>
      <ProductWrapper>
        <ProductImage
          src={isShowingFront ? images.front : images.back}
          alt="preview"
          style={{ maxWidth: imageWidth }}
        />
        {
          imageWidth &&
            <PartsDots
              parts={parts}
              onPartClick={handlePartClick}
              highlightedPart={highlightedPart}
              isShowingFront={isShowingFront}
              imageWidth={imageWidth}
              windowWidth={windowWidth}
            />
        }
      </ProductWrapper>
      <FlipButton onClick={handleFlipClick}>Flip image</FlipButton>
      <PartsNavigation
        parts={parts}
        onPartClick={handlePartClick}
        highlightedPart={highlightedPart}
      />
    </ProductPreview>
  );
}

export { Preview };
