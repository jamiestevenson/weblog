export class Square {
  private color = 'red';
  private x = 0;
  private y = 0;
  private z = 30;

  constructor(private ctx: CanvasRenderingContext2D) {

  }

  public moveRight() {
    this.x++;
    this.draw();
  }

  public draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);
  }
}
