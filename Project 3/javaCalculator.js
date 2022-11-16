function javaCalculator()
{
var a = document.getElementById("val1").value;
var b = document.getElementById("val2").value;
var c = document.getElementById("val3").value;
var c1 = parseInt(a, 10);
var c2 = parseInt(b, 10);
var c3 = parseInt(c, 10);
var max = 0;
var min = 0;
var range = 0;
var median = 0;
var mean = 0;

// Finding all the values below that we need require basic math
// Finding the min
if (c1 < c2) 
{
if (c1 < c3)
min = c1;
else
min = c3;
} 
else if (c2 < c3)
min = c2;
else
min = c3;
    
// Finding the max
if (c1 > c2) 
{
if (c1 > c3)
max = c1;
else
max = c3;
} 
else if (c2 > c3)
max = c2;
else
max = c3
    
// Finding the range
range = max - min;
    
// Finding the median
median = (c1 + c2 + c3) - (max + min)
    
// Finding the mean
mean = (c1 + c2 + c3) / 3;

document.getElementById("max").innerHTML = "Max = " + max;
document.getElementById("min").innerHTML = "Min = " + min;
document.getElementById("mean").innerHTML = "Mean = " + mean;
document.getElementById("median").innerHTML = "Median = " + median;
document.getElementById("range").innerHTML = "Range = " + range;
}