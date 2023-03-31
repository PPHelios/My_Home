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
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconWorld } from "@tabler/icons-preact";

import { ThemeToggler } from "../ThemeToggler/ThemeToggler";

import logo from "../../assets/images/logo.png";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
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

  burger: {
    marginRight: theme.spacing.md,
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
  const { classes, cx } = useStyles();

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
        <Container className={classes.inner} h={80} fluid>
          <Burger
            opened={opened}
            onClick={() => {
              toggle();
              open();
            }}
            size="sm"
            className={classes.burger}
            mr="auto"
          />

          <Group
            mr="auto"
            pl={280}
            spacing={3}
            position="center"
            component={Link}
            to="/"
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
            <Group spacing={2}>{items}</Group>
            <ActionIcon size="lg">
              <IconWorld size="2rem" stroke={1.5} />
            </ActionIcon>
            <ThemeToggler />
            <Button
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
            >
              Advertise
            </Button>
          </Group>
        </Container>
      </Header>
      <Drawer
        opened={opened2}
        onClose={() => {
          close();
          toggle();
        }}
        title="My Home"
      >
        <Text c="blue" component={Link} to="/add">
          Add Property
        </Text>
        <Text c="blue" component={Link} to="/addAgent">
          Add Agent
        </Text>
      </Drawer>
    </>
  );
}
