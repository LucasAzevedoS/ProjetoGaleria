"use client";
import {
  ActionIcon,
  Group,
  Indicator,
  Popover,
  Tabs,
  rem,
} from "@mantine/core";
import { IconBell, IconMail, IconMailOpened } from "@tabler/icons-react";
import classes from "./Tabs.module.css";

export default function Notificacao() {
  return (
    <Group>
      <Popover
        width={400}
        zIndex={1000001}
        position="bottom"
        withArrow
        shadow="md"
      >
        <Popover.Target>
          <Group>
            <Indicator color="red" label="10" size={20} withBorder>
              <ActionIcon
                variant="default"
                size="xl"
                radius="xl"
                aria-label="Settings"
              >
                <IconBell
                  style={{ width: "70%", height: "70%" }}
                  stroke={1.5}
                />
              </ActionIcon>
            </Indicator>
          </Group>
        </Popover.Target>
        <Popover.Dropdown>
          <Tabs variant="unstyled" defaultValue="settings" classNames={classes}>
            <Tabs.List grow>
              <Tabs.Tab
                value="settings"
                leftSection={
                  <IconMail style={{ width: rem(16), height: rem(16) }} />
                }
              >
                Não Lidas
              </Tabs.Tab>
              <Tabs.Tab
                value="messages"
                leftSection={
                  <IconMailOpened style={{ width: rem(16), height: rem(16) }} />
                }
              >
                Lidas
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </Popover.Dropdown>
      </Popover>
    </Group>
  );
}
