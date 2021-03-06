Ext.onReady(function(){
	Ext.create('Ext.form.Panel',{
		title:'Ext.form.FieldSet示例',
		labelWidth : 40,//标签宽度
		width : 220,
		frame : true,
		renderTo: Ext.getBody(),
		bodyPadding: 5,
		items:[
		{
			title:'产品信息',
			xtype : 'fieldset',
			collapsible : true,//显示切换展开收缩状态的切换按钮
			bodyPadding: 5,
			defaults:{//统一设置表单字段默认属性
				labelSeparator :'：',//分隔符
				labelWidth : 50,//标签宽度
				width : 160//字段宽度
			},
			defaultType: 'textfield',//设置表单字段的默认类型
			items:[
			{
				fieldLabel:'产地'
			},
			{
				fieldLabel:'售价'
			}]
		},
		{
			title:'产品描述',
			xtype : 'fieldset',
			bodyPadding: 5,
			checkboxToggle : true,//显示切换展开收缩状态的复选框
			checkboxName : 'description',//提交数据时复选框对应的name
			labelSeparator :'：',//分隔符
			items:[
			{
				fieldLabel:'简介',
				labelSeparator :'：',//分隔符
				labelWidth : 50,//标签宽度
				width : 160,//字段宽度
				xtype : 'textarea'
			}]
		}]
	});
});