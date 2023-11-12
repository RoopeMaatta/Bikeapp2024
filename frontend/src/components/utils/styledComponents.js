import { styled } from '@mui/system';

// Utility for styling numvers and units in a conversion function

export const StyledNumber = styled('span')(({ theme }) => ({
  ...theme.typography.h3,
}));

export const StyledUnit = styled('span')(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.custom.colors.middleGreyInfoElement,
}));
