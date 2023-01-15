import { CSSObjectWithLabel } from 'react-select';

const selectStyles = {
  control: (base: CSSObjectWithLabel) => ({
    ...base,
    background: 'var(--grey)',
    padding: '0px',
    color: 'var(--white)',
    margin: '5px 0',
    border: 'none',
    outline: 'none',
    minHeight: '32px',
    maxHeight: '3rem'
  }),
  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
    color: 'var(--light-grey)',
    height: '7rem'
  }),
  menuList: (base: CSSObjectWithLabel) => ({
    ...base,
    height: '7rem'
  }),
  valueContainer: (base: CSSObjectWithLabel) => ({
    ...base,
    background: 'var(--grey)',
    maxHeight: '3rem',
    overflow: 'auto',
    padding: '0 6px'
  }),
  input: (base: CSSObjectWithLabel) => ({
    ...base,
    margin: '0px'
  }),
  indicatorSeparator: (base: CSSObjectWithLabel) => ({
    ...base,
    display: 'none'
  }),
  indicatorsContainer: (base: CSSObjectWithLabel) => ({
    ...base,
    height: '32px'
  }),
  container: (base: CSSObjectWithLabel) => ({
    ...base,
    maxHeight: '5rem'
  })
};

export default selectStyles;
