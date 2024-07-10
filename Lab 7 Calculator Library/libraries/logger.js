class Logger {
  constructor() {
    this.id;
  }
  logMsg = (value) => {
    this.id = Math.floor(Math.random() * 1_000);
    console.log(`[Calculator :${this.id}]:${value}`);
  };
}

module.exports = Logger;