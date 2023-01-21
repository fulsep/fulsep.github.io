"use strict";(self.webpackChunkdocusaurus_blog=self.webpackChunkdocusaurus_blog||[]).push([[3015],{2870:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>m,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var t=n(7462),i=(n(7294),n(3905)),s=n(8607);n(9960);const r={slug:"form-processing-pada-reactjs",title:"Form Processing Pada ReactJS",authors:["irul"],tags:["Frontend Development","Beginner Frontend","ReactJS"],date:"2021-05-10T11:00"},m=void 0,l={permalink:"/form-processing-pada-reactjs",source:"@site/blog/2023-01-21-006-form-processing-pada-reactjs.mdx",title:"Form Processing Pada ReactJS",description:"",date:"2021-05-10T11:00:00.000Z",formattedDate:"10 Mei 2021",tags:[{label:"Frontend Development",permalink:"/tags/frontend-development"},{label:"Beginner Frontend",permalink:"/tags/beginner-frontend"},{label:"ReactJS",permalink:"/tags/react-js"}],readingTime:3.44,hasTruncateMarker:!0,authors:[{name:"Irul",title:"JavaScript Enthusiast",url:"https://github.com/fulsep",imageURL:"https://github.com/fulsep.png",key:"irul"}],frontMatter:{slug:"form-processing-pada-reactjs",title:"Form Processing Pada ReactJS",authors:["irul"],tags:["Frontend Development","Beginner Frontend","ReactJS"],date:"2021-05-10T11:00"},nextItem:{title:"Arrow Function: Hal yang harus kamu tahu!",permalink:"/hal-yang-harus-diketahui-tentang-arrow-function"}},o={authorsImageUrls:[void 0]},u=[{value:"Hal penting yang perlu diketahui saat memproses form di ReactJS",id:"hal-penting-yang-perlu-diketahui-saat-memproses-form-di-reactjs",level:2},{value:"Cara Implementasi Form di ReactJS",id:"cara-implementasi-form-di-reactjs",level:2},{value:"Memanfaatkan state",id:"memanfaatkan-state",level:3},{value:"Memanfaatkan event dari onSubmit",id:"memanfaatkan-event-dari-onsubmit",level:3},{value:"Memanfaatkan event.target.elements dari onSubmit",id:"memanfaatkan-eventtargetelements-dari-onsubmit",level:3}],d={toc:u};function p(a){let{components:e,...n}=a;return(0,i.kt)("wrapper",(0,t.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{src:"/img/blog/forms.png",alt:"forms",mdxType:"ImageCenterize"}),(0,i.kt)("p",null,"Ketika berkaitan dengan Form, ada banyak sekali cara implementasi yang perlu kita ketahui pada ReactJS. Tidak ada benar ataupun salah, selama kita dapat memproses form dengan nyaman dan mudah untuk dikelola nantinya, pemrosesan form dapat diimplementasi sesuai dengan keinginan kita."),(0,i.kt)("h2",{id:"hal-penting-yang-perlu-diketahui-saat-memproses-form-di-reactjs"},"Hal penting yang perlu diketahui saat memproses form di ReactJS"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Kita dapat menggunakan state untuk menyimpan nilai input dari form."),(0,i.kt)("li",{parentName:"ol"},"Kita dapat menggunakan event handlers seperti onChange untuk menangani perubahan pada input form."),(0,i.kt)("li",{parentName:"ol"},"Kita dapat menggunakan event handlers seperti onSubmit untuk menangani submit form."),(0,i.kt)("li",{parentName:"ol"},"Kita dapat menggunakan library seperti Formik atau React-Form untuk membuat proses penginputan form lebih mudah."),(0,i.kt)("li",{parentName:"ol"},'Pastikan untuk menambahkan atribut "name" pada setiap input untuk dapat mengambil nilai dari form tersebut.'),(0,i.kt)("li",{parentName:"ol"},"Ingat untuk meng-handle validasi dan error pada form."),(0,i.kt)("li",{parentName:"ol"},"Ingat untuk meng-handle loading state saat form sedang dikirim.")),(0,i.kt)("h2",{id:"cara-implementasi-form-di-reactjs"},"Cara Implementasi Form di ReactJS"),(0,i.kt)("h3",{id:"memanfaatkan-state"},"Memanfaatkan state"),(0,i.kt)("p",null,"Cara termudah untuk membuat form di ReactJS seperti berikut:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nconst LoginForm = () => {\n  const [email, setEmail] = useState('');\n  const [password, setPassword] = useState('');\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    console.log('Email:', email);\n    console.log('Password:', password);\n    // Tulis kode lainnya disini, seperti mengirimkan request menggunakan axios\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Email:\n        <input\n          type=\"email\"\n          value={email}\n          onChange={(event) => setEmail(event.target.value)}\n        />\n      </label>\n      <br />\n      <label>\n        Password:\n        <input\n          type=\"password\"\n          value={password}\n          onChange={(event) => setPassword(event.target.value)}\n        />\n      </label>\n      <br />\n      <button type=\"submit\">Login</button>\n    </form>\n  );\n};\n\nexport default LoginForm;\n")),(0,i.kt)("p",null,"Pada contoh di atas, komponen menggunakan hook useState untuk menyimpan nilai dari input email dan password pada state variable email dan password secara masing-masing. Fungsi handleSubmit akan dipanggil saat form dikirim dan akan mencegah aksi default dari form dan menampilkan email dan password yang dimasukkan ke dalam console."),(0,i.kt)("h3",{id:"memanfaatkan-event-dari-onsubmit"},"Memanfaatkan event dari onSubmit"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\n\nconst LoginForm = () => {\n  const [email, setEmail] = useState(\'\');\n  const [password, setPassword] = useState(\'\');\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    const formData = new FormData(event.target);\n    console.log("Email: ",formData.get("email"))\n    console.log("Password: ",formData.get("password"))\n    // Tulis kode lainnya disini, seperti mengirimkan request menggunakan axios\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Email:\n        <input\n          type="email"\n          name="email"\n          value={email}\n          onChange={(event) => setEmail(event.target.value)}\n        />\n      </label>\n      <br />\n      <label>\n        Password:\n        <input\n          type="password"\n          name="password"\n          value={password}\n          onChange={(event) => setPassword(event.target.value)}\n        />\n      </label>\n      <br />\n      <button type="submit">Login</button>\n    </form>\n  );\n};\n\nexport default LoginForm;\n')),(0,i.kt)("p",null,"Pada contoh di atas, fungsi handleSubmit akan dipanggil saat form dikirim, dan akan mencegah aksi default dari form. Kemudian akan dibuat object FormData baru dengan menuliskan event.target sebagai argumen pertama. Nilai input dapat diakses dengan menggunakan method get dengan nama input sebagai parameter."),(0,i.kt)("p",null,"Pastikan untuk menambahkan atribut name pada elemen input, sehingga nilai input dapat diakses pada event. Jika kita perhatikan, kedua input yang kita buat diatas sama dengan contoh yang sebelumnya, hanya saja dia memiliki atribut name pada setiap elemen input yang dibuat."),(0,i.kt)("p",null,"Kita juga dapat menggunakan event.target.elements untuk mengakses nilai input, namun tidak disarankan untuk menggunakannya karena tidak didukung oleh semua browser."),(0,i.kt)("h3",{id:"memanfaatkan-eventtargetelements-dari-onsubmit"},"Memanfaatkan event.target.elements dari onSubmit"),(0,i.kt)("p",null,"Meskipun tidak didukung oleh semua browser kita juga perlu mengetahui cara implementasinya bukan? berikut contohnya:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\n\nconst LoginForm = () => {\n  const [email, setEmail] = useState(\'\');\n  const [password, setPassword] = useState(\'\');\n\n  const handleSubmit = (event) => {\n    event.preventDefault();\n    const emailValue = event.target.elements.email.value;\n    const passwordValue = event.target.elements.password.value;\n    console.log("Email: ", emailValue);\n    console.log("Password: ", passwordValue);\n    // Tulis kode lainnya disini, seperti mengirimkan request menggunakan axios\n  };\n\n  return (\n    <form onSubmit={handleSubmit}>\n      <label>\n        Email:\n        <input\n          type="email"\n          name="email"\n          value={email}\n          onChange={(event) => setEmail(event.target.value)}\n        />\n      </label>\n      <br />\n      <label>\n        Password:\n        <input\n          type="password"\n          name="password"\n          value={password}\n          onChange={(event) => setPassword(event.target.value)}\n        />\n      </label>\n      <br />\n      <button type="submit">Login</button>\n    </form>\n  );\n};\n\nexport default LoginForm;\n')),(0,i.kt)("p",null,"Pada contoh di atas, fungsi handleSubmit akan dipanggil saat form dikirim, dan akan mencegah aksi default dari form. Kemudian nilai dari input akan diakses dengan mengakses properti elements dari event target, yang berisi semua elemen form, dan dengan menggunakan nama input sebagai properti. Nilai dari input diakses dengan mengambil properti value dari elemen tersebut."),(0,i.kt)("p",null,"Pastikan untuk menambahkan atribut name pada elemen input, sehingga nilai input dapat diakses pada event."),(0,i.kt)("p",null,"Semoga Bermanfaat!"))}p.isMDXComponent=!0}}]);