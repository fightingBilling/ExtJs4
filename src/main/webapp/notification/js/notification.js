Ext.Loader.setConfig({
			enabled: true
		});

		var reusable = null;

		Ext.application({
			name: 'NotificationDemo',
			paths: {
				'Ext.ux.window': '.'
			},
			requires: [
				'Ext.ux.window.Notification'
			],
			launch: function() {
				Ext.create('Ext.container.Viewport', {
					layout: 'fit',
					title: 'Ext.ux.window.Notification - 示例 和文档',
					items: [{
						layout: 'border',
						id: 'fullscreen',
						items: [{
							xtype: 'panel',
							region: 'north',
							layout: 'fit',
							title: '说明',
							contentEl: 'instructionsDiv',
							id: 'instructions',
							height: '40%',
							autoScroll: true
						},{
							xtype: 'panel',
							region: 'west',
							layout: 'fit',
							title: 'Demo 1 - 标准主题',
							width: '50%',
							items: [{
								xtype: 'panel',
								id: 'demo1',
								border: false,
								padding: 20,
								items: [{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'BR - autoCloseDelay',
									handler: function () {
										Ext.create('widget.uxNotification', {
											title: 'Notification',		//标题
											position: 'br',				//弹出起始位置
											manager: 'demo1',		//组管理器
											iconCls: 'ux-notification-icon-information',
											autoCloseDelay: 3000,//延时多久自动关闭弹出框
											spacing: 40,				//弹出框的间距
											html: 'Entering from the component\'s br corner. 3000 milliseconds autoCloseDelay.<br />Increasd spacing.'
										}).show();
										Ext.create('widget.uxNotification', {
											title: 'Notification',
											position: 'br',
											manager: 'demo1',
											iconCls: 'ux-notification-icon-error',
											autoCloseDelay: 3000,
											spacing: 20,
											html: 'Entering from the component\'s br corner. 3000 milliseconds autoCloseDelay.<br />Increased spacing.'
										}).show();
										Ext.create('widget.uxNotification', {
											title: 'Notification',
											position: 'br',
											manager: 'demo1',
											iconCls: 'ux-notification-icon-information',
											autoCloseDelay: 3000,
											spacing: 20,
											html: 'Entering from the component\'s br corner. 3000 milliseconds autoCloseDelay.<br />Increased spacing.'
										}).show();
									}
								},{
									xtype: 'component',
									border: false,
									padding: 5
								},{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'BL - stickOnClick',
									handler: function () {
										Ext.create('widget.uxNotification', {
											title: 'Notification',
											corner: 'bl',
											stickOnClick: false,
											manager: 'demo1',
											iconCls: 'ux-notification-icon-information',
											html: 'Entering from the component\'s bl corner. stickOnClick set to false.'
										}).show();
									}
								},{
									xtype: 'component',
									border: false,
									padding: 5
								},{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'B - stickWhileHover',
									handler: function () {
										Ext.create('widget.uxNotification', {
											title: 'Notification',
											position: 'b',
											manager: 'demo1',
											stickWhileHover: false,
											iconCls: 'ux-notification-icon-information',
											html: 'Entering from the component\'s b edge. stickWhileHover set to false.'
										}).show();
									}
								},{
									xtype: 'component',
									border: false,
									padding: 5
								},{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'TL - useXAxis',
									handler: function () {
										Ext.create('widget.uxNotification', {
											title: 'Notification',
											position: 'tl',
											manager: 'demo1',
											useXAxis: true,
											iconCls: 'ux-notification-icon-information',
											html: 'Entering from the component\'s tl corner. Using the x-axis.'
										}).show();
									}
								},{
									xtype: 'component',
									border: false,
									padding: 5
								},{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'BR - reuse',
									handler: function () {
										if (!reusable) {
											reusable = Ext.create('widget.uxNotification', {
												title: 'Notification',
												closeAction: 'hide',
												position: 'br',
												manager: 'demo1',
												useXAxis: false,
												iconCls: 'ux-notification-icon-information'
											});
										}
										reusable.update('Entering from the component\'s bl corner. Reusing a single notification with closeAction set to hide.<br />Random number: ' + Math.floor(Math.random()*10000));
										reusable.show();
									}
								}]
							}]							
						},{
							xtype: 'panel',
							region: 'center',
							title: 'Demo 2 - Styled',
							items: [{
								xtype: 'panel',
								id: 'demo2',
								border: false,
								padding: 20,
								items: [{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'T - Document as manager',
										handler: function () {
											Ext.create('widget.uxNotification', {
												position: 't',
												cls: 'ux-notification-light',
												closable: false,
												title: '标题',
												autoCloseDelay: 3000,
												iconCls: 'ux-notification-icon-information',
												html: 'Using document as manager. No title and closable: false. Entering from the t edge.'
											}).show();
										}
								},{
									xtype: 'component',
									border: false,
									padding: 5
								},{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'TR - Animation',
										handler: function () {
											Ext.create('widget.uxNotification', {
												position: 'tr',
												useXAxis: true,
												cls: 'ux-notification-light',
												iconCls: 'ux-notification-icon-information',
												closable: false,
												title: '标题',
												html: 'Using elasticIn animation effect. No title and closable: false.',
												slideInDuration: 800,
												slideBackDuration: 1500,
												autoCloseDelay: 3000,
												slideInAnimation: 'elasticIn',
												slideBackAnimation: 'elasticIn'
											}).show();
											Ext.create('widget.uxNotification', {
												position: 'tr',
												useXAxis: true,
												cls: 'ux-notification-light',
												iconCls: 'ux-notification-icon-information',
												closable: false,
												title: '标题',
												html: 'Using elasticIn animation effect. No title and closable: false.',
												slideInDuration: 800,
												slideBackDuration: 1500,
												slideInAnimation: 'elasticIn',
												slideBackAnimation: 'elasticIn'
											}).show();
										}
								},{
									xtype: 'component',
									border: false,
									padding: 5
								},{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'TL - Variable size',
										handler: function () {
											Ext.create('widget.uxNotification', {
												title: 'Notification',
												position: 'tl',
												manager: 'fullscreen',
												cls: 'ux-notification-light',
												width: 250,
												height: 115,
												autoCloseDelay: 3000,
												iconCls: 'ux-notification-icon-information',
												html: 'Using document as manager. Specifying width and height will override the css as long as the value is higher then the css value.'
											}).show();
											Ext.create('widget.uxNotification', {
												title: 'Notification',
												position: 'tl',
												manager: 'fullscreen',
												cls: 'ux-notification-light',
												width: 200,
												height: 130,
												autoCloseDelay: 3000,
												iconCls: 'ux-notification-icon-information',
												html: 'Using document as manager. Specifying width and height will override the css as long as the value is higher then the css value.'
											}).show();
											Ext.create('widget.uxNotification', {
												title: 'Notification',
												position: 'tl',
												manager: 'fullscreen',
												cls: 'ux-notification-light',
												width: 300,
												height: 150,
												autoCloseDelay: 3000,
												iconCls: 'ux-notification-icon-information',
												html: 'Using document as manager. Specifying width and height will override the css as long as the value is higher then the css value.'
											}).show();
										}
								},{
									xtype: 'component',
									border: false,
									padding: 5
								},{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'TR - Animation',
										handler: function () {
											Ext.create('widget.uxNotification', {
												title: 'Notification',
												position: 'tr',
												manager: 'instructions',
												cls: 'ux-notification-light',
												iconCls: 'ux-notification-icon-information',
												html: 'Using bounceOut/easeIn animation effect.',
												autoCloseDelay: 4000,
												slideBackDuration: 500,
												slideInAnimation: 'bounceOut',
												slideBackAnimation: 'easeIn'
											}).show();
											Ext.create('widget.uxNotification', {
												title: 'Notification',
												position: 'tr',
												manager: 'instructions',
												cls: 'ux-notification-light',
												iconCls: 'ux-notification-icon-information',
												html: 'Using bounceOut/easeIn animation effect.',
												slideBackDuration: 500,
												slideInAnimation: 'bounceOut',
												slideBackAnimation: 'easeIn'
											}).show();
										}
								},{
									xtype: 'component',
									border: false,
									padding: 5
								},{
									xtype: 'button',
									iconCls: 'ux-notification-icon-information',
									text: 'ALL - All possible combinations',
										handler: function () {
											var notificationConfig = {
												position: 'tl',
												cls: 'ux-notification-light',
												closable: false,
												html: 'All positions',
												slideInAnimation: 'bounceOut',
												slideBackAnimation: 'easeIn'
											};
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.useXAxis = true;
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.position = 'tr';
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.useXAxis = false;
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.position = 'br';
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.useXAxis = true;
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.position = 'bl';
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.useXAxis = false;
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.position = 't';
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.position = 'r';
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.position = 'b';
											Ext.create('widget.uxNotification', notificationConfig).show();
											notificationConfig.position = 'l';
											Ext.create('widget.uxNotification', notificationConfig).show();
										}
								}]
							}]						
						}]
					}]
				});
			}
		});
