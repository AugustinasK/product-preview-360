import styled from "styled-components";

const PartButton = styled.a<{ $highlighted: boolean; }>`
  border: none;
  margin-right: 20px;
  margin-bottom: 10px;
  color: ${props => props.$highlighted ? 'crimson' : '#333333'};
  cursor: pointer;
  text-decoration: underline;
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
    parts: string[];
    onPartClick: (index: number) => void;
    highlightedPart?: number;
}

const PartsNavigation = ({ parts, onPartClick, highlightedPart }: PartsNavigationProps) => {
    return (
        <ButtonsWrapper>
            {
                parts.map((part: any, index: any) => {
                    return (
                        <PartButton
                            key={index}
                            onClick={() => onPartClick(index)}
                            $highlighted={highlightedPart === index}
                        >
                            {part}
                        </PartButton>
                    )
                })
            }
        </ButtonsWrapper>
    );
}

export { PartsNavigation }