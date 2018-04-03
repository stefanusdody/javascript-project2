var names = [
  "Mr. Fahri",
  "Mr. Abdul",
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hakim"
];

console.log('--level 0--')
names.forEach(function(name){
  console.log(name)
})

console.log('--level 1--')
var mr = names.filter(word => word.startsWith("Mr."));

mr.forEach(function(mr){
  console.log(mr + " (male) ")
})

console.log('--level 2--')
var mrs = names.filter(word => word.startsWith("Mrs."))

mrs.forEach(function(mrs){
  console.log(mrs + " (female)")
})

console.log('--level 3--')

function search_name(keyword){
  var found = names.find(word => word.includes(keyword))
  return found
}
console.log(search_name("Abdul"))

console.log('--level 4--')

var names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
var names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];

var names3 = names1.concat(names2)

console.log(names3)

names3.forEach(function(names3){
  console.log(names3)
})

console.log('--level 5--')

var names = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim"
];

var joint_array = names.filter(word => typeof word == 'string')

console.log(joint_array.join(","))
