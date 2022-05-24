import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navBarTitle: {
    padding: "0px 15px 0px 30p",
    color: "#2b2a2a",
  },
  navBarButton: {
    color: "#2b2a2a",
    // padding: "0px 30px 0px 30px",
    px: "30px",
    radius: "xs",
    size: "lg",
    textDecoration: "none",
  },
  navBarHeader: {
    backgroundColor: "#f2ebf5",
  },
  container: {
    px: "10px",
    size: "max-width",
  },
  pageGrid: {
    px: `10`,
    size: `max-width`,
  },
  makeRelative: {
    position: "relative",
  },
  mapStyles: {
    width: "100%",
    height: "400px",
  },
  child: {
    // assign ref to element
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));

export default useStyles;
