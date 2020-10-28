
// This class is a bridge between the style sheet and the
// colours painted in the canvas

import { createElementCssSelector } from '@angular/compiler';

export class StyleHelper {

    private classColors : {[key: string] : string};

    constructor() {
        this.classColors = {};
    }

    getColor(colourVar: string): string {
        if (!this.classColors[colourVar]) {
            const colour = getComputedStyle(document.getElementsByTagName('app-root')[0]).getPropertyValue(colourVar);
            this.classColors[colourVar] = colour;
        }
        return this.classColors[colourVar];
    }

}