/* eslint-disable linebreak-style */
const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px',
};

const device = {
  xs: `(min-width: ${size.xs})`,
  sm: `(min-width: ${size.sm})`,
  lg: `(min-width: ${size.lg})`,
};

export const flex = (direction, align, justify) => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `;

export default device;
