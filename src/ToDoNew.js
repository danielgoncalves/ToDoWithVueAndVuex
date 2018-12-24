Vue.component('todo-new-task', {
    data: function() {
        return {
            description: ''
        }
    },
    methods: {
        newTask: function() {
            this.$store.commit('NEW_TASK', this.description);
            this.description = '';
        }
    },
    template: `
        <div class="field">
            <label class="label">Add a new Task</label>
            <div class="control">
                <input
                        v-model="description"
                        @keypress.enter="newTask()"
                        class="input"
                        type="text"
                        placeholder="Describe your task here!">
            </div>
        </div>`
});
