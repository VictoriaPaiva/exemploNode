import { Produto } from "./Produto";
 let p1:Produto;
 let p2:Produto;
 p1 = new Produto(110125, "produto1", "este produto é mt legal", 15.00,6,"link");
 p2 = new Produto(220215, "produto2", "este produto é mt top", 20.00,9,"link2");

 console.log(p1);
 console.log("");
 console.log(p2);
 console.log(p1.getInfo());
 console.log(p2.getInfo());