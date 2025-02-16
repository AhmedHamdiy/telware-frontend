import { DESKTOP_VIEW, MOBILE_VIEW } from "@constants";
import { getIcon } from "@data/icons";
import { useAppDispatch, useAppSelector } from "@hooks/useGlobalState";
import { setView, View } from "@state/admin/adminView";
import styled, { css } from "styled-components";

const NavList = styled.ul`
  display: flex;
  gap: 2.8rem;
  list-style: none;
  flex-direction: column;
  color: var(--color-text);
  margin-top: 5.4rem;
`;

const NavLink = styled.li<{ $active?: boolean }>`
  text-decoration: none;
  margin-right: -2.5rem;
  color: #f5f5f5;
  cursor: pointer;

  gap: 1.2rem;
  display: flex;
  font-weight: 500;
  font-size: 1.2rem;
  align-items: center;
  transition: all 0.3s;
  padding: 1.2rem 1.2rem;
  border-radius: var(--border-radius-one-sided);

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: #f5f5f5;
    transition: all 0.2s;
  }
  ${({ $active }) =>
    $active &&
    css`
      background-color: var(--admin-main-bg);
      color: var(--accent-color);
      svg {
        color: var(--accent-color);
      }
    `};
`;

function AdminMainNav() {
  const activeView = useAppSelector((state) => state.adminView.value);
  const dispatch = useAppDispatch();
  const handleViewChange = (view: View) => {
    if (activeView !== view) {
      dispatch(
        setView({
          value: view,
        })
      );
    }
  };
  return (
    <nav data-testid="admin-main-nav">
      <NavList data-testid="nav-list">
        <NavLink
          onClick={() => {
            handleViewChange(View.USERS);
          }}
          $active={activeView === View.USERS}
          data-testid="users-nav"
        >
          {getIcon("Contacts")}
          <span>Users</span>
        </NavLink>
        <NavLink
          onClick={() => {
            handleViewChange(View.GROUPS);
          }}
          $active={activeView === View.GROUPS}
          data-testid="groups-nav"
        >
          {getIcon("Group")}
          <span>Groups</span>
        </NavLink>
      </NavList>
    </nav>
  );
}

export default AdminMainNav;
