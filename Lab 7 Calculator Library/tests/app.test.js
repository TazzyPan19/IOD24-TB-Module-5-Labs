const request = require("supertest");
const app = require("../main");

describe("Calculator Routes", () => {
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
