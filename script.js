const todolist = new Vue({
    el: '#app',
    data: {
        dolist: [
            {
                toDo: 'one hour of workout',
                check: false
            } ,
            {
                toDo: 'clean the bathroom',
                check: false
            },
            {
                toDo: 'make some dubstep',
                check: false
            },
            {
                toDo: 'having fun with vue',
                check: false
            },
            {
                toDo: 'watch the sky',
                check: false
            },
            {
                toDo: 'sleep on a cloud',
                check: false
            },
        ],
        newDo: {
            toDo: null,
            check: false
        }
       
    },
    methods: {
        changeCheck(index){
            this.dolist[index].check = !this.dolist[index].check
        },
        removeItem(index){
            this.dolist.splice(index, 1); 
            if (this.dolist.length === 0){
                let pp = document.createElement('p')
                pp.innerHTML = 'inserisci una thing !'
                console.log(pp)
            }
        },
        addItem(){
            let tonno = {
                toDo: this.newDo.toDo,
                check: false
            }
            this.dolist.push(tonno)
        }
    }
})