// PolyMorphism

class Employee
{
    public FirstName : String = "";
    public LastName : String = "";
    public Designation : String = "";
    public Print(): void{
        document.write(`FirstName = ${this.FirstName}<br>LastName = ${this.LastName}<br>Designation = ${this.Designation}<br>`);

    }
}

class Developer extends Employee
{
    FirstName = "Satish";
    LastName= "Satyarth";
    Designation= "Developer";
    DeveloperRole="Test, build, deploy";
    Print(){
        super.Print();
        document.write(this.DeveloperRole);
        
    }       
}

class Admin extends Employee
{
    FirstName= "Satish";
    LastName= "Satyarth";
    Designation = "Admin";
    AdminRole="Authorization, Authentication";
    Print(){
        super.Print();
        document.write(this.AdminRole);
        
    }       
}

class Manager extends Employee
{
    FirstName = "Satish";
    LastName  = "Satyarth";
    Designation = "Manager";
    ManagerRole ="Verfying";
    Print(){
        super.Print();
        document.write(this.ManagerRole);
        
    }       
}

let employees = [new Developer(), new Manager(), new Admin()];