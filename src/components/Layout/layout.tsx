import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu, Search } from '@material-ui/icons';
import React from 'react';

import { LayoutProps } from './layout.models';
import { useLayoutStyles } from './layout.styles';

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, showLayout } = props;

  const classes = useLayoutStyles();

  if (!showLayout) {
    return <React.Fragment>{children}</React.Fragment>;
  }
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Menu />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            REST to GraphQL
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <Search />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
