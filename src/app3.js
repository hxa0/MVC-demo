import './app3.css'
import $ from 'jquery'
const $suqare = $('#app3 .square')
$suqare.on('click', () => {
    console.log('111')
    $suqare.toggleClass('active') //点击的时候向右，再点击返回
})