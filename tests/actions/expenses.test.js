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

test("Should check for editExpense action ojbect", () => {
  const action = editExpense("id", "New value");
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: expect.any(String),
    updates: "New value"
  });
});

test("should setup addExpense action with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 1500,
    createdAt: 1000,
    note: "Rent for last month"
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

test("should setup addExpense action object with default value", () => {
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
