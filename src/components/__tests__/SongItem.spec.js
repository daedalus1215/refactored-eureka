import SongItem from "@/components/SongItem.vue";
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import { expect } from "vitest";

describe("SongItem.vue", () => {
  test("renders song.display_name", () => {
    const song = {
      display_name: "test",
    };

    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    const compositionAuthor = wrapper.find(".text-gray-500");

    expect(compositionAuthor.text()).toBe(song.display_name);
  });

  test("renders song.docID in id attribute", () => {
    const song = {
      docID: "abc",
    };

    const wrapper = shallowMount(SongItem, {
      props: {
        song,
      },
      global: {
        components: {
        },
      },
    });

    // expect(wrapper.attributes().id).toBe(`song-id-${song.docID}`);
    expect(wrapper.classes()).toContain(`song-id-${song.docID}`);
  });
});
