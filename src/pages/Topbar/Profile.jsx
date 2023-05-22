





// import React, { useState } from "react";
// // import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

// import { IconButton } from "@mui/material";
// import { Menu, MenuItem } from "@mui/material";

// export default function Setting() {
//   const MenuItems = [
//     {
//       title: "My Profile",
//     },
//     {
//       title: "Create Account",
//     },
//     {
//       title: "Create Site User Account",
//     },
//     {
//       title: "Manage Directory List",
//     },
//     {
//       title: "Check Email content",
//     },
//     {
//       title: "Manage Auto Save Content",
//     },
//     {
//       title: "Site Logout",
//     },
//     {
//       title: "Logout",
//     },
//   ];
//   const [anchorEl, setAnchorEl] = useState(null);
//   const handleClick = (e) => {
//     setAnchorEl(e.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div className="relative">
//       <IconButton
//         aria-controls="simple-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//         aria-label="Open to show more"
//         title="Open to show more"
//       >
//         <PersonOutlinedIcon />
//       </IconButton>
//       <Menu
//         id="simple-menu"
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         className="absolute mt-12"
//       >
//         {MenuItems.map((item) => (
//           <MenuItem onClick={handleClose} key={item.title} value={item.title}>
//             {item.title}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }
