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



  

  const Navbar = (totalItems) => {
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
             <IconButton ref={location+"cart"} 
                aria-label="Show cart items"
                color="inherit"
                className="FancyIconButton"
                >
                <Badge badgeContent={totalItems} color="secondary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
