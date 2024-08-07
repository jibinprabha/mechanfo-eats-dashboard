import { Box, CircularProgress } from '@mui/material';

export const Loader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export const ButtonLoader = () => {
  return (
    <CircularProgress  size="1.5rem" color="inherit"/>
  );
};
