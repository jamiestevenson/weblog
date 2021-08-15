Had issue where only the last item was drawing in the rendering loop.

This seems to be related to the `this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);` being called before each item.

Moved out to only be called once and all items now render.

### More TODOs: 

- Add blog and game item things to own modules
