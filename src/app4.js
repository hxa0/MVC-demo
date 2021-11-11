import './app4.css'
import $ from 'jquery'
const $circle = $('#app4 .circle')
$circle.on('mouseenter', () => { //鼠标悬停
    $circle.addClass('active')
})
$circle.on('mouseleave', () => { //鼠标离开
    $circle.removeClass('active')
})