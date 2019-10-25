const menuNav = [
  {
    title: '首页 / Home',
    index: '/home'
  },
  {
    title: '基本组件 / Basic',
    index: '/basic',
    children: [
      {
        title: '按钮 / Button',
        index: '/basic/button'
      },
      {
        title: '图标 / Icon',
        index: '/basic/icon'
      }
    ]
  },
  {
    title: '导航组件 / Navigation',
    index: '/nav',
    children: [
      {
        title: '标签页 / Tabs',
        index: '/nav/tabs'
      },
      {
        title: '面包屑 / Breadcrumb',
        index: '/nav/breadcrumb'
      },
      {
        title: '下拉菜单 / Dropdown',
        index: '/nav/dropdown'
      },
      {
        title: '步骤条 / Steps',
        index: '/nav/steps'
      }
    ]
  },
  {
    title: '提示组件 / Info',
    index: '/info',
    children: [
      {
        title: '标签 / Tag',
        index: '/info/tag'
      },
      {
        title: '标记 / Avatar',
        index: '/info/avatar'
      },
      {
        title: '对话框 / Dialog',
        index: '/info/dialog'
      },
      {
        title: '消息提示 / Message',
        index: '/info/message'
      },
      {
        title: '通知 / Notification',
        index: '/info/notification'
      },
      {
        title: '弹出框 / Popover',
        index: '/info/popover'
      }
    ]
  },
  {
    title: '显示组件 / Show',
    index: '/show',
    children: [
      {
        title: '轮播图 / Carousel',
        index: '/show/carousel'
      },
      {
        title: '卡片 / Card',
        index: '/show/card'
      },
      {
        title: '表格 / Table',
        index: '/show/table'
      },
      {
        title: '折叠面板 / Collapse',
        index: '/show/collapse'
      }
    ]
  },
  {
    title: '富文本 / Editor',
    index: '/editor'
  },
  {
    title: '其他 / Other',
    index: '/other',
    children: [
      {
        title: '时间线 / Timeline',
        index: '/other/timeline'
      },
      {
        title: '日历 / Calendar',
        index: '/other/calendar'
      }
    ]
  },
  {
    title: '关于 / About',
    index: '/about'
  }
];
export default menuNav;
