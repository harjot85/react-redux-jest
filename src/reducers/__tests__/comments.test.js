import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

const MOCK_PAYLOAD = "mock comment";
it("handles actions of  type SAVE_COMMENT", () => {
    const action = {
        type: SAVE_COMMENT,
        payload: MOCK_PAYLOAD,
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual([MOCK_PAYLOAD]);
});

it("handles actions with unknown types", () => {
    const action = {};

    const newState = commentsReducer([], action);

    expect(newState).toEqual([]);
});
