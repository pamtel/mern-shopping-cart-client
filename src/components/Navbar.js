import React from "react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme, useStyles } from "./styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShopIcon from "@material-ui/icons/Shop";
import MoreIcon from "@material-ui/icons/MoreVert";
import SideDrawer from "./SideDrawer";
import ColorMode from "./ColorMode";
import { useSelector } from "react-redux";

function Navbar() {
  
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  }

  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link to="/cart" className="text-decoration-none">
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={getCartCount()} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <p>Cart</p>
        </MenuItem>
      </Link>

      <Link to="/" className="text-decoration-none">
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <ShopIcon />
          </IconButton>
          <p>Shop</p>
        </MenuItem>
      </Link>
      <MenuItem>
        <ColorMode />
      </MenuItem>
    </Menu>
  );

  return (
    <ThemeProvider theme={theme}>
      <nav>
        <div className={classes.grow}>
          <AppBar position="static" primary="true">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
              >
                <SideDrawer />
              </IconButton>
              <Typography className={classes.title} variant="h6" noWrap>
                MERN Shopping Cart
              </Typography>

              <div className={classes.grow} />
              <div className={classes.sectionDesktop}>
                <Link to="/cart" className="text-decoration-none">
                  <MenuItem>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                      <Badge badgeContent={getCartCount()} color="secondary">
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                    <p>Cart</p>
                  </MenuItem>
                </Link>

                <Link to="/" className="text-decoration-none">
                  <MenuItem>
                    <IconButton
                      aria-label="show 11 new notifications"
                      color="inherit"
                    >
                      <ShopIcon />
                    </IconButton>
                    <p>Shop</p>
                  </MenuItem>
                </Link>
                <MenuItem>
                  <ColorMode />
                </MenuItem>
              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
        </div>
      </nav>
    </ThemeProvider>
  );
}

export default Navbar;