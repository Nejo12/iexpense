import authReducer from "../../reducers/auth";

test("Should setUID for login", () => {
  const action = {
    type: "LOGIN",
    uid: "abc123"
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("Should clear UID for logout", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({ uid: "anything" }, action);
  expect(state).toEqual({});
});
