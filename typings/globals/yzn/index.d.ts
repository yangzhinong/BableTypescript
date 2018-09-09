declare var g:{
    fileServerPostUrl:string;
    fileServerGetUrl:string;
};
//declare function require(name: string): any;

declare function ajaxPost(url:string,obj:any,cb:(res)=>void);

declare module "*.html" {
    const content: string;
    export default content;
}

/**
 * 服务返回网格数据接口
 */
interface IGridData {
    list:any[],
    pageIndex:number,
    pageSize:number,
    total:number
}

interface Array<T> {
    OrderByDesc(propertyname:keyof T):T[];
    OrderAsc(propertyname:keyof T):T[];
    Where(poperty:keyof T,op:string,v:number|string):T[];
    FindFirst(prop: keyof T,op:string,v:number|string):T;
    delItem(poperty: keyof T,v:number|string):T[];
    splitArrayToTwo():{a:any[],b:any[]}; //把数组一分为二
}

declare var WdatePicker:(opt:{
    startDate:string, //'%y-%M-{%d}'
    minDate?:string,  //'%y-%M-{%d}'
    dateFmt:string,  //'yyyy-MM-dd'
    readOnly?:boolean,
    isShowClear?:boolean,
    firstDayOfWeek:number, //1
    isShowToday?:boolean
})=>void;


interface FK {
    QueryString(key:string):string;
}
declare var FK:FK;

interface Date {
    format(fmt:string):string;
}
declare var isIdCardNo : (num:string)=>boolean;
declare var checkIsZero: (id:string)=>boolean;
declare var checkIsEmpty:(obj:JQuery|HTMLElement)=>boolean;
declare var CheckInterger:(obj:JQuery|HTMLElement)=>boolean;
declare var CheckNumber:(obj:JQuery|HTMLElement, mustInput?:boolean)=>boolean;
declare var checkPhone:(obj:JQuery|HTMLElement)=>boolean;
declare var checkTelOrPhone:(obj:JQuery|HTMLElement)=>boolean;
declare var checkidNumber:(obj:JQuery|HTMLElement)=>boolean;
declare var checkEmail:(obj:JQuery|HTMLElement)=>boolean;
declare var checkupdateEx:(obj:JQuery)=>boolean;
declare var template:(id:string,obj:object)=>string;


interface IDic {
    DicCode:number,
    DicName:string,
    DicIndex?:number,
    SubTypeCode?:number,
    SubTypeName?:string,
    BaseTypeCode?:number,
    BaseTypeName?:string,
    Reserved1?:string,
    Reserved2?:string
}
interface IRet {
    code:number,
    msg?:string,
    bizResponse?:string,
    errorMessage?:string,
    data?:any
}
interface JQueryStatic {
    templates:(tpl:string)=>IJsRender
}

interface IJsRender{
    render(data?: any): string;
}

interface IGridColumDef {
    display:string,
    name:string,
    width?:number,
    align?:'center'|'left'|'right',
    
    render?: (item:any)=>JQuery|string|void,
    attr?:any[]
}

interface JQuery {
    noasLoading(opt?:{show:boolean}):void;
    noasGrid(opt:{
        data:object[]
        columns: IGridColumDef [],
        width?:string,//'100%'
        alwaysShowHeader?:boolean,
        mergeSort?:boolean,
        showLineNo?:boolean,
        noDataNotice?:string

    }):void;
    reloadGridData(data:any);

    noasPager(opt:{
        pageSize:number,
        pageIndex:number,
        buttonClickCallback:(pageIndex:number)=>void, //分页事件
        recordCount:number,
        showNum:number
    }):void;

    render(): string;   //jsrender
    render(data: any): string;


    ImgUpload(opt:{
        onlyView:boolean,
        initImages:BPMSView.IAttachment[],
        attTypes:IDic[],
        uploadSuccess:(data:{
            delete:BPMSView.IAttachment[],
            upload:BPMSView.IAttachment[]
        })=>void
    });

    WorkflowView(opt:{flowInstanceId:string,showType:'text'|'map'}):void;

}

declare namespace BPMSView
{
    interface IRepayMent_RateViewModel {
        sFeeType:string,
        sFeeName:string,
        sFeeOrRate:string
    }

    interface IAttachment{
        ID:number,BigImgUrl:string,SmallImgUrl:string,AttType:number,IsCanDel:number
    }
}




//end region



