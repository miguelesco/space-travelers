/* eslint-disable linebreak-style */
const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px',
};

const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  lg: `(max-width: ${size.lg})`,
};

export const flex = (direction, align, justify) => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `;

export default device;
