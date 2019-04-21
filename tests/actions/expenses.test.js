import {
  addExpense,
  removeExpense,
  editExpense
} from "../../src/actions/expenses";

test("should check for remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("Should check for edit expense action ojbect", () => {
  const action = editExpense("abc123", "New value");
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    updates: "New value"
  });
});

test("should setup and expense action with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 1500,
    createdAt: 1000,
    note: "This was last months rent"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default value", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
