import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ShopIcon from "@material-ui/icons/Shop";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Divider } from "@material-ui/core";
import ColorMode from "./ColorMode";
import { useSelector } from "react-redux";

function SideDrawer() {

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <MenuIcon ref={btnRef} colorscheme="teal" onClick={onOpen} />
      <div>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>MERN Shopping Cart</DrawerHeader>
            <Divider />

            <DrawerBody>
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
              <MenuItem >
                <ColorMode />
              </MenuItem>
            </DrawerBody>

            <DrawerFooter>
              {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}

export default SideDrawer;
