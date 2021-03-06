Ext.onReady(function(){
	Ext.QuickTips.init();//初始化提示
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.FieldContainer示例',
		width : 300,
		frame : true,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		fieldDefaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 60,//标签宽度
			width : 250,//字段宽度
			msgTarget : 'side'
		},
		defaultType: 'textfield',//设置表单字段的默认类型
		items:[
		{
			fieldLabel:'商品名称'
		},
		{
		    xtype: 'fieldcontainer',
		    fieldLabel: '生产日期',
		    layout: {//设置容器字段布局
		        type: 'hbox',
		        align: 'middle'//垂直居中
		    },
		    combineErrors : true,//合并展示错误信息
		    fieldDefaults: {
                hideLabel: true,//隐藏字段标签
                allowBlank : false//设置字段值不允许为空
            },
            defaultType: 'textfield',//设置表单字段的默认类型
		    items: [
		    {
		        fieldLabel: '年',
		        flex: 1,
		        inputId : 'yearId'
		    },
		    {
                xtype: 'label',
                forId : 'yearId',
                text: '年'
            },
            {
		        fieldLabel: '月',
		        flex: 1,
		        inputId : 'monthId'
		    },
		    {
                xtype: 'label',
                forId : 'monthId',
                text: '月'
            },
            {
		        fieldLabel: '日',
		        flex: 1,
		        inputId : 'dayId'
		    },
		    {
                xtype: 'label',
                forId : 'dayId',
                text: '日'
            }]
		},
		{
			fieldLabel:'产地来源'
		}]
	});
});