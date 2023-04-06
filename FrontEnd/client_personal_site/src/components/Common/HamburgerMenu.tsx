import { ReactNode, useState, Children } from "react";
import { IconButton, Menu, MenuItem } from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

export const HamburgerMenu = ({
  children
} : {
  children: ReactNode[]
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const childrenArr: ReactNode[] = Children.toArray(children);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="menu-button"
        onClick={handleClick}
      >
        {anchorEl
        ? <MenuOpenIcon />
        : <MenuIcon />
        }
      </IconButton>
      <Menu
        id="menu-list"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {childrenArr.map((child) =>
          <MenuItem onClick={handleClose}>{child}</MenuItem>
        )}
      </Menu>
    </>
  );
}