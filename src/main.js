import Navigo from "navigo";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import ForumsPage from "./pages/forums";
import Homepage from "./pages/home";
import NewsPage from "./pages/news";
const router = new Navigo("/", { linksSelector: "a" });
// router.on("/",function(){
//   console.log('Homepage');
// });
const render = (content) => {
    // document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content.print();
};
router.on(
    {
        "/": () => {
            render(Homepage);
        },
        "/tuyen-sinh": () => {
            render(AboutPage);
        },
        "/chuong-trinh-dao-tao": () => {
            render(ContactPage);
        },
        "/tuyen-dung": () => {
            render(NewsPage);
        },
        "/goc-sinh-vien": () => {
            render(ForumsPage);
        },
    });
router.resolve();









// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
// // es 5
// function Animal(color){
//   this.color=color;
//   this.showInfo=function(){
//     console.log(this.color);
//   }
// }
// const cat = new Animal("Mau vang");
// cat.showInfo();
// // es 6
// class conVat{
//   constructor(color){
//     this.color = color;
//   }
//   showInfo(){
//     console.log(this.color);
//   }
// }
// const cat2 = new conVat("Mau hong");
// class TuongPhep {
//   constructor(name,congVatLy,congPhep){
//     this.tenTuong=name;
//     this.congVatLyTuong=congVatLy;
//     this.congPhepTuong=congPhep;
//   }
//   showInfo(){
//     console.log(`
//       ${this.tenTuong}
//       ${this.congVatLyTuong}
//       ${this.congPhepTuong}
//     `)
//   }
// }