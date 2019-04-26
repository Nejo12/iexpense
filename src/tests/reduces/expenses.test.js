import moment from "moment";
import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("Should remove expense by ID", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[2].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1]]);
});

test("Should not remove expenses if ID is not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should add an expense", () => {
  const expense = {
    id: "109",
    description: "New Lappy",
    createdAt: 20000,
    note: "",
    amount: 295000
  };
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("Should edit an expense", () => {
  const description = "Mortgage";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      description
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(description);
});

test("Should not edit an expense if id is not found", () => {
  const amount = 122000;
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    update: { amount }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("Should set expenses", () => {
  const action = {
    type: "SET_EXPENSES",
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
