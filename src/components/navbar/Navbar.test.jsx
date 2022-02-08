import { shallow } from 'enzyme';
import { Navbar } from './Navbar';

const setup = () => {
  return shallow(<Navbar />);
}

test('renders without errors', () => {
  const wrapper = setup();
  const component = wrapper.find('[data-test="navbar-component"]');
  expect(component.length).toBe(1);
});

test('renders the name of the game', () => {
  const wrapper = setup();
  const component = wrapper.find('[data-test="navbar-component"]');
  expect(component.text()).toBe('Basta');
});