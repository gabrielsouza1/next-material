import { Grid } from '@material-ui/core';
import Content from '../components/Content';
import Header from '../components/Header';

export default function Home() {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}
