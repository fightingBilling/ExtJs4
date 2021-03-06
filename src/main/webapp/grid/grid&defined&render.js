Ext.onReady(function(){
	//创建表格数据
	var datas = [
		[1,'张三','man',new Date(1979,09,13),29],
		[2,'李四','woman',new Date(1978,10,01),30],
		[3,'王五','man',new Date(1981,01,01),27]
	];
	//创建Grid表格组件
	Ext.create('Ext.grid.Panel',{
		title : 'grid&defined&render示例',
		renderTo: Ext.getBody(),
		width:500,
		height:200,
		frame:true,
		viewConfig: {
			forceFit : true,
	           stripeRows: true//在表格中显示斑马线
	    },
		store: {//配置数据源
		       fields: ['id','name','sex','birthday','age'],//定义字段
		       proxy: {
		           type: 'memory',//Ext.data.proxy.Memory内存代理
		           data : datas,//读取内嵌数据
		           reader : 'array'//Ext.data.reader.Array解析器
		       },
		       autoLoad: true//自动加载
		   },
		columns: [//配置表格列
			{header: "id", width: 30, dataIndex: 'id'},
			{header: "姓名", width: 50, dataIndex: 'name'},
			{header: "性别", width: 50, dataIndex: 'sex',renderer:formatSex},
			{header: "生日", width: 100, dataIndex: 'birthday', 
				//格式化生日显示
				renderer:Ext.util.Format.dateRenderer('Y年m月d日')
			},
			{header: "年龄", width: 50, dataIndex: 'age',renderer:formatAge}
		]
	});
	//定义渲染函数，格式化性别显示
	function formatSex(value){ 		
		return value=='man'?'男':'<font color=red>女</font>';
	}
	//定义渲染函数，格式化年龄显示
	function formatAge(value,metadata){ 		
		if(value < 30)//年龄小于30的设置背景颜色为#CCFFFF
		{  
			metadata.style = 'background-color:#CCFFFF;';
		}
		return value;
	}
});