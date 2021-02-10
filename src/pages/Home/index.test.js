import React from 'react';
import App from './index';
import { act } from 'react-dom/test-utils';
import Enzyme , {mount, render} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from "enzyme-to-json";
import ReactDOM from 'react-dom';
import {searchPokemons,getPokemons} from '../../services/api'
Enzyme.configure({ adapter: new Adapter() });

jest.mock('../../services/api')

it('renders App correctly', async () => {

    const pokemon = 'ditto'
    let response = []
    response.push({name:pokemon,image:"test"})
    searchPokemons.mockReturnValue(Promise.resolve({message:response,error:false}))
    getPokemons.mockReturnValue(Promise.resolve({message:response,error:false}))
    await act( async () => {

        const wrapper = await mount(<App/>);

        expect(wrapper.find('.image').length).toBe(0)

        expect(wrapper.find('input').at(0).prop('value')).toBe("")

        wrapper.find('input').at(0).simulate('change', { target: { value: pokemon } })

        expect(wrapper.find('input').at(0).prop('value')).toBe(pokemon)
        
        wrapper.find('button').simulate('click')

        await Promise.resolve();

        wrapper.update()

        expect(wrapper.find('.image').length).toBe(1)

        var el = document.createElement( 'div' );
        el.innerHTML = wrapper.html()
        expect(el).toMatchSnapshot();
        })    
});