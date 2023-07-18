/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {
  Dialog,
  Layout,
  styled,
  theme,
  useMemoize,
  useValue,
  withTrackingScope,
} from 'flipper-plugin';
import {getRenderHostInstance} from 'flipper-frontend-core';
import React, {cloneElement, useCallback, useMemo, useState} from 'react';
import {useDispatch, useStore} from '../utils/useStore';
import config from '../fb-stubs/config';
import {isConnected, currentUser, logoutUser} from '../fb-stubs/user';
import {showLoginDialog} from '../chrome/fb-stubs/SignInSheet';
import {Avatar, Badge, Button, Popover, Tooltip} from 'antd';
import {
  ApiOutlined,
  AppstoreAddOutlined,
  BellOutlined,
  CameraOutlined,
  EllipsisOutlined,
  FileExclamationOutlined,
  LayoutOutlined,
  LoginOutlined,
  MedicineBoxOutlined,
  QuestionCircleOutlined,
  RocketOutlined,
  VideoCameraOutlined,
  WarningOutlined,
} from '@ant-design/icons';
import {
  toggleLeftSidebarVisible,
  toggleRightSidebarVisible,
} from '../reducers/application';
import {ToplevelProps} from './SandyApp';
import PluginManager from '../chrome/plugin-manager/PluginManager';
import {showEmulatorLauncher} from './appinspect/LaunchEmulator';
import SetupDoctorScreen, {checkHasNewProblem} from './SetupDoctorScreen';
import {isProduction} from 'flipper-common';
import FpsGraph from '../chrome/FpsGraph';
import NetworkGraph from '../chrome/NetworkGraph';
import {errorCounterAtom} from '../chrome/ConsoleLogs';
import {filterNotifications} from './notification/notificationUtils';
import {css} from '@emotion/css';

export const Navbar = withTrackingScope(function Navbar({
  toplevelSelection,
  setToplevelSelection,
}: ToplevelProps) {
  return (
    <Layout.Horizontal
      borderBottom
      style={{
        width: '100%',
        height: 68,
        padding: `${theme.space.small}px ${theme.space.large}px`,
        alignItems: 'center',
        justifyContent: 'space-between',
        background: theme.backgroundDefault,
      }}>
      <Layout.Horizontal style={{gap: 4}}>
        <LeftSidebarToggleButton />
        <button>device picker</button>
        <NavbarButton label="Screenshot" icon={CameraOutlined} />
        <NavbarButton label="Record" icon={VideoCameraOutlined} />
        <LaunchEmulatorButton />
        {getRenderHostInstance().GK('flipper_connection_troubleshoot') && (
          <ConnectionTroubleshootButton
            toplevelSelection={toplevelSelection}
            setToplevelSelection={setToplevelSelection}
          />
        )}
        {!isProduction() && (
          <div>
            <FpsGraph />
            <NetworkGraph />
          </div>
        )}
      </Layout.Horizontal>
      <Layout.Horizontal style={{gap: 4, alignItems: 'center'}}>
        <NavbarButton
          label="Add Plugins"
          icon={AppstoreAddOutlined}
          onClick={() => {
            Dialog.showModal((onHide) => <PluginManager onHide={onHide} />);
          }}
        />
        <DebugLogsButton
          toplevelSelection={toplevelSelection}
          setToplevelSelection={setToplevelSelection}
        />
        <NotificationButton
          toplevelSelection={toplevelSelection}
          setToplevelSelection={setToplevelSelection}
        />
        <SetupDoctorButton />
        <NavbarButton label="Help" icon={QuestionCircleOutlined} />
        <NavbarButton label="More" icon={EllipsisOutlined} />
        <RightSidebarToggleButton />
        {config.showLogin && <LoginConnectivityButton />}
      </Layout.Horizontal>
    </Layout.Horizontal>
  );
});

function ConnectionTroubleshootButton({
  toplevelSelection,
  setToplevelSelection,
}: ToplevelProps) {
  return (
    <NavbarButton
      icon={ApiOutlined}
      label="Connection Troubleshoot"
      toggled={toplevelSelection === 'connectivity'}
      onClick={() => {
        setToplevelSelection('connectivity');
      }}
    />
  );
}

function NotificationButton({
  toplevelSelection,
  setToplevelSelection,
}: ToplevelProps) {
  const notifications = useStore((state) => state.notifications);
  const activeNotifications = useMemoize(filterNotifications, [
    notifications.activeNotifications,
    notifications.blocklistedPlugins,
    notifications.blocklistedCategories,
  ]);
  return (
    <NavbarButton
      icon={BellOutlined}
      label="Alerts"
      toggled={toplevelSelection === 'notification'}
      count={activeNotifications.length}
      onClick={() => setToplevelSelection('notification')}
    />
  );
}

function LeftSidebarToggleButton() {
  const dispatch = useDispatch();
  const mainMenuVisible = useStore(
    (state) => state.application.leftSidebarVisible,
  );

  return (
    <NavbarButton
      label="Toggle Sidebar"
      icon={LayoutOutlined}
      toggled={!mainMenuVisible}
      onClick={() => {
        dispatch(toggleLeftSidebarVisible());
      }}
    />
  );
}

function RightSidebarToggleButton() {
  const dispatch = useDispatch();
  const rightSidebarAvailable = useStore(
    (state) => state.application.rightSidebarAvailable,
  );
  const rightSidebarVisible = useStore(
    (state) => state.application.rightSidebarVisible,
  );

  return (
    <NavbarButton
      icon={LayoutOutlined}
      flipIcon
      label="Toggle R.Sidebar"
      toggled={!rightSidebarVisible}
      disabled={!rightSidebarAvailable}
      onClick={() => {
        dispatch(toggleRightSidebarVisible());
      }}
    />
  );
}

function LaunchEmulatorButton() {
  const store = useStore();

  return (
    <NavbarButton
      icon={RocketOutlined}
      label="Start [E/Si]mulator"
      onClick={() => {
        showEmulatorLauncher(store);
      }}
    />
  );
}

function DebugLogsButton({
  toplevelSelection,
  setToplevelSelection,
}: ToplevelProps) {
  const errorCount = useValue(errorCounterAtom);
  return (
    <NavbarButton
      icon={FileExclamationOutlined}
      label="Flipper Logs"
      toggled={toplevelSelection === 'flipperlogs'}
      count={errorCount}
      onClick={() => {
        setToplevelSelection('flipperlogs');
      }}
    />
  );
}

function SetupDoctorButton() {
  const [visible, setVisible] = useState(false);
  const result = useStore(
    (state) => state.healthchecks.healthcheckReport.result,
  );
  const hasNewProblem = useMemo(() => checkHasNewProblem(result), [result]);
  const onClose = useCallback(() => setVisible(false), []);
  return (
    <>
      <NavbarButton
        icon={MedicineBoxOutlined}
        label="Setup Doctor"
        count={hasNewProblem ? true : undefined}
        onClick={() => setVisible(true)}
      />
      <SetupDoctorScreen visible={visible} onClose={onClose} />
    </>
  );
}

const badgeDotClassname = css`
  sup {
    right: calc(50% - 14px);
    margin-top: 8px;
  }
`;
const badgeCountClassname = css`
  sup {
    right: calc(50% - 22px);
    margin-top: 8px;
  }
`;
function NavbarButton({
  icon: Icon,
  label,
  toggled = false,
  onClick,
  count,
  disabled = false,
  flipIcon = false,
}: {
  icon: (props: any) => any;
  label: string;
  // TODO remove optional
  onClick?: () => void;
  toggled?: boolean;
  count?: number | true;
  disabled?: boolean;
  flipIcon?: boolean;
}) {
  const color = toggled ? theme.primaryColor : theme.textColorActive;
  const button = (
    <Button
      aria-pressed={toggled}
      ghost
      onClick={onClick}
      style={{
        color,
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
      }}
      disabled={disabled}>
      <Icon
        style={{
          color,
          fontSize: 24,
          transform: flipIcon ? 'scaleX(-1)' : undefined,
        }}
      />
      <span
        style={{
          margin: 0,
          fontSize: theme.fontSize.small,
          color: theme.textColorSecondary,
        }}>
        {label}
      </span>
    </Button>
  );

  if (count !== undefined) {
    return (
      <Badge
        {...{onClick}}
        dot={count === true}
        count={count}
        // using count instead of "offset" prop as we need to perform css calc()
        // while antd internally calls `parseInt` on passed string
        className={count === true ? badgeDotClassname : badgeCountClassname}>
        {button}
      </Badge>
    );
  } else {
    return button;
  }
}

function LoginConnectivityButton() {
  const loggedIn = useValue(currentUser());
  const user = useStore((state) => state.user);

  const profileUrl = user?.profile_picture?.uri;
  const [showLogout, setShowLogout] = useState(false);
  const onHandleVisibleChange = useCallback(
    (visible) => setShowLogout(visible),
    [],
  );

  const connected = useValue(isConnected());

  if (!connected) {
    return (
      <Tooltip
        placement="left"
        title="No connection to intern, ensure you are VPN/Lighthouse for plugin updates and other features">
        <WarningOutlined
          style={{color: theme.warningColor, fontSize: '20px'}}
        />
      </Tooltip>
    );
  }

  return loggedIn ? (
    <Popover
      content={
        <Button
          block
          style={{backgroundColor: theme.backgroundDefault}}
          onClick={async () => {
            onHandleVisibleChange(false);
            await logoutUser();
          }}>
          Log Out
        </Button>
      }
      trigger="click"
      placement="bottom"
      visible={showLogout}
      overlayStyle={{padding: 0}}
      onVisibleChange={onHandleVisibleChange}>
      <Layout.Container padv={theme.inlinePaddingV}>
        <Avatar size={40} src={profileUrl} />
      </Layout.Container>
    </Popover>
  ) : (
    <>
      <LeftRailButton
        icon={<LoginOutlined />}
        title="Log In"
        onClick={() => showLoginDialog()}
      />
    </>
  );
}

const LeftRailButtonElem = styled(Button)<{kind?: 'small'}>(({kind}) => ({
  width: kind === 'small' ? 32 : 36,
  height: kind === 'small' ? 32 : 36,
  border: 'none',
  boxShadow: 'none',
}));
LeftRailButtonElem.displayName = 'LeftRailButtonElem';

export function LeftRailButton({
  icon,
  small,
  selected,
  toggled,
  count,
  title,
  onClick,
  disabled,
}: {
  icon?: React.ReactElement;
  small?: boolean;
  toggled?: boolean;
  selected?: boolean;
  disabled?: boolean;
  count?: number | true;
  title?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}) {
  const iconElement =
    icon && cloneElement(icon, {style: {fontSize: small ? 16 : 24}});

  let res = (
    <LeftRailButtonElem
      title={title}
      kind={small ? 'small' : undefined}
      type={selected ? 'primary' : 'ghost'}
      icon={iconElement}
      onClick={onClick}
      disabled={disabled}
      style={{
        color: toggled ? theme.primaryColor : undefined,
        background: toggled ? theme.backgroundWash : undefined,
      }}
    />
  );

  if (count !== undefined) {
    res =
      count === true ? (
        <Badge dot offset={[-8, 8]} {...{onClick}}>
          {res}
        </Badge>
      ) : (
        <Badge count={count} offset={[-6, 5]} {...{onClick}}>
          {res}
        </Badge>
      );
  }

  if (title) {
    res = (
      <Tooltip title={title} placement="right">
        {res}
      </Tooltip>
    );
  }

  return res;
}