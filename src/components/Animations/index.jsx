import React, { Component } from 'react';

class Pixelation extends Component {
  constructor(props) {
    super(props);

    this.width = props.size;
    this.height = props.size;

    this.speed = 250; //ms
    this.pixelSize = 10; //px
    this.seed = new Date().getTime().toString().slice(-6) + '1111';
    this.colors = [
      '#000000',
      '#ffffff',
      '#000000',
      '#ffffff',
      '#ffffff',
      '#000000',
      '#000000',
      '#ffffff',
      '#000000',
      '#ffffff',
    ];
  }

  componentDidMount() {
    this.ctx = this.canvas.getContext('2d');
    //loop
    this.draw();
    this.update();
  }

  draw() {
    var count = 0;
    var x = 0;
    var y = 0;

    var rows = Math.round(this.height / 10);

    for (var i = 0; i < rows * rows; i++) {
      if (i > 0) {
        if (i % rows === 0) {
          x = 0;
          y = y + this.pixelSize;
        }
      }

      var newColors = [];
      for (var j = 0; j < this.seed.length; j++) {
        var num = parseInt(this.seed.charAt(j));
        newColors.push(this.colors[num]);
      }

      let random = this.colors[Math.floor(Math.random() * this.colors.length) + 0];
      this.ctx.fillStyle = random;
      this.ctx.fillRect(x, y, this.pixelSize, this.pixelSize);
      x = x + this.pixelSize;
    }
  }

  async update() {
    while (true) {
      await this.sleep(this.speed);
      this.ctx.clearRect(0, 0, 10000, 10000);
      this.draw();
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  render() {
    const { width, height } = this.props;

    return (
      <div className="pixelation">
        <canvas
          ref={(node) => (this.canvas = node)}
          id="canvas"
          width={width}
          height={height}></canvas>
        {this.props.children}
      </div>
    );
  }
}

export default Pixelation;
