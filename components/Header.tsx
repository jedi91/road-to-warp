import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React, { FC, useState } from "react";
import NavigationDrawer from "./NavigationDrawer";
import useStyles from "./styles";
import MenuIcon from "@material-ui/icons/Menu";

interface HeaderProps {
  /**
   * Title to display on the header
   * @default "Road to Warp"
   */
  title?: string;
}

const Header: FC<HeaderProps> = ({ title = "Road to Warp" }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const styles = useStyles();
  return (
    <header className={styles.header}>
      <AppBar position="static" className={styles.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={styles.barTitle} variant="h6">
            {title}
          </Typography>
        </Toolbar>
        <NavigationDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </AppBar>
    </header>
  );
};

export default Header;
