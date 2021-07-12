// const div1 = dom.create("<div>呢哇</div>")
// console.log(div1)
// const parent = dom.create("父级")
// dom.after(text, div1)
// dom.before(text, div1)
// dom.append(div1, parent)
// dom.wrap(div1, parent)
//删除
// const nodes = dom.empty(window.empty)
// console.log(nodes)
//设置title属性
// dom.attr(text, 'title', '我是小心心')//写
// const title = dom.attr(text, 'title')//读
// console.log(`title:${title}`)
// dom.text(text, '哈哈哈哈哈哈')
const div = dom.find('#text>.red')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n) => console.log(n)) // 遍历 divList 里的所有元素

