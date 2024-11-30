import Icon from "@components/Icon";
import { getIcon } from "@data/icons";
import { useAppSelector } from "@hooks/useGlobalState";
import styled from "styled-components";

const Wrapper = styled.div`
  background: var(--color-background);
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex: 2 2;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
`;

const StyledHeader = styled.div`
  font-size: 1rem;
  color: var(--color-text-secondary);
  flex: 1;
  text-align: center;
`;

const IconButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

interface Props {
  onClose: () => void;
  onForward: () => void;
}

function ForwardingInputBar(props: Props) {
  const { onClose, onForward } = props;
  const selectedMessages = useAppSelector(
    (state) => state.messages.selectedMessages
  );

  return (
    <Wrapper>
      <IconButton onClick={onClose} test-id="close-icon">
        <Icon>{getIcon("Close")}</Icon>
      </IconButton>
      <StyledHeader>{selectedMessages.length} messages selected</StyledHeader>
      <IconButton onClick={onForward} test-id="forward-icon">
        <Icon>{getIcon("Forward")}</Icon>
      </IconButton>
    </Wrapper>
  );
}

export default ForwardingInputBar;
