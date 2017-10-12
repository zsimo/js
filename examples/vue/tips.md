
- Every Vue vm (view-model) is bootstrapped by creating a root Vue instance with the Vue constructor function
    ```javascript
    var vm = new Vue({
        // options
    })
    ```

- toggle the presence of an element
    ```html
    <div id="app-3">
        <p v-if="seen">Now you see me</p>
    </div>
    ```
    ```javascript
    var app3 = new Vue({
        el: '#app-3',
        data: {
            seen: true
        }
    })
    ```

- v-on directive to attach event listeners that invoke methods on our Vue instances
    ```html
    <div id="app-5">
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
    ```
    ```javascript
    var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
        }
    }
    })
    ```

- v-model directive that makes two-way binding between form input and app state
    ```html
    <div id="app-6">
    <p>{{ message }}</p>
    <input v-model="message">
    </div>
    ```
    ```javascript
    var app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Hello Vue!'
        }
    })
    ```
    
    ```js
        // directives
        v-once
        v-pre
    ```
    
    ```js
        // modifier
        v-model.trim
        v-model.number
        v-model.lazy
    ```
    ```js
        $data // for debugging
    ```

- two-way binding (long form)
    ```html
    <div id="app-6">
    <p>{{ message }}</p>
    <input :value="message" @input="message = $event.target.value">
    </div>
    ```
    ```javascript
    var app6 = new Vue({
        el: '#app-6',
        data: {
            message: 'Hello Vue!'
        }
    })
    ```

- A component is essentially a Vue instance with pre-defined options
    
    #### Define a new component called todo-item
    ```javascript
    Vue.component('todo-item', {
        template: '<li>This is a todo</li>'
    })
    ```

    #### Now you can compose it in another component’s template
    ```html
    <ol>
        <!-- Create an instance of the todo-item component -->
        <todo-item></todo-item>
    </ol
    ```

    #### We should be able to pass data from the parent scope into child components. Let’s modify the component definition to make it accept a prop
    ```javascript
    Vue.component('todo-item', {
        // The todo-item component now accepts a
        // "prop", which is like a custom attribute.
        // This prop is called todo.
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })
    ```

    #### Now we can pass the todo into each repeated component using v-bind
    ```html
    <div id="app-7">
    <ol>
        <!-- Now we provide each todo-item with the todo object    -->
        <!-- it's representing, so that its content can be dynamic -->
        <todo-item v-for="item in groceryList" v-bind:todo="item"></todo-item>
    </ol>
    </div>
    ```
    ```javascript
    Vue.component('todo-item', {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
    })
    var app7 = new Vue({
        el: '#app-7',
        data: {
            groceryList: [
            { text: 'Vegetables' },
            { text: 'Cheese' },
            { text: 'Whatever else humans are supposed to eat' }
            ]
        }
    })
    ```

    #### Watcher
    ```
    ```javascript
    data: function () {
        return {
            property: ""
        };
    },
    watcher: {
        property: function (value, oldValue) {
            // can watch every property declared in data obj (every reactive props)
        }
    }

    ```
    
