import React from "react";
import { shallow } from "enzyme";
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from "../fixtures/expenses";

// setting 'jest globals 'to avoid repetition (extremely helpful)
let startAddExpense, history, wrapper;
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <AddExpensePage startAddExpense={startAddExpense} history={history} />
  );
});

test("Should render adExpensepage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("Should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});