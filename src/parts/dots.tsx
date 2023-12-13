// import { Parts } from "../types";
import styled, { css, keyframes } from 'styled-components';

const DotPulse = keyframes`
	0% {
		transform: scale(1);
	}

	70% {
		transform: scale(1.25);
	}

	100% {
		transform: scale(1);
	}`;

const PartDot = styled.div<{ $highlighted: boolean; }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => props.$highlighted ? 'crimson' : 'white'};
  position: absolute;
  cursor: pointer;
  z-index: ${props => props.$highlighted ? 1 : 0};
  transform: translate(-10px, -10px);
  ${props => props.$highlighted ? css`
    &:before {
      content: '';
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgba(219, 20, 60, 0.443);
      position: absolute;
      top: -5px;
      left: -5px;
      animation-name: ${DotPulse};
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }
  ` : ''}
`;

interface PartsDotsProps {
    onPartClick: (index: number) => void;
    highlightedPart?: number;
    coordinates: [number, number][];
    imageWidth: number;
    windowWidth: number;
}

const PartsDots = ({
    onPartClick,
    highlightedPart,
    coordinates,
    imageWidth,
    windowWidth
}: PartsDotsProps) => {

    return (
        <>
            {coordinates.map((coordinate, index) => {
                const scaledPosition = imageWidth < windowWidth ? coordinate : [
                    coordinate[0] * (windowWidth / imageWidth),
                    coordinate[1] * (windowWidth / imageWidth),
                ];

                return (
                    <PartDot
                        key={index}
                        onClick={() => onPartClick(index)}
                        $highlighted={highlightedPart === index}
                        style={{
                            left: scaledPosition[0],
                            top: scaledPosition[1]
                        }}
                    />
                )
            })}
        </>
    );
};

export { PartsDots }