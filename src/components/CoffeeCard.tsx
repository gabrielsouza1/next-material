import {
  Avatar,
  Button, Card, CardActions, CardContent, CardMedia, IconButton, Typography,
} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

import useStyles from '../styles/components/CoffeeCard/material-styled';

interface CoffeeCardProps {
  avatarSrc: string;
  title: string;
  subtitle: string;
  description: string;
  imgSrc: string;
}

export default function CoffeeCard({
  avatarSrc, title, subtitle, description, imgSrc,
}: CoffeeCardProps) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader
        avatar={(
          <Avatar src={avatarSrc} />
        )}
        action={(
          <IconButton aria-label="settings">
            <ShareRoundedIcon />
          </IconButton>
        )}
        title={title}
        subheader={subtitle}
      />
      <CardMedia
        style={{ height: '160px' }}
        image={imgSrc}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
}
