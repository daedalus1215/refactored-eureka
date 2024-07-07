import { shallowMount } from "@vue/test-utils";
import Home from '../Home.vue';
import SongItem from "../../components/SongItem.vue";

describe('Home.vue', () => {
    test('should...', () => {
        const songs = [
            {},
            {},
            {}
        ];

        const target = shallowMount(Home, {
            data() {
                return {
                    songs
                };
            },
            global: {
                mocks: {
                    $t: (message) => message // mock the translations
                }
            }
        });

        // search for all the song items
        const items = target.findAllComponents(SongItem);
        expect(items).toHaveLength(songs.length);
        items.forEach((wrapper, i ) => {
            expect(wrapper.props().song).toStrictEqual(songs[i]);
        })
    });
})