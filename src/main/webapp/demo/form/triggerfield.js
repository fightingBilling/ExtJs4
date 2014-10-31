Ext.onReady(function(){
	var testForm = new Ext.form.Panel({
		title:'Ext.form.field.Trigger示例',
		bodyStyle:'padding:5 5 5 5',//表单边距
		frame : true,
		height:100,
		width:270,
		renderTo :Ext.getBody(),
		defaults:{//统一设置表单字段默认属性
			labelSeparator :'：',//分隔符
			labelWidth : 70,//标签宽度
			width : 200,//字段宽度
			labelAlign : 'left'//标签对齐方式
		},
		items:[{
			xtype : 'triggerfield',
			id:'memo',
			fieldLabel:'触发字段',
			hideTrigger : false,//不隐藏触发按钮
			onTriggerClick : function(){
				var memo = testForm.getForm().findField('memo');//取得输入控件
				alert(memo.getValue());//取得控件值
				Ext.getCmp('memo').setValue('test');
			}
		}]
	});
});