// Hover effect utility using theme customizations

export const hoverEffect = (theme) => ({
  '&:hover': {
    backgroundColor: theme.custom.colors.lightGreyFocus,
    borderRadius: theme.custom.borderRadius.small,
  },
});
