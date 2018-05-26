import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

it('should display title via renderer', () => {
    const appTitle = renderer.create(<App />).root.findByProps({id: 'title'}).children[0];

    expect(appTitle).toBe('Poopy Taters!');
});

it('should display title via enzyme', () => {
    const appTitle = shallow(<App />).find('#title').text();

    expect(appTitle).toBe('Poopy Taters!');
});