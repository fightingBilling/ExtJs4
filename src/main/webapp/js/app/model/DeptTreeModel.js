//用户类
Ext.define("AM.model.DeptTreeModel",{
	extend:"Ext.data.Model",
	fields:[
			{name:'text',type:'string',sortable:true},
			{name:'level',type:'int',sortable:true},
			{name:'info',type:'string',sortable:true}
		]
});
