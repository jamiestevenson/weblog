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
        body: "## TODOs \n\n Parking the weblog for the moment to move onto ngrx and a small game idea. \n\n Things to come back to: \n\n- Parse posts from individual files\n\n- Automatic index building\n\n- Tags and filters\n\n- Add  tags to post renderer"
    },
    {
        id: '5',
        date: "2020-10-14",
        title: "Sample Blog Post Five",
        body: "This is some content for the blog post"
    }
];