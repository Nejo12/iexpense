import moment from "moment";
import filtersReducers from "../../src/reducers/filters";

test("Should setup default filter values", () => {
  const state = filtersReducers(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  });
});

test("Should set sortBy to amount", () => {
  const state = filtersReducers(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Should set sortBy to Date", () => {
  const currentState = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined
  };
  const action = { type: "SORT_BY_DATE" };
  const state = filtersReducers(undefined, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("Should set Text Filter", () => {
  const text = "This is my filter";
  const action = {
    type: "SET_TEXT_FILTER",
    text
  };
  const state = filtersReducers(undefined, action);
  expect(state.text).toBe(text);
});

test("Should set startDate filter", () => {
  const startDate = moment().startOf("month");
  const action = {
    type: "SET_START_DATE",
    startDate
  };
  const state = filtersReducers(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test("SHould set endDate filter", () => {
  const endDate = moment().endOf("month");
  const action = {
    type: "SET_END_DATE",
    endDate
  };
  const state = filtersReducers(undefined, endDate);
  expect(state.endDate).toEqual(endDate);
});
