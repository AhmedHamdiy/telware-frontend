import { useEffect, useState } from "react";
import styled from "styled-components";

interface StorySlideCounterProps {
  currentIndex: number;
  totalSlides: number;
  isPaused: boolean;
  onSlideChange: (index: number) => void;
  isImage: boolean;
}
interface SegmentProps {
  $progress: number;
  $isViewed: boolean;
}

const StyledSliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.5);
  height: 2rem;

  z-index: 1;
`;

const Segment = styled.div<SegmentProps>`
  flex: 1;
  height: 4px;
  background: linear-gradient(
    to right,
    white ${(props) => props.$progress}%,
    gray ${(props) => props.$progress}%
  );
`;

function StorySlideCounter(props: StorySlideCounterProps) {
  const { currentIndex, totalSlides, onSlideChange, isPaused, isImage } = props;
  const [progress, setProgress] = useState(0);
  const [viewedStories, setViewedStories] = useState(
    Array(totalSlides).fill(false)
  );

  useEffect(() => {
    if (isPaused) return;
    if (!isImage) return;
    const interval = setInterval(() => {
      setProgress((prev) => prev + 1);
    }, 50);

    if (progress >= 100) {
      setViewedStories((prev) => {
        const updated = [...prev];
        updated[currentIndex] = true;
        return updated;
      });
      onSlideChange(currentIndex + 1 < totalSlides ? currentIndex + 1 : 0);
      setProgress(0);
    }

    return () => clearInterval(interval);
  }, [progress, currentIndex, totalSlides, onSlideChange, isPaused, isImage]);

  return (
    <StyledSliderContainer>
      {Array.from({ length: totalSlides }, (_, index) => (
        <Segment
          key={index}
          $progress={
            index < currentIndex ? 100 : index === currentIndex ? progress : 0
          }
          $isViewed={viewedStories[index] || index < currentIndex}
        />
      ))}
    </StyledSliderContainer>
  );
}

export default StorySlideCounter;
