import React from 'react';
import { shallow, mount } from 'enzyme';
import { NumberPlayers } from './NumberPlayers';
import checkPropTypes from 'check-prop-types';

const defaultProps = { numPlayers: 1, numPlayersPicked: true };

/**
 * Function to create a ShallowWrapper to the NumberPlayers component
 * @function setup 
 * @param {number} numPlayers 
 * @returns ShallowWrapper
 */

const setup = (numPlayers) => {
  const setupProps = { ...defaultProps, ...numPlayers }
  return shallow(<NumberPlayers {...setupProps} />)
};

test('does not throw an error with expected props', () => {
  const propsError = checkPropTypes(NumberPlayers.propTypes, defaultProps, 'props', NumberPlayers.name);
  expect(propsError).toBeUndefined();
});

describe('if there are no number of players selected', () => {

  test('renders without errors', () => {
    const wrapper = setup({ defaultProps });
    const component = wrapper.find('[data-test="number-players-component"]');
    expect(component.length).toBe(1);
  });

  test('button two players is active', () => {
    const wrapper = setup();
    const buttonTwoComponent = wrapper.find("[data-test='button-two']");
    expect(buttonTwoComponent.length).toBe(1)
  });

  test('button three players is active', () => {

  });

  test('button four players is active', () => {

  });

  test('initial numPlayers state is 0', () => {
    let mocksetNumPlayers = jest.fn();
    React.useState = jest.fn(() => [0, mocksetNumPlayers]);

    expect(mocksetNumPlayers).toHaveBeenCalledWith(0);
  })

});

describe('if there are number of players selected', () => {
  test('reset button set numPlayers to 0', () => {
    let mucksetNumPlayers = jest.fn();
    React.useState = jest.fn(() => [1, mucksetNumPlayers]);
    const wrapper = setup();
    const resetButton = wrapper.find('[data-test="reset-button-component"]');
    resetButton.simulate('click');
    expect(mucksetNumPlayers).toHaveBeenCalledWith(0);
  });
});

// test('button three and four disabled ones button two players is selected', () => {
//   const wrapper = setup();
//   const buttonThree = wrapper.find('[data-test="button-three"]');
//   const buttonTwo = wrapper.find('[data-test="button-two"]');
//   // buttonTwo.simulate('click'); 
//   expect(buttonThree).toBeDisabled()
// });