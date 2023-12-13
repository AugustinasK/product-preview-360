import { ChangeEvent, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ProductImageProps } from './types';
import { PartsNavigation } from './parts/navigation';
import { PartsDots } from './parts/dots';

const ProductPreview = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

const ProductWrapper = styled.div`
  position: relative;
  display: flex;
`;

const ProductImage = styled.img`
  z-index: -1;
  width: 100%;
`;

const PlayButton = styled.button`
  border: none;
  background-color: #00a6ed;
  padding: 15px 25px;
  cursor: pointer;
  margin: 30px 0;
`;

const RotateSlider = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 20px;
  background: #ddd;
  outline: none;
  margin: 0;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: #00a6ed;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #00a6ed;
    cursor: pointer;
  }

  &:disabled::-webkit-slider-thumb {
    background: #ccc;
  }
`

interface PreviewProps {
  parts: string[];
  images: ProductImageProps[];
}

const Preview = ({ parts, images }: PreviewProps) => {
  const [previewImageIndex, setPreviewImageIndex] = useState(1);
  const [highlightedPart, setHighlightedPart] = useState<number>();
  const [imageWidth, setImageWidth] = useState<number>();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isPlaying, setIsPlaying] = useState(false);

  let playInterval = useRef<NodeJS.Timer>();

  const updateDimensions = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = './images/' + images[0].image;
    img.onload = () => {
      setImageWidth(img.width);
    };
  }, [images])

  const handlePartClick = (index: number) => {
    setHighlightedPart(highlightedPart === index ? undefined : index);
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPreviewImageIndex(parseInt(e.target.value))
  }

  const handlePlayClick = () => {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (isPlaying) {
      playInterval.current = setInterval(() => {
        const nextIndex = previewImageIndex === images.length - 1 ? 0 : previewImageIndex + 1;
        setPreviewImageIndex(nextIndex);
      }, 200);
    }

    return () => {
      clearInterval(playInterval.current);
    }
  }, [isPlaying, images.length, previewImageIndex]);

  return (
    <ProductPreview>
      <ProductWrapper>
        <ProductImage
          src={'./images/' + images[previewImageIndex].image}
          alt="preview"
          style={{ maxWidth: imageWidth }}
        />
        {
          imageWidth &&
          <PartsDots
            coordinates={images[previewImageIndex].partsCoordinates}
            onPartClick={handlePartClick}
            highlightedPart={highlightedPart}
            imageWidth={imageWidth}
            windowWidth={windowWidth}
          />
        }
      </ProductWrapper>
      <RotateSlider type="range" min="0" max={images.length - 1} value={previewImageIndex} onChange={handleImageChange} disabled={isPlaying} style={{ maxWidth: imageWidth }} />
      <PlayButton onClick={handlePlayClick}>{isPlaying ? '⏹️ Stop' : '▶️ Play'}</PlayButton>
      <PartsNavigation
        parts={parts}
        onPartClick={handlePartClick}
        highlightedPart={highlightedPart}
      />
    </ProductPreview>
  );
}

export { Preview };
