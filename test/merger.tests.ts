import { assert } from "chai"

import { Merge } from '../src/merger'

describe("Merger tests", () => {
	it("2 empty array inputs", () => {
		assert.deepEqual(Merge.merge([], []), []);
	});
	it("Only left input is empty", () => {
		const arr = [0, 1, 2, 3];
		assert.deepEqual(Merge.merge([], arr), arr);
	});
	it("Only right input is empty", () => {
		const arr = [0, 1, 2, 3];
		assert.deepEqual(Merge.merge(arr, []), arr);
	});
	
	it("Merge([1], [2, 3])", () => {
		assert.deepEqual(Merge.merge([1], [2, 3]), [1, 2, 3]);
	});
	it("Merge([1, 2], [3])", () => {
		assert.deepEqual(Merge.merge([1, 2], [3]), [1, 2, 3]);
	});
	
	it("Merge([1, 2, 3], [4, 5, 6])", () => {
		assert.deepEqual(Merge.merge([1, 2, 3], [4, 5, 6]),
			[1, 2, 3, 4, 5, 6]);
	});
	it("Merge([1, 3, 5], [2, 4, 6])", () => {
		assert.deepEqual(Merge.merge([1, 3, 5], [2, 4, 6]),
			[1, 2, 3, 4, 5, 6]);
	});
	it("Merge([0, 3], [1, 2, 4])", () => {
		assert.deepEqual(Merge.merge([0, 3], [1, 2, 4]),
			[0, 1, 2, 3, 4]);
	});
	
	it("Merge([1, 1, 1], [1, 1, 1, 1])", () => {
		assert.deepEqual(Merge.merge([1, 1, 1], [1, 1, 1, 1]),
			[1, 1, 1, 1, 1, 1, 1]);
	});
	it("Merge([3, 3, 3, 3], [1, 2, 4])", () => {
		assert.deepEqual(Merge.merge([3, 3, 3, 3], [1, 2, 4]),
			[1, 2, 3, 3, 3, 3, 4]);
	});
});