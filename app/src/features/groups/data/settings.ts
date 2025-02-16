import { iconStrings } from "@data/icons";
import { Dispatch } from "@reduxjs/toolkit";
import { updateSideBarView } from "@state/side-bar/sideBar";
import { sideBarPages } from "types/sideBar";

type SettingsProps = {
  dispatch: Dispatch;
  admins: any[];
  groupMembers: any[];
  privacy: boolean;
  chatType: string;
  backView: sideBarPages;
  numGivenPermissions: number;

  setIsModalOpen: (value: boolean) => void;
};

const getSettings = ({
  chatType,
  dispatch,
  admins,
  groupMembers,
  privacy,
  backView,
  numGivenPermissions,
  setIsModalOpen
}: SettingsProps) => [
  {
    testid: "group-type",
    icon: "Lock" as iconStrings,
    title: `${chatType?.charAt(0)?.toUpperCase()}${chatType?.slice(1)} Type`,
    subtitle: privacy ? "private" : "public",
    onClick: () =>
      dispatch(
        updateSideBarView({
          redirect: sideBarPages.GROUP_TYPE,
          data: { type: "right", backView }
        })
      )
  },
  {
    testid: "admins",
    icon: "Admin" as iconStrings,
    title: "Administrators",
    subtitle: admins?.length,
    onClick: () =>
      dispatch(
        updateSideBarView({
          redirect: sideBarPages.ADMINS,
          data: { type: "right", backView }
        })
      )
  },
  {
    testid: "members",
    icon: "Members" as iconStrings,
    title: chatType === "group" ? "Members" : "Subscribers",
    subtitle: groupMembers?.length,
    onClick: () =>
      dispatch(
        updateSideBarView({
          redirect: sideBarPages.MEMBERS,
          data: { type: "right", backView }
        })
      )
  },
  {
    testid: "permissions",
    icon: "Members" as iconStrings,
    title: "Permissions",
    subtitle: `${numGivenPermissions}/3`,
    onClick: () =>
      dispatch(
        updateSideBarView({
          redirect: sideBarPages.PERMISSIONS,
          data: { type: "right", backView }
        })
      )
  },
  {
    testid: "leave-group-button",
    icon: "Delete" as iconStrings,
    title: `Delete and Leave ${chatType}`,
    subtitle: "",
    onClick: () => {
      setIsModalOpen(true);
    }
  }
];

export { getSettings };
