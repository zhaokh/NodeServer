// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    props:['todo'],
    template: '<li>第{{todo.id}}句话说点什么？{{todo.text}}</li>'
})

Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('alert-box', {
    template: `
      <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
      </div>
    `
})

var app = new Vue({
    el:'#app',
    data:{
        message : '你好'
    }
})

var app2 = new Vue({
    el:'#app-2',
    data:{
        message:'鼠标再次停留' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
        ]
    }
})

var app5 = new Vue({
    el:'#app5',
    data:{
        message:'hello vue'
    },
    methods:{
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

var app6 = new Vue({
    el:'#app6',
    data:{
        message:'Hello vue!'
    }
})

var app7 = new Vue({
    el:'#app7',
    data:{
        groceryList:[
            {id:0, text:"蔬菜"},
            {id:1, text:"酸奶"},
            {id:2, text:"随便想吃什么"}
        ]
    }
})

var app8 = new Vue({
    el:'#componentsdemo',
})

var app8 = new Vue({
    el:'#app9'
})

Vue.component('child',{
    template:`<div>
                    <slot name='header'></slot>
                    <div>hello world</div>
                    <slot name='footer'></slot>
              </div>`
});
let vm = new Vue({
    el:'#root',

})

 //单个插槽
 Vue.component('single', {
    //<slot> 不能作为根元素,当<single>标签为空元素时，会显示<slot>里面的内容
    template: '<div><slot>单个插槽</slot></div>'
})

//多个插槽/具名插槽
Vue.component('muliSlots', {
    template: `
        <div>
            <header> <slot name="header"></slot></header>
            <main><slot>没有内容时，这个会出现</slot></main>
            <footer><slot name="footer"></slot></footer>
        </div>
    `
})

//作用域插槽
//作用域插槽是一种特殊类型的插槽，用作一个(能被传递数据的)可重用模板，来代替已经渲染好的元素。
Vue.component('scopedSlot', {
    template: `
        <div class="child">
            <slot msg="this is from child"></slot>
        </div>
    `
})

//使用render代替template
Vue.component('renderSlot', {
    render(createEle) {
        return createEle('em', 'render test')
    }
})

// render 和 template同时存在的情况,会忽略template
Vue.component('render-template', {
    template: '<div>this is from template</div>',
    render(createEle) {
        return createEle('div', 'this is from render')
    }
})

//render 使用作用域插槽
Vue.component('render-scope', {
    render(createEle) {
        return createEle('p', this.$scopedSlots.default({
            msg: 'this is from render-scopeded slot'
        }))
    }
})

//父组件传值
Vue.component('child', {
    props: ['datamsg', 'msg2'],
    template: '<div><p>{{datamsg}}</p><p>{{this.msg2}}</p></div>'
})

//父组件使用render 传值
Vue.component('child-render', {
    props: ['msg'], //this is from parent
    //<div><slot text="this is from render-scopeded slot"><slot><p>{{msg}}</p></div>
    render(createEle) {
        var p = createEle('p', {
            domProps: {
                innerHTML: this.msg //这里的this不能省略
            }
        })
        return createEle('div', [this.$scopedSlots.default({
            text: 'this is from render-scopeded slot' //子组件自己的props属性
        }), p])
    }
})

//与上面等价的template
Vue.component('child-render-template', {
    props: ['msg'], //this is from parent
    template: `<div>
        <slot text="this is from render-scopeded slot"></slot>
        <p>{{msg}}</p>
    </div>`
})
new Vue({
    el: '#demo1'
})

