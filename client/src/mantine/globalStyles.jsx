import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  navBarTitle: {
    padding: `0px 0px 0px 30px`,
    order: 2,
    color: "#2b2a2a",
  },
  navBarHeader: {
    backgroundColor: "##3394e8",
  },
  container: {
    px: "10px",
    size: "max-width",
  },
  pageGrid: {
    px: `10`,
    size: `max-width`,
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
