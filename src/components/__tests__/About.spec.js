import { test } from 'vitest';
import { mount } from '@vue/test-utils'
import About from '../About.vue';

describe('About.vue', () => {
    test('renders inner text', () => {
        // Arrange
        const wrapper = mount(About) // allow as many chilren.

        // Act

        // Assert
        expect(wrapper.text()).toEqual('This is an about page');
    });
});