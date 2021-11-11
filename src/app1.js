import './app1.css'
import $ from 'jquery'

const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
    //运算结果记忆功能
const n = localStorage.getItem('temp') // n变量，读取本地内存中的n，存的是运算好的值
$number.text(n || 100) //数字区域显示的是运算后的数值，刷新也不变，应为这个值是从本地调用的
$button1.on('click', () => {
    let n = parseInt($number.text()) //获取文本字符串然后变成数字
    n += 1 //运算
    localStorage.setItem('n', n) //前面的n是内存区域的名字，后面的是运算后的n
    $number.text(n) //文本内容替换成运算的数字
})
$button2.on('click', () => {
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n', n)
    $number.text(n)
})
$button3.on('click', () => {
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n', n)
    $number.text(n)
})
$button4.on('click', () => {
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n', n)
    $number.text(n)
})