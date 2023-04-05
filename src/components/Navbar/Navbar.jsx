import { useState } from "preact/hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
  rem,
  Box,
  Button,
  Image,
  Text,
  Drawer,
  Avatar,
  UnstyledButton,
  Menu,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconWorld,
  IconLogout,
  IconHeart,
  IconStar,
  IconHomeEdit,
  IconSettings,
  IconSwitchHorizontal,
  IconChevronDown,
  IconUserCircle,
} from "@tabler/icons-preact";
import { userData, logout } from "../../store/appState";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";

import logo from "../../assets/images/logo.png";

const useStyles = createStyles((theme) => ({
  inner: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  actions: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
  burger: {
    marginRight: theme.spacing.md,
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

const links = [
  { label: "login", link: "/login" },
  { label: "signup", link: "/signup" },
];
export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);
  const [opened2, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].label);
  const { classes, theme, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const avatarUrl = userData.value?.attributes?.profilePicUrl;
  const role = userData.value?.attributes?.role;
  const items = links.map((link) => (
    <Box
      component={Link}
      key={link.label}
      to={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.label,
      })}
      onClick={() => {
        setActive(link.label);
      }}
    >
      {link.label}
    </Box>
  ));

  return (
    <>
      <Header>
        <Container className={classes.inner} h={80}>
          <Burger
            opened={opened}
            onClick={() => {
              toggle();
              open();
            }}
            size="sm"
            className={classes.burger}
          />

          <Group
            spacing={3}
            position="center"
            component={Link}
            to="/"
            td="none"
          >
            <Text c="blue" ff="Times New Roman" fz={40}>
              My{" "}
            </Text>
            <Box w={60}>
              {" "}
              <Image src={logo} alt="logo" />
            </Box>

            <Text c="blue" ff="Times New Roman" fz={40}>
              ome
            </Text>
          </Group>

          <Group
            spacing={10}
            className={classes.actions}
            position="center"
            noWrap
          >
            {!userData.value?.id ? (
              <Group spacing={2}>{items}</Group>
            ) : (
              <Menu
                width={260}
                position="bottom-end"
                transitionProps={{ transition: "pop-top-right" }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
              >
                <Menu.Target>
                  <UnstyledButton
                    className={cx(classes.user, {
                      [classes.userActive]: userMenuOpened,
                    })}
                  >
                    <Group spacing={7}>
                      {avatarUrl ? (
                        <Avatar
                          src={avatarUrl}
                          alt="user avatar picture"
                          radius="xl"
                          size={42}
                        />
                      ) : (
                        <IconUserCircle size={22} />
                      )}
                      <Text
                        weight={500}
                        size="sm"
                        sx={{ lineHeight: 1 }}
                        mr={3}
                      >
                        Hi, {userData.value?.attributes?.firstName}
                      </Text>
                      <IconChevronDown size={rem(12)} stroke={1.5} />
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    icon={
                      <IconHeart
                        size="0.9rem"
                        color={theme.colors.red[6]}
                        stroke={1.5}
                      />
                    }
                  >
                    Liked Properties
                  </Menu.Item>
                  <Menu.Item
                    icon={
                      <IconStar
                        size="0.9rem"
                        color={theme.colors.yellow[6]}
                        stroke={1.5}
                      />
                    }
                  >
                    Saved Searches
                  </Menu.Item>
                  {role !== "viewer" && (
                    <Menu.Item
                      icon={
                        <IconHomeEdit
                          size="0.9rem"
                          color={theme.colors.blue[6]}
                          stroke={1.5}
                        />
                      }
                    >
                      Manage Ads.
                    </Menu.Item>
                  )}

                  <Menu.Label>Settings</Menu.Label>
                  <Menu.Item icon={<IconSettings size="0.9rem" stroke={1.5} />}>
                    Account settings
                  </Menu.Item>

                  <Menu.Item
                    icon={<IconLogout size="0.9rem" stroke={1.5} />}
                    onClick={() => logout()}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )}
            <ActionIcon size="lg">
              <IconWorld size="2rem" stroke={1.5} />
            </ActionIcon>
            <ThemeToggler />
            <Button
              component={Link}
              to="/Listwithus"
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              List With Us
            </Button>
          </Group>
        </Container>
      </Header>
      <Drawer
        opened={opened2}
        size={300}
        onClose={() => {
          close();
          toggle();
        }}
        title="My Home"
      >
        <Text c="blue" component={Link} to="adminpanel/addproperty">
          Add Property
        </Text>
        <Text c="blue" component={Link} to="/signupagent">
          Add Agent
        </Text>
        <Text c="blue" component={Link} to="/signupagency">
          Add Agency
        </Text>
        <Text c="blue" component={Link} to="/login">
          login
        </Text>
        <Button onClick={() => logout()}>logout</Button>
      </Drawer>
    </>
  );
}
