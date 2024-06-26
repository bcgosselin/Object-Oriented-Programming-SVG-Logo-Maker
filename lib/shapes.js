// Define Triangle Class
class Triangle {
  // initialize triangle w/ color
    constructor(color) {
      this.color = color;
    }
  
    render() {
      return `<polygon fill="${this.color}" points="150,50 100,150 200,150" />`;
    }
  }

// define Circle Class
class Circle {
  // initialize circle with color
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<circle fill="${this.color}" cx="150" cy="100" r="50" />`;
  }
}

// define Square class
class Square {
  // initialize square w color
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<rect fill="${this.color}" x="100" y="50" width="100" height="100" />`;
  }
}
  
// Export
module.exports = { Triangle, Circle, Square };
  