import React from "react";

import CommentBox from "components/commentBox";
import { mount } from "enzyme";
import Root from "Root";

let wrapper;
beforeEach(() => {
    wrapper = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapper.unmount();
});

it("has a text area and a button", () => {
    expect(wrapper.find("textarea").length).toEqual(1);
    expect(wrapper.find("button").length).toEqual(1);
});

describe("the text area", () => {
    beforeEach(() => {
        wrapper.find("textarea").simulate("change", {
            target: { value: "mock comment" },
        });
        wrapper.update();
    });

    it("has a text area that users can type in", () => {
        expect(wrapper.find("textarea").prop("value")).toEqual("mock comment");
    });

    it("clears the text area after submitting the form", () => {
        wrapper.find("form").simulate("submit");
        wrapper.update();
        expect(wrapper.find("textarea").prop("value")).toEqual("");
    });
});
