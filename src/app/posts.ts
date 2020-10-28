import { BlogPost } from './interfaces/blogPost';

export const POSTS: BlogPost[] = [
    {
        id: "1",
        date: "2020-10-14",
        title: "First Post",
        body: "Adding some initial structure to the base angular project"
    },
    {
        id: '2',
        date: "2020-10-15",
        title: "Styling and navigation",
        body: "## Styling \n\n Picked a few colours for an initial palette. \n ## Navigation \n\n Added post list page and navigation by blog id on route."
    },
    {
        id: '3',
        date: "2020-10-16",
        title: "Markdown",
        body: "Added `ngx-markdown` and `marked` to support markdown in blog post content and example component. \n\n Next step is to use the markdown rendering module in place of any other blog post rendering.\n\n Some refactoring around post rendering to have only one rendering component for posts."
    },
    {
        id: '4',
        date: "2020-10-16",
        title: "Weblog Todos",
        body: "## TODOs \n\n Parking the weblog for the moment to move onto ngrx and a small game idea. \n\n Things to come back to: \n\n- Parse posts from individual files\n\n- Automatic index building\n\n- Tags and filters\n\n- Add tags to post renderer"
    },
    {
        id: '5',
        date: "2020-10-22",
        title: "Resolved HTML Canvas Issue",
        body: "Had issue where only the last item was drawing in the rendering loop. \n\n This seems to be related to the `this.ctx.scale(BLOCK_SIZE, BLOCK_SIZE);` being called before each item. \n\n Moved out to only be called once and all items now render. \n\n ### More TODOs: \n\n - Add blog and game item things to own modules"
    },
    {
        id: '6',
        date: "2020-10-28",
        title: "Shapes and Colours",
        body: "Added round ball and proper offset for ball as it is smaller than other elements.\n\n Added helper to get CSS variables from app root element for use in canvas painting.\n\n- The logica page component needs broken out to separate components \n\n- For example, the canvas should be one container \n\n Could move on to more game-loop and collision, or adding ngrx: \n\n  - Inclined to get a level working first to inform the requirements for the store etc. \n\n- Also need to read around if ngrx is suitable for low-load game loop"
    }
];