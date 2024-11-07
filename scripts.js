// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// Exercises

// 1. **ForEach Basics**: Use `forEach` to log each name and each province to the console. Then, log each name with a matching province in the format "Name (Province)".

let newArray = [];
names.forEach((name) => {
  newArray.push(name);
  console.log(name);
});
provinces.forEach((province) => {
  newArray.map((item) => `${item} (${province})`);
  console.log(province);
});

newArray.forEach((item) => console.log(item));

// 2. **Uppercase Transformation**: Use `map` to create a new array of province names in all uppercase. Log the new array to the console.

console.log(provinces.map((province) => province.toUpperCase()));

// 3. **Name Lengths**: Create a new array using `map` that contains the length of each name.

console.log(names.map((name) => name.length));
