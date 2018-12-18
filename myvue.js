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