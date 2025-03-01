// PolyMorphism
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
        this.FirstName = "";
        this.LastName = "";
        this.Designation = "";
    }
    Employee.prototype.Print = function () {
        document.write("FirstName = ".concat(this.FirstName, "\n LastName = ").concat(this.LastName, "\n Designation = ").concat(this.Designation));
    };
    return Employee;
}());
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Satish";
        _this.LastName = "Satyarth";
        _this.Designation = "Developer";
        _this.DeveloperRole = "Test, build, deploy";
        return _this;
    }
    Developer.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.DeveloperRole);
    };
    return Developer;
}(Employee));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Satish";
        _this.LastName = "Satyarth";
        _this.Designation = "Admin";
        _this.AdminRole = "Authorization, Authentication";
        return _this;
    }
    Admin.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.AdminRole);
    };
    return Admin;
}(Employee));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FirstName = "Satish";
        _this.LastName = "Satyarth";
        _this.Designation = "Manager";
        _this.ManagerRole = "Verfying";
        return _this;
    }
    Manager.prototype.Print = function () {
        _super.prototype.Print.call(this);
        document.write(this.ManagerRole);
    };
    return Manager;
}(Employee));
var employees = [new Developer(), new Manager(), new Admin()];
