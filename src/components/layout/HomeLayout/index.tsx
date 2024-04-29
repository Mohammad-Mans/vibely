import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  InputBase,
  styled,
  Tab,
  Tabs,
  Box,
  Avatar,
  Fade,
  alpha,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/HomeRounded";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideoRounded";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import VideogameAssetRoundedIcon from "@mui/icons-material/VideogameAssetRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import ChatIcon from "@mui/icons-material/Chat";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import Logo from "../../../assets/Logo/Vibely-Logo-Filled.png";
import { Outlet, useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "32px",
  backgroundColor: theme.palette.darkBg.main,
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: alpha(theme.palette.common.black, 0.6),
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 2, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2.5)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  "& input::placeholder": {
    color: alpha(theme.palette.common.black, 0.6),
    opacity: 1,
  },
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  margin: "6.5px 4px",
  padding: "8px 14px",
  borderRadius: "16px",
  "&:hover": {
    backgroundColor: theme.palette.darkBg.main,
    transition: "background-color 0.3s",
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: 8,
  color: "inherit",
  backgroundColor: theme.palette.elementBg.main,
  "&:hover": {
    backgroundColor: theme.palette.elementHover.main,
    transition: "background-color 0.3s",
  },
}));

const IconTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    TransitionComponent={Fade}
    enterDelay={200}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: alpha(theme.palette.common.black, 0.7),
    fontSize: 13,
    padding: "8px 12px",
    borderRadius: "8px",
  },
}));

const TabTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    classes={{ popper: className }}
    PopperProps={{
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, -5],
          },
        },
      ],
    }}
    TransitionComponent={Fade}
    enterDelay={200}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: alpha(theme.palette.common.black, 0.7),
    fontSize: 13,
    padding: "8px 12px",
    borderRadius: "8px",
  },
}));

const getCurrentTab = () => {
  let path = location.pathname;
  if (path === "/") return 0;
  else if (path === "/watch") return 1;
  else if (path === "/marketplace") return 2;
  else if (path === "/groups") return 3;
  else if (path === "/gaming") return 4;
};

const HomeLayout = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(getCurrentTab);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };

  return (
    <Box minHeight="100vh" bgcolor="darkBg.main">
      <AppBar component="header" position="fixed" color="lightBg" elevation={3}>
        <Toolbar sx={{ alignItems: "center" }} disableGutters>
          <Box
            sx={{
              width: "20%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "100%",
            }}
          >
            <IconButton
              edge="start"
              onClick={() => {
                navigate("/");
                setCurrentTab(0);
              }}
              aria-label="logo"
              sx={{
                p: 0,
                ml: "16px",
              }}
            >
              <img src={Logo} height={45} width={45} alt="Logo" />
            </IconButton>

            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Vibely"
                inputProps={{ "aria-label": "search vibely" }}
              />
            </Search>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Tabs
              value={currentTab}
              onChange={handleTabChange}
              aria-label="navigation tabs"
              indicatorColor="primary"
              TabIndicatorProps={{
                sx: {
                  height: "3.5px",
                  bottom: 0,
                },
              }}
              sx={{
                display: ["none", "flex"],
              }}
            >
              <TabTooltip title="Home">
                <StyledTab
                  icon={<HomeIcon fontSize="large" />}
                  aria-label="Home"
                  onClick={() => navigate("/")}
                />
              </TabTooltip>
              <TabTooltip title="Video">
                <StyledTab
                  icon={<OndemandVideoIcon fontSize="large" />}
                  aria-label="Videos"
                  onClick={() => navigate("/watch")}
                />
              </TabTooltip>
              <TabTooltip title="Marketplace">
                <StyledTab
                  icon={<StorefrontIcon fontSize="large" />}
                  aria-label="Marketplace"
                  onClick={() => navigate("/marketplace")}
                />
              </TabTooltip>
              <TabTooltip title="Groups">
                <StyledTab
                  icon={<GroupsRoundedIcon fontSize="large" />}
                  aria-label="Groups"
                  onClick={() => navigate("/groups")}
                />
              </TabTooltip>
              <TabTooltip title="Gaming">
                <StyledTab
                  icon={<VideogameAssetRoundedIcon fontSize="large" />}
                  aria-label="Gaming"
                  onClick={() => navigate("/gaming")}
                />
              </TabTooltip>
            </Tabs>
          </Box>

          <Box
            sx={{ width: "20%", display: "flex", justifyContent: "flex-end" }}
          >
            <IconTooltip title="Menu">
              <StyledIconButton>
                <AppsRoundedIcon />
              </StyledIconButton>
            </IconTooltip>
            <IconTooltip title="Messages">
              <StyledIconButton>
                <ChatIcon />
              </StyledIconButton>
            </IconTooltip>
            <IconTooltip title="Notifications">
              <StyledIconButton>
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon />
                </Badge>
              </StyledIconButton>
            </IconTooltip>
            <IconTooltip title="Account" placement="bottom-start">
              <IconButton
                edge="end"
                color="inherit"
                sx={{ padding: 0, mr: "16px" }}
              >
                <Badge
                  overlap="circular"
                  badgeContent={
                    <KeyboardArrowDownRoundedIcon
                      sx={{
                        width: 20,
                        height: 20,
                        border: "2.5px solid ",
                        borderColor: "lightBg.main",
                        borderRadius: "50%",
                        backgroundColor: "elementBg.main",
                      }}
                    />
                  }
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                >
                  <Avatar />
                </Badge>
              </IconButton>
            </IconTooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />

      <Box component="main">
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomeLayout;
