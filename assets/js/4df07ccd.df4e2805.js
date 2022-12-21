"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[267],{5204:(a,e,n)=>{n.d(e,{Z:()=>i});var t=n(7294);const r=n(9521).ZP.img`
    background-color: white;
    width: 100%;
    max-height: 400px;
    object-fit: scale-down;
    margin-bottom: 20px;
`,i=a=>t.createElement(r,a)},8147:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>m,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var t=n(7462),r=(n(7294),n(3905)),i=n(5204);const l={slug:"axios-untuk-pemula",title:"Axios Untuk Pemula",authors:["irul"],tags:["Frontend Development","ReactJS","JavaScript for Frontend","Beginner Frontend"],date:"2022-12-21T10:00"},m=void 0,s={permalink:"/axios-untuk-pemula",source:"@site/blog/2022-12-21-001-axios-untuk-pemula.mdx",title:"Axios Untuk Pemula",description:"",date:"2022-12-21T10:00:00.000Z",formattedDate:"21 Desember 2022",tags:[{label:"Frontend Development",permalink:"/tags/frontend-development"},{label:"ReactJS",permalink:"/tags/react-js"},{label:"JavaScript for Frontend",permalink:"/tags/java-script-for-frontend"},{label:"Beginner Frontend",permalink:"/tags/beginner-frontend"}],readingTime:2.255,hasTruncateMarker:!0,authors:[{name:"Irul",title:"Technical Trainer @ Fazztrack",url:"https://github.com/fulsep",imageURL:"https://github.com/fulsep.png",key:"irul"}],frontMatter:{slug:"axios-untuk-pemula",title:"Axios Untuk Pemula",authors:["irul"],tags:["Frontend Development","ReactJS","JavaScript for Frontend","Beginner Frontend"],date:"2022-12-21T10:00"},nextItem:{title:"Selamat Datang!",permalink:"/selamat-datang"}},p={authorsImageUrls:[void 0]},u=[],o={toc:u};function k(a){let{components:e,...n}=a;return(0,r.kt)("wrapper",(0,t.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{src:"/img/blog/link.png",alt:"link",mdxType:"ImageCenterize"}),(0,r.kt)("p",null,"Axios adalah sebuah library JavaScript yang memungkinkan kita untuk mengirim permintaan HTTP (misalnya, untuk mengambil data dari sebuah API atau untuk mengirim data ke API) ke server."),(0,r.kt)("p",null,"Axios memudahkan kita untuk melakukan operasi HTTP tanpa harus menggunakan fitur built-in browser seperti XMLHttpRequest atau fetch."),(0,r.kt)("p",null,"Untuk menggunakan Axios, pertama-tama kita perlu memasangnya di proyek yang sedang kita kerjakan. Kita dapat melakukannya dengan menjalankan perintah npm (jika kita menggunakan npm) atau yarn (jika kita menggunakan yarn) berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install axios\n")),(0,r.kt)("p",null,"atau"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add axios\n")),(0,r.kt)("p",null,"Setelah Axios terpasang, kita dapat mengimpor library tersebut di dalam proyek kita dengan cara seperti ini:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import axios from 'axios';\n")),(0,r.kt)("p",null,"Atau, jika kita tidak menggunakan ES6 import, kita dapat menggunakan require:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const axios = require('axios');\n")),(0,r.kt)("p",null,"Setelah Axios terpasang dan diimpor ke dalam proyek kita, kita dapat mulai menggunakannya untuk mengirim permintaan HTTP. Berikut adalah contoh sederhana untuk mengirim permintaan GET ke sebuah API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"axios.get('https://api.example.com/endpoint')\n  .then(response => {\n    // handling sukses\n  })\n  .catch(error => {\n    // handling error\n  });\n")),(0,r.kt)("p",null,"Permintaan GET di atas akan mengirim permintaan HTTP ke alamat URL yang diberikan, dan kemudian akan memanggil callback then jika permintaan tersebut berhasil, atau memanggil callback catch jika terjadi error."),(0,r.kt)("p",null,"Kita juga dapat menambahkan parameter ke permintaan GET dengan cara seperti ini:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"axios.get('https://api.example.com/endpoint', {\n  params: {\n    key1: 'value1',\n    key2: 'value2'\n  }\n})\n  .then(response => {\n    // handling sukses\n  })\n  .catch(error => {\n    // handling error\n  });\n")),(0,r.kt)("p",null,"Untuk mengirim permintaan POST, kita dapat menggunakan metode post yang sama seperti get, namun dengan menambahkan data yang akan dikirim ke server sebagai argument kedua:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"axios.post('https://api.example.com/endpoint', {\n    key1: 'value1',\n    key2: 'value2'\n})\n  .then(response => {\n    // handling sukses\n  })\n  .catch(error => {\n    // handling error\n  });\n")),(0,r.kt)("p",null,"Permintaan POST di atas akan mengirimkan dalam bentuk application/json, jika kita ingin mengirimkan permintaan dalam bentuk application/x-www-form-urlencoded kita dapat menuliskannya dengan cara berikut:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const form = new URLSearchParams();\nform.append('param1', 'value1');\nform.append('param2', 'value2');\n\naxios.post('https://api.example.com/endpoint', form)\n  .then(response => {\n    // handling sukses\n  })\n  .catch(error => {\n    // handling error\n  });\n")),(0,r.kt)("p",null,"Kita juga dapat menambahkan pengaturan tambahan seperti headers atau timeout ke permintaan dengan menambahkan objek konfigurasi sebagai argument ketiga ke metode post:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"axios.post('https://api.example.com/endpoint', {\n  key1: 'value1',\n  key2: 'value2'\n}, {\n  headers: {\n    'Content-Type': 'application/json'\n  },\n  timeout: 1000\n})\n  .then(response => {\n    // handling sukses\n  })\n  .catch(error => {\n    // handling error\n  });\n")),(0,r.kt)("p",null,"Selain metode get dan post, Axios juga menyediakan beberapa metode lain yang dapat digunakan untuk mengirim permintaan HTTP seperti delete, put, dan patch. Kita dapat menggunakan metode-metode tersebut dengan cara yang sama seperti yang telah dijelaskan di atas."),(0,r.kt)("p",null,"Untuk lebih lengkapnya, kita dapat mengacu pada dokumentasi Axios di sini: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/axios/axios#readme"},"https://github.com/axios/axios")),(0,r.kt)("p",null,"Semoga membantu!"))}k.isMDXComponent=!0}}]);