import { Typography } from "@mui/material";
import Link from '@mui/material/Link';

export function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.linkedin.com/in/samuel-silva-314263138">
          Samuel Silva
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }