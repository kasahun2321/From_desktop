var bubble = {
    x: 200,
    y: 150,
    display: function () {
        stroke(255);
        strokeweight(4);
        nofill();
        ellipse(this.x, this.y, 20, 20);
    },

    move: function () {
        this.x = this.x + Random(-1, 1);
        this.y = this.y + Random(-1, 1);
    }

}
function setup() {
    createcanvas(600, 400);
}