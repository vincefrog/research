// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import Tailwind CSS
require("~/main.css");

//Remark Syntax Highlighting
// first install: "gridsome-plugin-remark-prismjs-all": "^0.4.8" then uncomment:
// require("gridsome-plugin-remark-prismjs-all/themes/night-owl.css");
// require("prismjs/plugins/line-numbers/prism-line-numbers.css");
// require("prismjs/plugins/command-line/prism-command-line.css");

import DefaultLayout from "~/layouts/Default.vue";

require("~/assets/style/custom.scss");

export default function(Vue, { router, head, isClient }) {
  head.meta.push({
    httpEquiv: 'Content-Security-Policy',
    content: 'self'
  })
  //speadsize head script.
  // TODO add a condition for not doing it on local env, something like `if (location.hostname !== "localhost" && location.hostname !== "127.0.0.1")`
  head.script.push({
    src: '/speedsize-local.js',
    body: true
  })


  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  
}
