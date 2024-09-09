import { render, screen } from '@testing-library/react-native';
import Header from '@/components/Header/index';

describe('Component: Header', () => {
  it('should render the Header component with title', () => {
    const titleText = 'Test Header';
    render(
      <Header.Root>
        <Header.Title text={titleText} />
      </Header.Root>
    );

    const headerTitle = screen.getByText(titleText);
    expect(headerTitle).toBeTruthy();
  });

  it('should render the Header component without title', () => {
    render(<Header.Root>{/* No Header.Title component */}</Header.Root>);

    const headerRoot = screen.getByTestId('header-root');
    expect(headerRoot).toBeTruthy();
  });
});
