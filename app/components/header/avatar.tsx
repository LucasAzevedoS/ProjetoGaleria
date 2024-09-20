"use client";
import {
  Group,
  Button,
  UnstyledButton,
  Text,
  rem,
  Avatar,
  Card,
  Popover,
  Space,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import classes from "./header.module.css";
import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const stats = [
  { value: "34K", label: "Followers" },
  { value: "187", label: "Follows" },
  { value: "1.6K", label: "Posts" },
];
export default function AvatarLogin() {
  const { data: session } = useSession();
  return (
    <>
      {session ? (
        <Group>
          <Popover
            width={400}
            zIndex={1000001}
            position="bottom"
            withArrow
            shadow="md"
          >
            <Popover.Target>
              <UnstyledButton className={classes.user}>
                <Group>
                  <Avatar
                    src={
                      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
                    }
                    radius="xl"
                  />

                  <div style={{ flex: 1 }}>
                    <Text size="sm" fw={500}>
                      {session ? session.user.name : "Harriette Spoonlicker"}
                    </Text>

                    <Text c="dimmed" size="xs">
                      hspoonlicker@outlook.com
                    </Text>
                  </div>

                  <IconChevronRight
                    style={{ width: rem(14), height: rem(14) }}
                    stroke={1.5}
                  />
                </Group>
              </UnstyledButton>
            </Popover.Target>
            <Popover.Dropdown>
              <AvartarContent />
            </Popover.Dropdown>
          </Popover>
        </Group>
      ) : (
        <></>
      )}
    </>
  );
}

export function AvartarContent() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text ta="center" fz="lg" fw={500}>
        {stat.value}
      </Text>
      <Text ta="center" fz="sm" c="dimmed" lh={1}>
        {stat.label}
      </Text>
    </div>
  ));
  return (
    <Card withBorder padding="xl" radius="md" className={classes.card}>
      <Card.Section
        h={80}
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)",
        }}
      />
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        Bill Headbanger
      </Text>
      {/* <Text ta="center" fz="sm" c="dimmed">
                    Fullstack engineer
                    </Text> */}
      <Group mt="md" justify="center" gap={30}>
        {items}
      </Group>
      <Button fullWidth radius="md" mt="xl" size="md" variant="default">
        Cadastro
      </Button>
      <Button fullWidth radius="md" mt="sm" size="md" variant="default">
        Perfil
      </Button>
      <Button fullWidth radius="md" mt="sm" size="md" variant="default">
        QR-Code
      </Button>
      <Button
        fullWidth
        radius="md"
        mt="sm"
        size="md"
        variant="transparent"
        onClick={() => signOut()}
      >
        Sair
        <Space m="sm"></Space>
        <LogOut />
      </Button>
    </Card>
  );
}
