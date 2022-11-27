import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";

interface props {
    children?: React.ReactNode;
}

const theme = createTheme({
                              palette: {
                                  primary: {
                                      main: '#153848',
                                      contrastText: '#ffffff'
                                  },
                                  secondary: {
                                      main: '#0d6a91',
                                      contrastText: '#ffffff'
                                  },
                                  action: {
                                      disabled: '#ffffff',
                                  }
                              },
                              typography: {
                                  fontFamily: 'Montserrat, sans-serif',
                                  button: {
                                      textTransform: 'none',
                                  }
                              },
                              components: {
                                  MuiButtonBase: {
                                      defaultProps: {
                                          disableRipple: true,
                                      }
                                  },
                                  MuiButton: {
                                      styleOverrides: {
                                          root: {
                                              borderRadius: 0
                                          }
                                      }
                                  },
                                  MuiInputLabel: {
                                      variants: [
                                          {
                                              props: {},
                                              style: {
                                                  color: '#888888',
                                                  opacity: 0.8
                                              }
                                          }
                                      ]
                                  },
                                  MuiFormHelperText: {
                                      styleOverrides: {
                                          root: {
                                              margin: 0
                                          }
                                      }
                                  }
                              }
                          });

function AppThemeProvider({children}: props) {
    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export default AppThemeProvider;