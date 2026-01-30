// 1. Luas Persegi Panjang (Rectangle Area)
let length: number = 5;
let width: number = 3;
console.log(length * width); // 15

// 2. Keliling Persegi Panjang (Rectangle Perimeter)
console.log(2 * (length + width)); // 16

// 3. Lingkaran (Circle)
let radius: number = 5;
// Diameter
let diameter: number = 2 * radius;
let circumference: number = diameter * 3.14;
let area: number = 3.14 * radius * radius;
console.log(diameter, circumference, area); // 10, 31.4, 78.5

// 4. Sudut Segitiga (Triangle Angles)
let angles: number = 180 - 65 - 80;
console.log(angles); // 35

// 5. Konversi Hari ke Tahun/Bulan/Hari˜
let converYear: number = 400;
let daysRemaining: number = converYear % 365;
let days: number = daysRemaining % 30;
let month: number = Math.floor(daysRemaining / 30);
let year: number = Math.floor(converYear / 365);
console.log(`${year} year, ${month} month, ${days} days`); // 1 year, 1 month, 5 days

// 6. Selisih Tanggal
let date1: Date = new Date('2022-01-20');
let date2: Date = new Date('2022-01-22');
let bedaMilidetik: number = date2.getTime() - date1.getTime();
let satuhari: number = 1000 * 60 * 60 * 24;
let bedahari: number = bedaMilidetik / satuhari;
console.log(`${bedahari} hari`); // 2 hari