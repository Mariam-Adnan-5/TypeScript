/* 1- main class => gift box 
  1.1 attrubutes: name , price , type .
  1.2 method : details();
  
  3-  sub class => flower basket
  3.1 attributes: flower type , flower color , number
  3.2 method : flowerdetails()
 
  4- sub class => perfumebasket
  4.1 attributes: name , volume
  4.2 method : perfumedetails()

*/
 
abstract class Giftbox{
   private name: string = "gift box";
   protected boxprice : number= 10 ;
   public type : string = "wood basket"

   constructor(name:string, type:string){
    this.name=name;
    this.type=type;
   }
   public getName():string{
    return this.name;}
   
   public setName(n : string){
     this.name = n}


   details() {
    console.log(`Gift Box: ${this.name}`);
    console.log(`box Price: ${this.boxprice}`);
    console.log(`type is :${this.type}`)
    }

    abstract productDetails():void;
}

class Flower extends Giftbox{
    flowertype:string = " "
    flowernumber:number =2
    flowerprice:number=10

    constructor(n:string ,t: string ,ft:string ,fn:number){
        super(n ,t )
        this.flowertype=ft
        this.flowernumber=fn  
    }
      total():number{
     return (this.flowernumber*this.flowerprice) + this.boxprice}


    
     public productDetails(): void {
        this.details();
        console.log(`Flower type: ${this.flowertype}`);
        console.log(`Flower number: ${this.flowernumber}`);
        console.log(`Total price: ${this.total()}`);
    }
    
}

class PerfumeBasket extends Giftbox {
     private perfumeName: string;
     private volume: number;

    constructor(n: string,t: string,pn: string,v: number ) {
        super(n, t);
        this.perfumeName = pn;
        this.volume = v;
    }
    public productDetails(): void {
        this.details();
        console.log(`Perfume name: ${this.perfumeName}`);
        console.log(`Volume: ${this.volume} ml`);
        console.log(`Total price: ${(this.volume*10)+this.boxprice}`);

    }
}


const flower = new Flower('wood', 'birthday gift','lilies',3)
const perfume = new PerfumeBasket("wood","birthday gift","Dior",20);

perfume.productDetails();
console.log("---------------------")
flower.productDetails();