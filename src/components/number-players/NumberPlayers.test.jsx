import { shallow } from 'enzyme';
import { NumberPlayers } from './NumberPlayers';
import checkPropTypes from 'check-prop-types';

const defaultProps = { numPlayers: 1 };

/**
 * Function to create a ShallowWrapper to the NumberPlayers component
 * @function setup 
 * @param {number} numPlayers 
 * @returns ShallowWrapper
 */

const setup = (numPlayers) => {
  const setupProps = {...defaultProps, ...numPlayers}
  return shallow(<NumberPlayers {...setupProps} />)
};

test('does not throw an error with expected props', () => {
  const propsError = checkPropTypes(NumberPlayers.propTypes, defaultProps, 'props', NumberPlayers.name);
  expect(propsError).toBeUndefined();
});

describe('if there are no number of players selected', () => {
  test('renders without errors', () => {
    const wrapper = setup();
    const component = wrapper.find('[data-test="number-players-component"]');
    expect(component.length).toBe(1);
  });
  test('number players buttons disabled ones a number is picked', () => {

  });
  test('PlayersNames component is not show before select number of players', () => {

  });
  test('StartBubbon component is not show', () => {

  });
});

describe('if there are number of players selected', () => {

});