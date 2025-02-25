// Contract

interface ProductContract
{
    Name:String | null;
    Price:number;
    Qty:number;
    Total():Number;
    Print():void;
}

// template

abstract class ProductTemplate implements ProductContract
{
    Name:String | null = null;
    Price: number = 0;
    Qty:number = 0;
    abstract Total():number;
    abstract Print(): void;
}
// component 

class ProductComponent extends ProductTemplate
{
    Name = "Samsung TV";
    Price = 4500.45;
    Qty = 2;
    Total(){
        return this.Qty * this.Price;
    }
     Print(){
         console.log(`Name = ${this.Name}\nPrice =${this.Price}\nQty = ${this.Qty}\n`);
     }
}

let obj = new ProductComponent();
obj.Print();

// Summary
// contract => implemented by  => template => extended by => component => used by App.