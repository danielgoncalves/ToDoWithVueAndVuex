
var store = new Vuex.Store({
    state: {
        taskList: [
            {description: 'Do the laundry', done: false},
            {description: 'Change baby\'s diaper', done: true},
            {description: 'Walk the dog', done: false},
        ]
    },
    mutations: {
        NEW_TASK: function(state, taskDescription) {
            state.taskList.push({description: taskDescription, done: false});
        },
        REMOVE_TASK: function(state, task) {
            var index = state.taskList.indexOf(task);
            state.taskList.splice(index, 1);
        },
        TOGGLE_TASK: function(state, payload) {
            // <payload> object {targetTask: T, doneState: boolean}
            var index = state.taskList.indexOf(payload.targetTask);
            state.taskList[index].done = payload.doneState;
        }
    }
});

window.STORE = store;
