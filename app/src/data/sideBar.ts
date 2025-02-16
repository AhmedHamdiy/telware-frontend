import { SideBarRowProps } from "components/side-bar/settings/side-bar-row/SideBarRow";
import { SideBarView } from "state/side-bar/sideBar";
import {
  privacySettingsID,
  activitySettingsID,
  sideBarPages,
  pagesStrings,
  permissionSettingsID,
  StatusType,
} from "../types/sideBar";
import {
  activitySettingsInterface,
  permissionsSettingsInterface,
  privacySettingsInterface,
} from "../types/user";

const privacySettingsMap: Record<
  privacySettingsID,
  { id: keyof privacySettingsInterface; name: string; subtitle: string }
> = {
  [privacySettingsID.BLOCK_PRIVACY]: {
    id: "blockPrivacy",
    subtitle: "",
    name: "Block List",
  },
  [privacySettingsID.STORIES_SEEN_PRIVACY]: {
    id: "storiesSeenPrivacy",
    subtitle: "Who can see my stories?",
    name: "Stories Seen",
  },
  [privacySettingsID.LAST_SEEN_PRIVACY]: {
    id: "lastSeenPrivacy",
    subtitle: "Who can see my last seen time?",
    name: "Last Seen & Online",
  },
  [privacySettingsID.PROFILE_PHOTO_PRIVACY]: {
    id: "profilePhotoPrivacy",
    subtitle: "Who can see my profile photo?",
    name: "Profile Photo",
  },
};

const activitySettingsMap: Record<
  activitySettingsID,
  { id: keyof activitySettingsInterface; name: string; subtitle: string }
> = {
  [activitySettingsID.READ_RECEIPTS_PRIVACY]: {
    id: "readReceiptsPrivacy",
    name: "Read Reciepts Privacy",
    subtitle: "Who can see read-reciepts on my messages?",
  },
};

const permissionSettingsMap: Record<
  permissionSettingsID,
  { id: keyof permissionsSettingsInterface; name: string; subtitle: string }
> = {
  [permissionSettingsID.ADD_TO_GROUP_PRIVACY]: {
    id: "addToGroupPrivacy",
    subtitle: "Who can add me to group chats?",
    name: "Group Chats",
  },
  [permissionSettingsID.ADD_TO_CHANNEL_PRIVACY]: {
    id: "addToChannelPrivacy",
    subtitle: "Who can add me to channels?",
    name: "Channels",
  },
};

const statusMap = {
  privacy: privacySettingsMap,
  activity: activitySettingsMap,
  permission: permissionSettingsMap,
};

const pagesMap: { [K in pagesStrings]: string } = {
  CHATS: "Chats",
  CONTACTS: "Contacts",
  SETTINGS: "Settings",
  PRIVACY_SETTINGS: "Privacy",
  SETTINGS_UPDATE: "SettingsUpdate",
  PROFILE_UPDATE: "ProfileUpdate",
  BLOCKED_USERS: "blockList",
  DEVICES: "Devices",
  ADD_MEMBERS: "AddMembers",
  NEW_GROUP: "NewGroup",
  NEW_CHANNEL: "NewChannel",
  GROUP_INFO: "GroupInfo",
  EDIT_GROUP_INFO: "EditGroupInfo",
  GROUP_TYPE: "GroupType",
  ADD_MORE_MEMBERS: "AddMoreMembers",
  ADMINS: "Admins",
  ADD_ADMINS: "AddAdmins",
  MEMBERS: "Members",
  PERMISSIONS: "Permissions",
  CHANNEL_INFO: "ChannelInfo",
  EDIT_CHANNEL_INFO: "EditChannelInfo",
};

const settingsRows = [
  {
    icon: "SettingsOutlinedIcon",
    title: "General Settings",
  },
  {
    icon: "NotificationsOutlinedIcon",
    title: "Notifications",
  },
  {
    icon: "HttpsOutlinedIcon",
    title: "Privacy and Security",
    redirect: sideBarPages.PRIVACY_SETTINGS,
  },
  {
    icon: "DevicesOutlinedIcon",
    title: "Devices",
    redirect: sideBarPages.DEVICES,
  },
] as SideBarRowProps[];

const privacySettingsRows = [
  {
    icon: "BlockIcon",
    title: "Blocked Users",
    redirect: sideBarPages.BLOCKED_USERS,
    type: StatusType.PRIVACY,
    status: privacySettingsID.BLOCK_PRIVACY,
  },
  {
    title: "Who can see my stories?",
    status: privacySettingsID.STORIES_SEEN_PRIVACY,
    redirect: sideBarPages.SETTINGS_UPDATE,
    type: StatusType.PRIVACY,
  },
  {
    title: "Who can see my last seen?",
    status: privacySettingsID.LAST_SEEN_PRIVACY,
    redirect: sideBarPages.SETTINGS_UPDATE,
    type: StatusType.PRIVACY,
  },

  {
    title: "Who can see my profile photo?",
    status: privacySettingsID.PROFILE_PHOTO_PRIVACY,
    redirect: sideBarPages.SETTINGS_UPDATE,
    type: StatusType.PRIVACY,
  },
  {
    title: "Who can add me to group chats?",
    status: permissionSettingsID.ADD_TO_GROUP_PRIVACY,
    redirect: sideBarPages.SETTINGS_UPDATE,
    type: StatusType.PERMISSION,
  },
  {
    title: "Who can add me to channels?",
    status: permissionSettingsID.ADD_TO_CHANNEL_PRIVACY,
    redirect: sideBarPages.SETTINGS_UPDATE,
    type: StatusType.PERMISSION,
  },
  {
    title: "Read receipts",
    status: activitySettingsID.READ_RECEIPTS_PRIVACY,
    redirect: sideBarPages.SETTINGS_UPDATE,
    type: StatusType.ACTIVITY,
  },
] as SideBarRowProps[];

const chats: SideBarView = {
  title: "Chats",
  page: "CHATS",
};
const contacts: SideBarView = {
  title: "Contacts",
  backView: sideBarPages.CHATS,
  page: "CONTACTS",
};
const privacySettings: SideBarView = {
  title: "Privacy Settings",
  backView: sideBarPages.SETTINGS,
  props: { rows: privacySettingsRows },
  page: "PRIVACY_SETTINGS",
};
const settings: SideBarView = {
  title: "Settings",
  backView: sideBarPages.CHATS,
  props: { rows: settingsRows },
  page: "SETTINGS",
};
const settingsUpdate: SideBarView = {
  title: "SettingsUpdate",
  backView: sideBarPages.PRIVACY_SETTINGS,
  page: "SETTINGS_UPDATE",
};
const profileUpdate: SideBarView = {
  title: "Edit Profile",
  backView: sideBarPages.SETTINGS,
  page: "PROFILE_UPDATE",
};

const blockList: SideBarView = {
  title: "Blocked Users",
  backView: sideBarPages.PRIVACY_SETTINGS,
  page: "BLOCKED_USERS",
  props: {
    subtitle:
      "Blocked users can't send you messages or add you to groups. They will not see your profile photos, stories, online and last seen status.",
  },
};

const devices: SideBarView = {
  title: "Devices",
  backView: sideBarPages.SETTINGS,
  page: "DEVICES",
};

const addMembers: SideBarView = {
  title: "Add Members",
  backView: sideBarPages.CHATS,
  page: "ADD_MEMBERS",
};

const newGroup: SideBarView = {
  title: "New Group",
  backView: sideBarPages.ADD_MEMBERS,
  page: "NEW_GROUP",
  props: { view: "group" },
};

const newChannel: SideBarView = {
  title: "New Channel",
  backView: sideBarPages.ADD_MEMBERS,
  page: "NEW_CHANNEL",
  props: { view: "channel" },
};

const groupInfo: SideBarView = {
  title: "Group Info",
  page: "GROUP_INFO",
};

const editGroupInfo: SideBarView = {
  title: "Edit",
  backView: sideBarPages.GROUP_INFO,
  page: "EDIT_GROUP_INFO",
};

const groupType: SideBarView = {
  title: "Group Type",
  page: "GROUP_TYPE",
};

const addMoreMembers: SideBarView = {
  title: "Add Members",
  backView: sideBarPages.GROUP_INFO,
  page: "ADD_MORE_MEMBERS",
};

const admins: SideBarView = {
  title: "Adminstrators",
  page: "ADMINS",
};

const addAdmins: SideBarView = {
  title: "Add Admins",
  backView: sideBarPages.ADMINS,
  page: "ADD_ADMINS",
};

const members: SideBarView = {
  title: "Members",
  page: "MEMBERS",
};

const permissions: SideBarView = {
  title: "Permissions",
  page: "PERMISSIONS",
};

const channelInfo: SideBarView = {
  title: "Channel Info",
  page: "CHANNEL_INFO",
};

const editChannelInfo: SideBarView = {
  title: "Edit",
  backView: sideBarPages.CHANNEL_INFO,
  page: "EDIT_CHANNEL_INFO",
};

export {
  chats,
  contacts,
  settingsRows,
  privacySettingsID,
  activitySettingsID,
  privacySettingsMap,
  privacySettingsRows,
  settings,
  privacySettings,
  statusMap,
  sideBarPages,
  settingsUpdate,
  profileUpdate,
  devices,
  pagesMap,
  blockList,
  addMembers,
  newGroup,
  newChannel,
  groupInfo,
  editGroupInfo,
  groupType,
  addMoreMembers,
  admins,
  addAdmins,
  members,
  permissions,
  channelInfo,
  editChannelInfo,
};
