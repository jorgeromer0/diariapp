import { Toolbar } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import { NavBar , SideBar} from "../components";

const drawerWidth = 280;

export const DiariLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}     className="animate__animated animate__fadeIn animate__faster ">
      {/*  NAVBAR */}
      <NavBar drawerWidth={drawerWidth} />

      {/* SIDEBAR drawerWidth */}
      <SideBar drawerWidth={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {/* TOOLBAR */}
<Toolbar/>
        {children}
      </Box>
    </Box>
  );
};
