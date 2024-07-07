import { test } from 'vitest';
import { shallowMount } from '@vue/test-utils'
import About from '../About.vue';

describe('About.vue', () => {
    test('renders inner text', () => {
        const wrapper = shallowMount(About) // don't render the children (faster)
        expect(wrapper.text()).toEqual('This is an about page');
    });
});