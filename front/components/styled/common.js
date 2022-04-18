const sizes = {
  mobileStart: '270px',
  mobileEnd: '500px', // nav at bottom
  tabletStart: '500px',
  tabletEnd: '1000px', // nav at left side
};

export const devices = {
  mobile: `(min-width: ${sizes.mobileEnd})`,
  tablet: `(min-width: ${sizes.tabletEnd})`,
};
