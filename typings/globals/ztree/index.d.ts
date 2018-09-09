interface JQueryStatic {
    

  
}

interface JQueryFn {
    zTree: zTreeFnStatic;
}

interface zTreeFnStatic {
    init($obj: JQuery, setting: zTreeSetting | Object, zNodes: zTreeNode[]): zTreeStatic;
    getZTreeObj(id: string): zTreeStatic;
   
    destroy(id: string);
   

}

interface zTreeStatic {   //对应源代码的zTreeTools
    setting: zTreeSetting;
    checkNode(node:zTreeNode, checked:boolean, checkTypeFlag:boolean, callbackFlag?:any);  //checktypeFlay是否级联check
    getCheckedNodes(): zTreeNode[];
    getNodeByTId(tId: string): zTreeNode;
    getNodeByParam(key:string,value:any,parentNode?:zTreeNode):zTreeNode;
    expandAll(expandFlag: boolean);
    checkAllNodes(checked: boolean);
    getCheckedNodes(checked: boolean): zTreeNode[];

    ///sonSign = false means: only expand or collapse this node.
    ///focus = false means: after expand or coolapse, don't set the focus of this node.
    ///callbackFlag = false means: call this method, will not trigger callback.
    expandNode(treeNode, expandFlag:boolean, sonSign:boolean, focus:boolean, callbackFlag:boolean);
    getNodeIndex(node: zTreeNode): number; //获取某节点在同级节点中的序号（从0开始
    getSelectedNodes(): zTreeNode[];
    hideNode(node: zTreeNode);
    hideNodes(nodes: zTreeNode[]);
    setChkDisabled(node: zTreeNode, disabled: boolean,
        inheritParent: boolean,  //inheritParent = true 表示全部父节点进行同样的操作
        inheritChildren: boolean  //inheritChildren = true 表示全部子节点进行同样的操作
    );
    showNode(node: zTreeNode);
    updateNode(node: zTreeNode,
        checkTypeFlag?: boolean //checkTypeFlag = true 表示按照 setting.check.chkboxType 属性进行父子节点的勾选联动操作
    );
    selectNode(node: zTreeNode, addFlag?: boolean, isSilent?:boolean);
    //Forced asynchronous loading child nodes of parent node，  
    reAsyncChildNodes(parentNode: zTreeNode,
        reloadType: 'refresh' | 'append', //norefresh: append mode
        isSilent?: boolean,  //true 不展开， false展开
        completeCallBack?:Function
    ); 
    removeNode(node: zTreeNode);
    addNodes(parentNode: zTreeNode | null, index: number, newNodes: any, isSilent?: boolean);
    cancelSelectedNode(node: zTreeNode);
    getNodes(): zTreeNode[];

}


interface zTreeNode {
    id: string&number;
    pId: number;
    name: string;
    open?: boolean;
    nocheck?: boolean;
    children?: zTreeNode[];
    level?: number;
    tId: string;
    getParentNode: () => zTreeNode;
    icon: string;
    isParent: boolean;
}

interface zTreeSetting {
    check?: {
        enable?: boolean;
        chkStyle?: string;  //radio
        radioType?: string;  //all
    },
    async?: {
        autoParam: any[],
        contentType: string,
        dataFilter?: (treeId:string,parentNode:zTreeNode,responseData:any) => void,//Callback function to pre - process Ajax return data
        enable: boolean,
        otherParam?: any[],
        type?: 'post' | 'get',
        url: string | ( (treeId:string,node:zTreeNode)=>string);  //function return string
    }
    view?: {
        expandSpeed?:string,
        dblClickExpand?: boolean;
        selectedMulti?: boolean;
        showIcon?: boolean;
        showLine?: boolean;
        showTitle?: boolean;
        txtSelectedEnable?: boolean;//false 是否允许可以选择 zTree DOM 内的文本。
    },
    data?: {
        simpleData?: {
            enable?: boolean;
            idKey?: string;//id
            pIdKey?: string; //pId
            rootPId?:any; //null
        },
        keep?: {
            leaf: boolean;
            parent: boolean;  //The parent node's lock, the parent node will lock 'isParent' attribute to true.
        },
        key?: {
            checked?: string; ///'checked
            children?: string; // children
            name?: string; //name
            title?: string; //''
            url?: string;
        }
    },
    callback: {
        onClick?: (e?: Event, treeId?: string, treeNode?: zTreeNode, clickFlag?: number) => void;
        onDblClick?: (e?: Event, treeId?: string, treeNode?: zTreeNode) => void;
        onCheck?: (e?:Event,treeId?:string,node?:zTreeNode) => void;
        onExpand?: (e?: Event, treeId?: string, node?: zTreeNode)=>void;
        onCollapse?: (e?: Event, treeId?: string, node?: zTreeNode) => void;
        onRightClick?: (e?: Event, treeId?: string, node?: zTreeNode) => void;
        beforeClick?: (treeId?: string, node?: zTreeNode, clickFlag?: boolean) => boolean;
        beforeCheck?: (treeId?: string, node?: zTreeNode) => boolean;
        beforeExpand?: (treeId?: string, node?: zTreeNode) => boolean;
        beforeCollapse?: (treeId?: string, node?: zTreeNode) => boolean;

    }
}