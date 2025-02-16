import styled, { css } from "styled-components";
import { Theme, toggleTheme } from "@state/theme/theme";
import { useAppDispatch, useAppSelector } from "@hooks/useGlobalState";
import { getIcon } from "@data/icons";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 35px;
  height: 16px;
  margin-left: 1rem;
`;
const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span<{ $theme?: Theme }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 0.4s;
  border-radius: 10px;
  padding: 4px;
  background-color: var(--accent-color);

  ${({ $theme }) =>
    $theme === Theme.LIGHT &&
    css`
      background-color: var(--pattern-color);
    `};
  &:before {
    position: absolute;
    content: "";
    height: 22px;
    width: 22px;
    left: -7px;
    bottom: -3px;
    transition: 0.2s;
    border-radius: 50%;
    background-color: var(--color-background);
    border: 2px solid;
    border-color: var(--accent-color);

    ${({ $theme }) =>
      $theme === Theme.LIGHT &&
      css`
        border-color: var(--pattern-color);
      `};
  }

  ${Input}:checked + &:before {
    transform: translateX(25px);
  }
`;
const Container = styled.li<{ $theme?: Theme }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem;
  height: 2.4rem;
  width: 2.4rem;
  justify-content: center;
  background-color: var(--accent-color);

  border-radius: 50%;
  cursor: pointer;
  ${({ $theme }) =>
    $theme === Theme.LIGHT &&
    css`
      background-color: var(--pattern-color);
    `};
`;
function ThemeToggle({ isAdmin = false }: { isAdmin?: boolean }) {
  const currentTheme = useAppSelector((state) => state.theme.value);
  const dispatch = useAppDispatch();
  const handleChange = () => {
    dispatch(toggleTheme());
  };
  return (
    <>
      {isAdmin ? (
        <Container
          $theme={currentTheme}
          onClick={handleChange}
          data-testid="toggle-mode-button"
        >
          {currentTheme === Theme.LIGHT ? getIcon("NightMode") : getIcon("Sun")}
        </Container>
      ) : (
        <Switch data-testid="toggle-mode-label">
          <Input
            data-testid="toggle-mode-checkbox"
            type="checkbox"
            checked={currentTheme === Theme.DARK}
            onChange={handleChange}
          />
          <Slider $theme={currentTheme} data-testid="toggle-mode-slider" />
        </Switch>
      )}
    </>
  );
}

export default ThemeToggle;
