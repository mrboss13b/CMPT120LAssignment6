var n = Number

var triangleNum = function(n) {
  if (n <= 0) return 0;
  return (n * (n + 1)) / 2;
}
triangleNum(n);

var fibboNth = function(n){
	if (n>2) {
	return(n-2) + (n-1);
	}else{
	return 1;
	}
}
fibboNth(n);
