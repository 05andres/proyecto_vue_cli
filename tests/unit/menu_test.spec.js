jest.mock("axios", () => ({
    get: () => Promise.resolve({ data: [{ val: 1 }] })
}));
import { shallowMount } from '@vue/test-utils';
import menu_sprint2 from '@/components/menu_sprint2.vue';


describe('Testing Component props', () => {
    const wrapper = shallowMount(menu_sprint2, {
        propsData: {
            menu: 2 //passing prop to component
        }
    });

    it('checks the prop menu  ', () => {
        expect(wrapper.props().menu).toBe('First post');
    })
})