// Versi JS
const message = "Hello";


// Versi TS
const message2: string = "hello2";


// =============== STRING BUILT IN METHOD ==============
const name: string = "Budi"
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("B", "P"));
console.log(name.toLowerCase().replaceAll("b", "P"));
console.log(name.split(""));
console.log(name.concat(" ").concat(message2))
console.log(name.slice(0,3))


// ================= TEMPLATE LITERALS / TEMPLATE STRING ================
const welcome: string = "Hello";
const nama: String = "Budi";

console.log(`${welcome}`)


// ================== NUMBER BUILT IN METHOD =============
const angka: string = "4000";
console.log(angka);
console.log(Number(angka))
console.log(parseInt(angka))

const angka3: number = 5000;
console.log(angka3);
console.log(String(angka3));


// ================== DATE ================
const now: Date = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
now.setDate(10);
console.log(now.getDate());


// =========== BASIC OPERATOR ============
/*
    +
    -
    /
    *
    %
*/

console.log(1 + 1);
console.log(4 - 1);
console.log(4 * 2);
console.log(4 / 2);
console.log(9 % 2);

// ============ MODIFY IN PLACE ===========
let n: number = 4;

n = n + 2;

console.log(n += 2);


// ================= INCREMENT & DECREMENT ================
let counter: number = 3;
counter++;
console.log(counter);


// =============== POSTFIX & PREFIX ==============
let counter2: number = 2;

console.log(counter2++); //postfix
console.log(++counter2); //prefix


// ================ COMPARISON OPERATOR ==============
/*
==
===
<
>
<=
>=
*/

console.log(2 == "2");
console.log(2 === "2");
console.log(2 < 5);
console.log(5 < 5);
console.log(5 <= 5);
console.log(5 >= 5);
console.log(5 != 5);
console.log("test")


// ================ MATH ===============
// Math ceil -> MEMBULATKAN ANGKA KE ATAS
console.log(Math.ceil(4.2))

// Math floor -> MEMBULATKAN ANGKA KE BAWAH
console.log(Math.floor(4.7))

// Mathr round -> MEMBULATKAN ANGKA KE BILANGAN BULAT TERDEKAT
console.log(Math.round(4.7))

// Math MAX => mengembalikan angka  terbesar dari sekumpulan angka
console.log(Math.max(10, 17, 8, 60, 100));

// MATH MIN -> MENGEMBALIKAN ANGKA TERKECIL DARI SEKUMPULAN ANGKA
console.log(Math.min(10, 17, 8, 60, 100));

// Math abs -> menghilangkan tanda negatif
console.log(Math.abs(-700));

// Math random -> menghasilkan angka acak dari 0 - 1
console.log(Math.random());

console.log(Math.floor(Math.random() * 100 + 1);

// Angka random min value - max value
const min: number = 10;
const max: number = 27;

console.log(Math.floor(Math.random() * (max - min) + min));