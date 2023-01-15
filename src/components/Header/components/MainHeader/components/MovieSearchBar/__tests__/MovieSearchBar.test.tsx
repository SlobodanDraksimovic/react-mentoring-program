import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import MovieSearchBar from '../MovieSearchBar';

import * as useRouting from '../../../../../../../hooks/useRouting';

jest.spyOn(useRouting, 'default').mockReturnValue({
  navigate: jest.fn(),
  activeGenre: null,
  pathname: '',
  searchQuery: undefined,
  queryString: ''
});

describe('<MovieSearchBar />', () => {
  const setup = () => {
    const queryString = '?searchBy=genres&filter=horror';
    const route = `/search${queryString}`;
    const utils = render(
      <MemoryRouter initialEntries={[route]}>
        <MovieSearchBar />
      </MemoryRouter>
    );
    const input = screen.getByPlaceholderText('What do you want to watch?');
    const searchButton = screen.getByText('Search');

    return {
      input,
      searchButton,
      ...utils
    };
  };

  it('should render input & search button', () => {
    const { input, searchButton } = setup();

    expect(input).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('should render input with new value when user types in it', async () => {
    const user = userEvent.setup();
    const { input } = setup();
    const newInputValue = 'Changed value typed by user';

    await user.type(input, newInputValue);

    await waitFor(() => {
      expect(input).toHaveValue(newInputValue);
    });
  });

  it('should change search url param when clicking on Search button', async () => {
    const user = userEvent.setup();
    const { input, searchButton } = setup();
    const searchValue = 'Transformers';

    await user.type(input, searchValue);
    await user.click(searchButton);

    await waitFor(() => {
      expect(useRouting.default().navigate).toBeCalledTimes(1);
      expect(useRouting.default().navigate).toHaveBeenCalledWith(`/search/${searchValue}`);
    });
  });
});
