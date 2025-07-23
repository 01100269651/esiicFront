export interface IOrder {
    FactId:number;

    MainDeptId:number;

    DeptId:number;

    Type:string;

    Date:Date;

    Id:number;

    Project?:number;
    
    Cause:string;

    Title:string;

    ReqRep:string;

    FnlDate:Date;

    FnlId:number;

    StateCode:number;

    SerNo:number;

    CarNo:string;

    Value:number;

    NoItemsReq:number;

    NoItemsRecived:number ;

    LastRecDate?:Date;







}
