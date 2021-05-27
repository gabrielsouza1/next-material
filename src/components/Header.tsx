import { AppBar, Toolbar, Typography } from '@material-ui/core';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';

import useStyles from '../styles/components/Header/material-styled';

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Typography className={classes.typographyStyles}>Header Logo</Typography>
        <AcUnitRoundedIcon />
      </Toolbar>
    </AppBar>
  );
}
