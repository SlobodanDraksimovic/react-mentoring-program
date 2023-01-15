import { CSSObjectWithLabel, ControlProps, GroupBase } from 'react-select';

import { MovieSortingOption } from '../constants';

const selectStyles = {
  control: (
    base: CSSObjectWithLabel,
    state: ControlProps<MovieSortingOption, false, GroupBase<MovieSortingOption>>
  ) => ({
    ...base,
    background: 'var(--black)',
    borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
    borderColor: state.isFocused ? '' : 'var(--grey)',
    color: 'var(--light-grey)',
    minWidth: '15rem'
  }),
  menu: (base: CSSObjectWithLabel) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
    color: 'var(--light-grey)'
  })
};

export default selectStyles;
