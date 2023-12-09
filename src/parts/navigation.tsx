import styled from "styled-components";
import { Parts } from "../types";

const PartButton = styled.button<{ $highlighted: boolean; }>`
  border: none;
  padding: 15px 25px;
  margin-right: 20px;
  margin-bottom: 10px;
  background-color: ${props => props.$highlighted ? 'crimson' : '#ddd'};
  color: ${props => props.$highlighted ? 'white' : 'black'};
  cursor: pointer;
`;


const ButtonsWrapper = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  ${PartButton}:last-child {
    margin-right: 0px;
  }
`;

interface PartsNavigationProps {
    parts: Parts[];
    onPartClick: (index: number) => void;
    highlightedPart?: number;
}

const PartsNavigation = ({ parts, onPartClick, highlightedPart }: PartsNavigationProps) => {
    return (
        <ButtonsWrapper>
            {
                parts.map((part, index) => {
                    return (
                        <PartButton
                            key={index}
                            onClick={() => onPartClick(index)}
                            $highlighted={highlightedPart === index}
                        >
                            {part.title}
                        </PartButton>
                    )
                })
            }
        </ButtonsWrapper>
    );
}

export { PartsNavigation }