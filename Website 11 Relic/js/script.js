let canvas;
let ctx;
let effect;
let effectAnimation;

window.onload = function() {
    canvas = document.getElementById('c');
    ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect = new Effect(ctx, canvas.width, canvas.height);
    effect.animate(0);
}

window.addEventListener('resize', function() {
    cancelAnimationFrame(effectAnimation)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    effect = new Effect(ctx, canvas.width, canvas.height);
    effect.animate(0);
})

class Effect {
    #ctx;
    #width;
    #height;
    constructor(ctx, width, height) {
        this.#ctx = ctx;
        this.#ctx.lineWidth = 1;
        this.#width = width;
        this.#height = height;
        this.lastTime = 0;
        this.interval = 1000/60;
        this.timer = 0;
        this.cellSize = 17;
        this.gradient;
        this.#createGradient();
        this.#ctx.strokeStyle = this.gradient;
        this.radius = 5;
        this.vr = 0.03;
    }
    #createGradient() {
        this.gradient = this.#ctx.createLinearGradient(0, 0, this.#width, this.#height);
        this.gradient.addColorStop("0", "#672026");
        this.gradient.addColorStop("1", "#FF003C");
    }
    #drawLine(angle, x, y) {
        let length = 3;
        this.#ctx.beginPath();
        this.#ctx.moveTo(x, y);
        this.#ctx.lineTo(x + Math.cos(angle) * length, y + Math.sin(angle) * length);
        this.#ctx.stroke();
    }
    animate(timeStamp) {
        const deltaTime = timeStamp - this.lastTime;
        this.lastTime = timeStamp;
        if (this.timer > this.interval) {
            this.#ctx.clearRect(0, 0, this.#width, this.#height);
            this.radius += this.vr;

            for (let y = 0; y < this.#height; y += this.cellSize) {
                for (let x = 0; x < this.#width; x += this.cellSize) {
                    const angle = (Math.cos(x * 0.01) + Math.sin(y * 0.01)) * this.radius;
                    this.#drawLine(angle, x, y);
                }
            } 

            this.timer = 0;
        } else {
            this.timer += deltaTime;
        }
        effectAnimation = requestAnimationFrame(this.animate.bind(this));
    }
}
