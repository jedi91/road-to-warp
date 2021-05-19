import { Button, Drawer } from "@material-ui/core";
import React, { FC } from "react";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import SearchIcon from "@material-ui/icons/Search";
import TimelineIcon from "@material-ui/icons/Timeline";
import HomeIcon from "@material-ui/icons/Home";
import useStyles from "./styles";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface NavigationDrawerProps {
  open?: boolean;
  onClose?: () => void;
}

const NavigationDrawer: FC<NavigationDrawerProps> = ({
  open = false,
  onClose = () => {},
}) => {
  const styles = useStyles();
  return (
    <Drawer className={styles.drawer} open={open} onClose={onClose}>
      <Button
        className={styles.drawerButton}
        startIcon={<HomeIcon />}
        onClick={() => window.open("/", "_self")}
      >
        Home
      </Button>
      <Button
        className={styles.drawerButton}
        startIcon={<SearchIcon />}
        onClick={() => window.open("/research", "_self")}
      >
        Research Center
      </Button>
      <Button
        className={styles.drawerButton}
        startIcon={<MenuBookIcon />}
      >
        Learning Portal
      </Button>
      <Button
        className={styles.drawerButton}
        startIcon={<TimelineIcon />}
      >
        Timeline
      </Button>
    </Drawer>
  );
};

export default NavigationDrawer;
