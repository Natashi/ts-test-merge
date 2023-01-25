export module Merge {
	// array1 and array2 must be already sorted
	export function merge(array1: number[], array2: number[]): number[] {
		let len1 = array1.length;
		let len2 = array2.length;
	
		let i = 0, j = 0, k = 0;
		let res: number[] = new Array(len1 + len2);
	
		while (i < len1 && j < len2) {
			// Do while both arrays still have elems left
			let bArray1 = array1[i] < array2[j];
			res[k++] = bArray1 ? array1[i] : array2[j];
		
			if (bArray1)
				i++;
			else j++;
		}
		while (i < len1) {
			// Array 2 exhausted, Array 1 still have elems left
			res[k++] = array1[i];
			i++;
		}
		while (j < len2) {
			// Array 1 exhausted, Array 2 still have elems left
			res[k++] = array2[j];
			j++;
		}
	
		return res;
	}
}