"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[103],{3237:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var a=n(7294),l=n(6010),r=n(1944),i=n(5281),s=n(9460),o=n(2599),c=n(8047),m=n(7462),d=n(5999),u=n(2244),g=n(9960);function v(e){const{nextItem:t,prevItem:n}=e;return a.createElement(a.Fragment,null,a.createElement(g.Z,{style:{display:"block",marginTop:30,fontWeight:"bold"},to:"/"},"\u2190 Baca tulisan lain"),a.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,d.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&a.createElement(u.Z,(0,m.Z)({},n,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&a.createElement(u.Z,(0,m.Z)({},t,{subLabel:a.createElement(d.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0}))))}function f(){const{assets:e,metadata:t}=(0,s.C)(),{title:n,description:l,date:i,tags:o,authors:c,frontMatter:m}=t,{keywords:d}=m,u=e.image??m.image;return a.createElement(r.d,{title:n,description:l,keywords:d,image:u},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:i}),c.some((e=>e.url))&&a.createElement("meta",{property:"article:author",content:c.map((e=>e.url)).filter(Boolean).join(",")}),o.length>0&&a.createElement("meta",{property:"article:tag",content:o.map((e=>e.label)).join(",")}))}var p=n(6668);function b(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):a.push(l)})),a}function h(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=h({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function E(e){const t=e.getBoundingClientRect();return t.top===t.bottom?E(e.parentNode):t}function N(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>E(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(E(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function L(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,p.L)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function k(e){const t=(0,a.useRef)(void 0),n=L();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:i}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let l=t;l<=n;l+=1)a.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:r,maxHeadingLevel:i}),o=N(s,{anchorTopOffset:n.current}),c=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}function H(e){let{toc:t,className:n,linkClassName:l,isChild:r}=e;return t.length?a.createElement("ul",{className:r?void 0:n},t.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:l??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(H,{isChild:!0,toc:e.children,className:n,linkClassName:l}))))):null}const _=a.memo(H);function Z(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:i,maxHeadingLevel:s,...o}=e;const c=(0,p.L)(),d=i??c.tableOfContents.minHeadingLevel,u=s??c.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:l}=e;return(0,a.useMemo)((()=>h({toc:b(t),minHeadingLevel:n,maxHeadingLevel:l})),[t,n,l])}({toc:t,minHeadingLevel:d,maxHeadingLevel:u});return k((0,a.useMemo)((()=>{if(l&&r)return{linkClassName:l,linkActiveClassName:r,minHeadingLevel:d,maxHeadingLevel:u}}),[l,r,d,u])),a.createElement(_,(0,m.Z)({toc:g,className:n,linkClassName:l},o))}const x="tableOfContents_bqdL";function C(e){let{className:t,...n}=e;return a.createElement("div",{className:(0,l.Z)(x,"thin-scrollbar",t)},a.createElement(Z,(0,m.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}function I(e){let{sidebar:t,children:n}=e;const{metadata:l,toc:r}=(0,s.C)(),{nextItem:i,prevItem:m,frontMatter:d}=l,{hide_table_of_contents:u,toc_min_heading_level:g,toc_max_heading_level:f}=d;return a.createElement(o.Z,{sidebar:t,toc:!u&&r.length>0?a.createElement(C,{toc:r,minHeadingLevel:g,maxHeadingLevel:f}):void 0},a.createElement(c.Z,null,n),(i||m)&&a.createElement(v,{nextItem:i,prevItem:m}))}function y(e){const t=e.content;return a.createElement(s.n,{content:e.content,isBlogPostPage:!0},a.createElement(r.FG,{className:(0,l.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(f,null),a.createElement(I,{sidebar:e.sidebar},a.createElement(t,null))))}},198:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7294),l=n(6010),r=n(9960),i=n(5999);const s="sidebar_brwN",o="sidebarItemTitle_r4Q1",c="sidebarItemList_QwSx",m="sidebarItem_lnhn",d="sidebarItemLink_yNGZ",u="sidebarItemLinkActive_oSRm";function g(e){let{sidebar:t}=e;return a.createElement("aside",{className:"col col--3"},a.createElement("nav",null,a.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},"Navigasi"),a.createElement("ul",{className:(0,l.Z)(c,"clean-list")},a.createElement("li",{className:m},a.createElement(r.Z,{to:"/",className:d},"Halaman depan")),a.createElement("li",{className:m},a.createElement(r.Z,{to:"/tags",className:d},"Tag list")))),a.createElement("nav",null,a.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},"Useful Site"),a.createElement("ul",{className:(0,l.Z)(c,"clean-list")},a.createElement("li",{className:m},a.createElement(r.Z,{to:"https://colorhunt.co",className:d},"Color Hunt")),a.createElement("li",{className:m},a.createElement(r.Z,{to:"https://undraw.co",className:d},"unDraw")))),a.createElement("nav",{className:(0,l.Z)(s,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),a.createElement("ul",{className:(0,l.Z)(c,"clean-list")},t.items.map((e=>a.createElement("li",{key:e.permalink,className:m},a.createElement(r.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:u},e.title)))))))}}}]);