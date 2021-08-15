Level state decoupled from rendering. Level and score data now live in redux. Rendering is separated in canvas component.

- Rendering of individual tiles is delegated to separate pseudo-classes (sort of Strategy).- Separate balls into different rendering and state 'layer'.
- Added representation for hi and low bits.
