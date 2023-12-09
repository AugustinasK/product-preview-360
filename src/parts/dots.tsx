import { Parts } from "../types";
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
  background: ${props => props.$highlighted ? 'crimson' : 'cornflowerblue'};
  position: absolute;
  cursor: pointer;
  z-index: ${props => props.$highlighted ? 1 : 0};
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
    parts: Parts[];
    onPartClick: (index: number) => void;
    highlightedPart?: number;
    isShowingFront: boolean;
    imageWidth: number;
    windowWidth: number;
}

const PartsDots = ({
    parts,
    onPartClick,
    highlightedPart,
    isShowingFront,
    imageWidth,
    windowWidth
}: PartsDotsProps) => (

    parts.map((part, index) => {
        const partPosition = isShowingFront ? part.front : part.back;
        const scaledPosition = imageWidth < windowWidth ? partPosition : [
            partPosition[0] * (windowWidth / imageWidth),
            partPosition[1] * (windowWidth / imageWidth),
        ]

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
    }
));

export { PartsDots }