// import React from 'react';
import { addItem, deleteItem } from './actions';

describe("addItem", () => {
  it("addItem returns expected value", () => {
    const item = {"key": "value"};
    expect(addItem(item)).toEqual({
      type: "ADD",
      payload: item
    })
  });
});
describe("deleteItem", () => {
  it("addItem returns expected value", () => {
    const id = 123;
    expect(deleteItem(id)).toEqual({
      type: "DELETE",
      payload: id
    })
  });

});