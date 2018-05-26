/**
 * this is a stupid thing airbnb did to an otherwise nice module
 * as are magic files like the one you're currently reading
 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });