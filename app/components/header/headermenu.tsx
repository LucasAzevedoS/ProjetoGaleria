"use client";
import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  Image,
  rem,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./header.module.css";
import ToggleMode from "../toggleMode";

import { useSession } from "next-auth/react";

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function HeaderPrin() {
  const { colorScheme } = useMantineColorScheme();
  const isMobile = useMediaQuery("(max-width: 50em)");
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { data: session } = useSession();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <>
      <header>
        <Group>
          {isMobile ? (
            <Image
              src={
                colorScheme != "dark"
                  ? "logo_cam_light.png"
                  : "logo_cam_dark.png"
              }
              h="40"
              w="150"
            />
          ) : (
            <Image
              src={
                colorScheme != "dark"
                  ? "logo_cam_light.png"
                  : "logo_cam_dark.png"
              }
              w="250"
            />
          )}
          {/* <Group h="100%" gap={0} visibleFrom="sm">
                <a href="#" className={classes.link}>
                  Home
                </a>
                <HoverCard
                  width={600}
                  position="bottom"
                  radius="md"
                  shadow="md"
                  withinPortal
                >
                  <HoverCard.Target>
                    <a href="#" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Painel Fotografo
                        </Box>
                        <IconChevronDown
                          style={{ width: rem(16), height: rem(16) }}
                          color={theme.colors.blue[6]}
                        />
                      </Center>
                    </a>
                  </HoverCard.Target>

                  <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                    <Group justify="space-between" px="md">
                      <Text fw={500}>Features</Text>
                      <Anchor href="#" fz="xs">
                        View all
                      </Anchor>
                    </Group>

                    <Divider my="sm" />

                    <SimpleGrid cols={2} spacing={0}>
                      {links}
                    </SimpleGrid>

                    <div className={classes.dropdownFooter}>
                      <Group justify="space-between">
                        <div>
                          <Text fw={500} fz="sm">
                            Adquira um Plano
                          </Text>
                          <Text size="xs" c="dimmed">
                            Ainda nao possui um plano? Clique aqui e Adquira o
                            seu
                          </Text>
                        </div>

                        <Button color="gray">
                          <Anchor href="./Planos" target="_blank">
                            Adquira Aqui
                          </Anchor>
                        </Button>
                      </Group>
                    </div>
                  </HoverCard.Dropdown>
                </HoverCard>
                <a href="#" className={classes.link}>
                  Registrar Galeria
                </a>
                <a href="./cadastro_cliente" className={classes.link}>
                  Registrar Cliente
                </a>
              </Group>
              <Group>
                <Burger
                  opened={drawerOpened}
                  onClick={toggleDrawer}
                  hiddenFrom="sm"
                />
                <Group></Group>
                <Group>
                  <ToggleMode />
                </Group>
              </Group>*/}
        </Group>
      </header>

      {/* <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title="Navigation"
            hiddenFrom="sm"
            zIndex={1000000}
          >
            <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
              <Divider my="sm" />

              <a href="#" className={classes.link}>
                Home
              </a>
              <UnstyledButton className={classes.link} onClick={toggleLinks}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Painel Fotografo
                  </Box>
                  <IconChevronDown
                    style={{ width: rem(16), height: rem(16) }}
                    color={theme.colors.blue[6]}
                  />
                </Center>
              </UnstyledButton>
              <Collapse in={linksOpened}>{links}</Collapse>
              <a href="#" className={classes.link}>
                Registrar Galeria
              </a>
              <a href="#" className={classes.link}>
                Registrar Cliente
              </a>

              <Divider my="sm" />

              <Group justify="center" grow pb="xl" px="md">
                <Button variant="default">Log in</Button>
                <Button>Sign up</Button>
              </Group>
            </ScrollArea>
          </Drawer> */}
    </>
  );
}
