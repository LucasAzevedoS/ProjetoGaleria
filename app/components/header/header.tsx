import { SessionProvider } from "next-auth/react";
import HeaderPrin from "./headermenu";
import AvatarLogin from "./avatar";
import { Box, Group } from "@mantine/core";

import classes from "./header.module.css";

export default function HeaderPage() {
  return (
    <div>
      <SessionProvider>
        <Box pb={30}>
          <header className={classes.header}>
            <Group
              display="flex"
              justify="space-between"
              m="auto"
              h="90%"
              maw="1024"
            >
              <HeaderPrin /> {/* Importa o componente de login */}
              <AvatarLogin />
            </Group>
          </header>
        </Box>
      </SessionProvider>
    </div>
  );
}
