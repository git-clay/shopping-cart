import { findIndex, findQuantity } from "@/util/CartHelper";
const items = [
  { id: 5, quantity: 10 },
  { id: 3, quantity: 8 },
  { id: 0, quantity: 4 },
  { id: 1, quantity: 0 },
  { id: 15 },
];

describe("cartHelper - findIndex", () => {
  it("should return index of id", () => {
    const expected = 1;
    const actual = findIndex(items, items[expected].id);

    expect(actual).toBe(expected);
  });
  it("should return -1 if id does not exist", () => {
    const expected = -1;
    const actual = findIndex(items, 100000);

    expect(actual).toBe(expected);
  });
});
describe("cartHelper - findQuantity", () => {
  it("should return quantity by id", () => {
    const expected = items[1].quantity;
    const actual = findQuantity(items, items[1].id);

    expect(actual).toBe(expected);
  });
  it("should return 0 if quantity is undefined", () => {
    const expected = 0;
    const actual = findQuantity(items, items[4].id);

    expect(actual).toBe(expected);
  });
});
