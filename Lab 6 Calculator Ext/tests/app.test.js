const request = require("supertest");
const app = require("../main");

//NEW - Second Part II

describe("Calculator Routes Testing", () => {
  let number1 = Math.floor(Math.random() * 1_000_000);
  let number2 = Math.floor(Math.random() * 1_000_000);

  const appApiList = [
    {modifer: 'add', apiPath: '/calculator/add?num1=${number1}&num2=${number2}', result: number1 + number2,},
    {modifer: 'subtraction', apiPath: '/calculator/subtraction?num1=${number1}&num2=${number2}', result: number1 - number2,},
    {modifer: 'divide', apiPath: '/calculator/divide?num1=${number1}&num2=${number2}', result: number1 / number2,},
    {modifer: 'multiply', apiPath: '/calculator/multiply?num1=${number1}&num2=${number2}', result: number1 * number2,},
  ]
  
  appApiList.forEach((key) => {
    test(`GET /calculator/${key.modifer} => sum of numbers`, () => {
      return request(app)
        .get(`/calculator/${key.modifer}?num1=${number1}&num2=${number2}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).toEqual({
            result: key.result,
          });
        });
      });
  });
});

//NEW - First Part I

// describe("Calculator Routes", () => {
//   // generate some random numbers to test the calculator
//   let number1 = Math.floor(Math.random() * 1_000_000);
//   let number2 = Math.floor(Math.random() * 1_000_000);

//   test("GET /calculator/add => sum of numbers", () => {
//     return request(app)
//       .get(`/calculator/add?num1=${number1}&num2=${number2}`)
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .then((response) => {
//         expect(response.body).toEqual({
//           result: number1 + number2,
//         });
//       });
//     });

//   test("GET /calculator/subtraction => sum of numbers", () => {
//     return request(app)
//       .get(`/calculator/subtraction?num1=${number1}&num2=${number2}`)
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .then((response) => {
//         expect(response.body).toEqual({
//           result: number1 - number2,
//         });
//       });
//     });

//   test("GET /calculator/divide => sum of numbers", () => {
//     return request(app)
//       .get(`/calculator/divide?num1=${number1}&num2=${number2}`)
//       .expect("Content-Type", /json/)
//       .expect(200)
//       .then((response) => {
//         expect(response.body).toEqual({
//           result: number1 / number2,
//         });
//       });
//     });

//     test("GET /calculator/multiply => sum of numbers", () => {
//       return request(app)
//         .get(`/calculator/multiply?num1=${number1}&num2=${number2}`)
//         .expect("Content-Type", /json/)
//         .expect(200)
//         .then((response) => {
//           expect(response.body).toEqual({
//             result: number1 * number2,
//           });
//         });
//       });
// });
