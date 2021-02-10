import React from 'react';
import Item from './index';
import ReactDOM from 'react-dom';
import Enzyme , {shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const div = document.createElement('div');
    const pokemons = [
        {name:"pikachu",image:"https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/340?cb=20140520015336"}
    ]
    ReactDOM.render(<Item pokemons={pokemons}/>,div);
    expect(div).toMatchSnapshot();
});

// it('renders item correctly', () => {
//     const pokemons = [
//         {name:"pikachu",image:"https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest/scale-to-width-down/340?cb=20140520015336"}
//     ]
//     const wrapper = shallow(<Item pokemons={pokemons}/>);
//     expect(wrapper.find('.itemList').length).toBe(1)
// });