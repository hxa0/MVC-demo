import './app2.css'
import $ from "jquery"
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content') //获取tab-content列表 便于后续操作
$tabBar.on('click', 'li', (e) => {

    const $li = $(e.currentTarget) //currentTarget 实际点到的
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected') //点击的模块实现选中效果
    const index = $li.index() //第几个li 序号

    $tabContent.children().eq(index).addClass('active') // 内容列表的子元素里面寻找与这个序号相同的元素，然后添加类
        .siblings().removeClass('active') //后续找到兄弟元素，移除类//类active样式添加到css中   /这种思想叫做行为与样式分离
})

$tabBar.children().eq(0).trigger('click') //找到列表的子元素里面第一个，触发点击事件