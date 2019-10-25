import Vue from 'vue';
import Router from 'vue-router';
import Button from '@/views/basic/button.vue';
import Icon from '@/views/basic/icon.vue';
import Tabs from '@/views/navigation/tabs.vue';
import Bread from '@/views/navigation/breadcrumb.vue';
import Dropdown from '@/views/navigation/dropdown.vue';
import Steps from '@/views/navigation/steps.vue';
import Tag from '@/views/info/tag.vue';
import Avatar from '@/views/info/avatar.vue';
import Dialog from '@/views/info/dialog.vue';
import Message from '@/views/info/message.vue';
import Notification from '@/views/info/notification.vue';
import Popover from '@/views/info/popover.vue';
import Carousel from '@/views/show/carousel.vue';
import Card from '@/views/show/card.vue';
import Table from '@/views/show/table.vue';
import Collapse from '@/views/show/collapse.vue';
import Timeline from '@/views/other/timeline.vue';
import Calendar from '@/views/other/calendar.vue';
import About from '@/views/about/about.vue';
import Editor from '@/views/editor/editor.vue';
import Home from '@/views/home/home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/basic/button',
      name: 'button',
      component: Button,
      meta: {
        title: '按钮'
      }
    },
    {
      path: '/basic/icon',
      name: 'icon',
      component: Icon,
      meta: {
        title: '图标'
      }
    },
    {
      path: '/nav/tabs',
      name: 'tabs',
      component: Tabs,
      meta: {
        title: '标签页'
      }
    },
    {
      path: '/nav/breadcrumb',
      name: 'bread',
      component: Bread,
      meta: {
        title: '面包屑'
      }
    },
    {
      path: '/nav/dropdown',
      name: 'dropdown',
      component: Dropdown,
      meta: {
        title: '下拉菜单'
      }
    },
    {
      path: '/nav/steps',
      name: 'steps',
      component: Steps,
      meta: {
        title: '步骤条'
      }
    },
    {
      path: '/info/tag',
      name: 'tag',
      component: Tag,
      meta: {
        title: '标签'
      }
    },
    {
      path: '/info/avatar',
      name: 'avatar',
      component: Avatar,
      meta: {
        title: '头像'
      }
    },
    {
      path: '/info/dialog',
      name: 'dialog',
      component: Dialog,
      meta: {
        title: '对话框'
      }
    },
    {
      path: '/info/message',
      name: 'message',
      component: Message,
      meta: {
        title: '消息提示'
      }
    },
    {
      path: '/info/notification',
      name: 'notification',
      component: Notification,
      meta: {
        title: '通知'
      }
    },
    {
      path: '/info/popover',
      name: 'popover',
      component: Popover,
      meta: {
        title: '弹出框'
      }
    },
    {
      path: '/show/carousel',
      name: 'carousel',
      component: Carousel,
      meta: {
        title: '轮播图'
      }
    },
    {
      path: '/show/card',
      name: 'card',
      component: Card,
      meta: {
        title: '卡片'
      }
    },
    {
      path: '/show/table',
      name: 'table',
      component: Table,
      meta: {
        title: '表格'
      }
    },
    {
      path: '/show/collapse',
      name: 'collapse',
      component: Collapse,
      meta: {
        title: '折叠面板'
      }
    },
    {
      path: '/other/timeline',
      name: 'timeline',
      component: Timeline,
      meta: {
        title: '时间线'
      }
    },
    {
      path: '/other/calendar',
      name: 'calendar',
      component: Calendar,
      meta: {
        title: '日历'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '关于'
      }
    },
    {
      path: '/editor',
      name: 'editor',
      component: Editor,
      meta: {
        title: '首页富文本'
      }
    }
  ]
});
