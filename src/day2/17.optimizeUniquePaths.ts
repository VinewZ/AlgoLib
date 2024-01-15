/*
Here is a solution to the “Unique Paths” problem from an exercise in the previous chapter. Use memoization to improve its efficiency:
		def unique_paths(rows, columns)
			return 1 if rows == 1 || columns == 1
			return unique_paths(rows - 1, columns) + unique_paths(rows, columns - 1)
		end
*/

undefined

export default function optimizeUniquePaths(rows: number,cols: number):number{

}