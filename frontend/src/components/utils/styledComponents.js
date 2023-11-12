import { styled } from '@mui/system';

export const StyledNumber = styled('span')(({ theme }) => ({
  ...theme.typography.h3,
  // You can add other styles here using the theme
}));

export const StyledUnit = styled('span')(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.custom.colors.middleGreyInfoElement,
  // You can add other styles here using the theme
}));
