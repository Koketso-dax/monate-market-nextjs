import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";
import { useRouter } from 'next/router';
import Link from 'next/link';

const Cart = React.forwardRef(
  
            <Link href="/cart" passHref>
              <IconButton
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
              </Link>
 
)
  

  const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const router = useRouter();
  const location = router.pathname;

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <div className={classes.grow} />
          {location === "/" && (
            <div className={classes.button}>

              

            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
