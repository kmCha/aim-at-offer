function printClockwise(matrix) {
	if(!(matrix instanceof Array) || !(matrix[0] instanceof Array)) {
		return "请输入二维矩阵";
	}
	for(var i = 1, l = matrix.length; i < l; i++) {
		if(matrix[i].length !== matrix[0].length) {
			return "输入的矩阵每行长度必须相同";
		}
	}
	var rowLength = matrix.length,
		colLength = matrix[0].length,
		result = [];
	print(matrix, 0, 0, rowLength - 1, colLength - 1);
	return result;

	function print(matrix, ri, ci, rj, cj) {
		if(ri <= rj && ci <= cj) {
			var i,j;
			for(i = ci; i <= cj; i++) {
				result.push(matrix[ri][i]);
			}
			for(j = ri + 1; j <= rj; j++) {
				result.push(matrix[j][cj]);
			}
			if(j - 1 > ri && i - 1 > ci) {
				for(i = i - 2; i >= ci; i--) {
					result.push(matrix[j-1][i]);
				}
				for(j = j - 2; j > ri; j--) {
					result.push(matrix[j][i+1]);
				}
				print(matrix, ri + 1, ci + 1, rj - 1, cj - 1);
			}
			else {
				return;
			}
		}
		else {
			return;
		}
	}
}