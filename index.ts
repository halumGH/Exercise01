/*
1. Write a code to find area of rectangle
*/
let _rec_length: number = 10;           //the length of the rectangle variable
let _rec_width: number = 5;             //the width of the rectangle variable
let _rec_area: number = 0;              //the area of the rectangle variable (initial value is 0)

_rec_area = _rec_length * _rec_width;   //the formula of rectangle area = length * width

console.log(_rec_area);                 //display the area on the console


/*
2. Write a code to find perimeter of rectangle
*/
let _rec_perimeter: number = 0;                             //the perimeter of the rectangle variable (initial value is 0)

_rec_perimeter = (_rec_length * 2) + (_rec_width * 2);      //the formula of rectangle perimeter = (length * 2) + (width * 2)

console.log(_rec_perimeter);                                //display the area on the console


/*
3. Write a code to find diameter, circumference and area of a circle
*/
const _phi:number = 3.14159;                            //the phi number constant
let _cir_radius: number = 5;                            //the radius of the circle variable
let _cir_diameter: number = 0;                          //the diameter of the circle variable (initial value is 0)
let _cir_circumtance: number = 0;                       //the circumtance of the circle variable (initial value is 0)
let _cir_area: number = 0;                              //the area of the circle variable (initial value is 0)

_cir_diameter = _cir_radius * 2;                        //the formula of circle diameter = radius * 2
_cir_circumtance = _cir_diameter * _phi;                //the formula of circle circumference = radius * 2 * phi = diameter * phi
_cir_area = (_cir_circumtance * _cir_radius) / 2;       //the formula of circle area = (radius * 2 * phi * radius) / 2 = (circumtance * radius) / 2

console.log(_cir_diameter.toFixed(5));                  //display the diameter on the console
console.log(_cir_circumtance.toFixed(5));               //display the circumtance on the console
console.log(_cir_area.toFixed(5));                      //display the area on the console


/*
4. Write a code to find angles of triagle if two angles are given
*/
const _tri_totalangle: number = 180;                                        //total angel of triangle constant
let _tri_angle1: number = 80;                                               //angle 1 of the triangle variable
let _tri_angle2: number = 65;                                               //angle 2 of the triangle variable
let _tri_ReminingAngle: number = 0;                                         //angle 3 of the triangle variable (initial value is 0)

_tri_ReminingAngle = _tri_totalangle - (_tri_angle1 + _tri_angle2);        //the formula of circle diameter = radius * 2

console.log(_tri_ReminingAngle);                                           //display the remining angel on the console


/*
5. Write a code to convert days to years, months and days (Notes: 1 year: 365 days, 1 month: 30 days)
*/
const _DaysInYear: number = 365;
const _DaysInMonth: number = 30;
let _year: number = 0;
let _month: number = 0;
let _day: number = 400;

_year = Math.floor(_day / _DaysInYear);
_month = Math.floor((_day % _DaysInYear) / _DaysInMonth);
_day = Math.floor((_day % _DaysInYear) % _DaysInMonth);

console.log(_year + " year, " + _month + " month, " + _day + " day");

/*
6. Write a code to get difference between dates in days
*/
let _date1: Date = new Date("2022-01-20");
let _date2: Date = new Date("2022-01-22");
let _DayDiff: number = (_date2.getTime() - _date1.getTime()) / (24 * 3600 * 1000);

console.log(_DayDiff);
