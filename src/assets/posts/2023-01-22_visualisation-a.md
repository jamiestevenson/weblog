## Getting D3 working

The WHRP Visualisation tabs is supposed to show some D3 output. Initial test is to get the data piped in and the library rendering *something*.

There is a useful demo [here](https://blog.logrocket.com/data-visualization-angular-d3-js/#load-multiplep-components-page) that illustrates how to get charts on screen in a component. This let me check that the framework was working properly befoer adding complexity such as piping in my own data.

Initial targets of interest are:
- character [relationships](https://observablehq.com/@vk2425/game-of-thrones-relationship-graph) with edge-type
- [timeline](https://observablehq.com/@didoesdigital/2020-timeline) for major events

the fors direct e layout from Observable looks good, but there are some asssumption in the blob of copy-🍝 code that are not documented.

There is a step-by-step explainer [here](https://www.d3indepth.com/force-layout/) that goes through how to construct a forece directed graph in stages. This lets me check my data import as I go.