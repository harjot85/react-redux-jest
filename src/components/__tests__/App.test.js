import { shallow } from "enzyme";
import React from "react";
import App from "../App";
import  CommentBox  from "components/commentBox";
import { CommentList } from "components/commentList";

let wrapper;
beforeEach(() => {
    wrapper = shallow(<App />);
});

it("shows a comment box", () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("shows a comment List", () => {
    expect(wrapper.find(CommentList).length).toEqual(1);
});
