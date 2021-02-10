import React from 'react';
import Table from './index';
import ReactDOM from 'react-dom';
import Enzyme , {render} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });

it('renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />,div);
    expect(div).toMatchSnapshot();
});

// it('renders Table correctly', () => {
//     const value = 1
//     const wrapper = render(<Table quantity={value}/>);
//     if(value){
//         expect(wrapper.find('.tableTitle').text()).toBe('Resultados de la búsqueda')
//     }else{
//         expect(wrapper.find('.tableTitle').text()).toBe('No hay resultados de la búsqueda')
//     }
    
// });