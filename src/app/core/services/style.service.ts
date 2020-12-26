import { Injectable } from '@angular/core';

// This service is a bridge between the style sheet and the
// colours painted in the canvas

@Injectable()
export class StyleService {

    public static sun = ('--colour-sun');
    public static sand = ('--colour-sand');
    public static sky = ('--colour-sky');
    public static sea = ('--colour-sea');

    private classColors: {[key: string]: string} = {};

    constructor() {
        this.classColors = {};
    }

    public getColour = (colourVar: string): string => {
        if (!this.classColors[colourVar]) {
            const colour = getComputedStyle(document.getElementsByTagName('app-root')[0]).getPropertyValue(colourVar);
            this.classColors[colourVar] = colour;
        }
        return this.classColors[colourVar];
    }

}