import { saveComment } from "actions";
import { SAVE_COMMENT } from "actions/types";

describe("saveComment", () => {
    const MOCK_PAYLOAD = "New Mock Comment";

    it("has the correct type", () => {
        const action = saveComment();

        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it("has the correct payload", () => {
        const action = saveComment(MOCK_PAYLOAD);

        expect(action.payload).toEqual(MOCK_PAYLOAD);
    });
});
