Vue.component('todo-table', {
    data: function() {
        return {}
    },
    methods: {
        removeTask: function(task) {
            this.$store.commit('REMOVE_TASK', task);
        },
        toggleTask: function(task, $event) {
            let payload = {
                targetTask: task,
                doneState: $event.target.checked
            };
            this.$store.commit('TOGGLE_TASK', payload);
        }
    },
    computed: {
        tasks: function() {
            return this.$store.state.taskList;
        }
    },
    template: `
        <table class="table">
            <thead>
                <tr>
                    <th></th>
                    <th>Task Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="task in tasks">
                    <td><input type="checkbox" :checked="task.done" @change="toggleTask(task, $event)"></td>
                    <td :class="{done: task.done}">{{ task.description }}</td>
                    <td><a href="#" @click.prevent="removeTask(task)"><span class="icon has-text-info">
                        <i class="fa fa-trash-o"></i></span></a></td>
                </tr>
            </tbody>
        </table>`
});
