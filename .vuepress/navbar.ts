import { navbar } from 'vuepress-theme-hope';

export const enNavbar = navbar([
    // "/",

    { text: 'Môn học', icon: 'tag', link: '/tag/sinh-di-truyền/' },
    {
        text: 'Năm học',
        icon: 'calendar-week',
        prefix: '/category/',
        children: [
            { text: 'Năm 1', link: 'y1/' },
            // { text: 'Năm 2', link: 'y2/' },
            // { text: 'Năm 3', link: 'y3/' },
            // { text: 'Năm 4', link: 'y4/' },
            // { text: 'Năm 5', link: 'y5/' },
            // { text: 'Năm 6', link: 'y6/' },
        ],
    },
    //   "/demo/",
    //   {
    //     text: "Posts",
    //     icon: "pen-to-square",
    //     prefix: "/posts/",
    //     children: [
    //       {
    //         text: "Banana",
    //         icon: "pen-to-square",
    //         prefix: "banana/",
    //         children: [
    //           {
    //             text: "Banana 1",
    //             icon: "pen-to-square",
    //             link: "1",
    //           },
    //           {
    //             text: "Banana 2",
    //             icon: "pen-to-square",
    //             link: "2",
    //           },
    //           "3",
    //           "4",
    //         ],
    //       },
    //       { text: "Cherry", icon: "pen-to-square", link: "cherry" },
    //       { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
    //       "tomato",
    //       "strawberry",
    //     ],
    //   },
]);
