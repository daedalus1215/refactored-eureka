import SongItem from '../SongItem.vue';
import { RouterLinkStub, shallowMount } from '@vue/test-utils';

describe('SongItem.vue', () => {
    test('should render song.display_name', () => {
        // Arrange
        const song = {
            display_name: 'test',
        }

        // Act
        const wrapper = shallowMount(SongItem, {
            props: {
                song,
            },
            global: {
                components: {
                    'router-link': RouterLinkStub
                }
            }
        });

        // Assert
        const actualAuthor = wrapper.find('.text-gray-500');
        expect(actualAuthor.text()).toBe(song.display_name);
    });
});