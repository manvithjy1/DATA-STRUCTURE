class Queue {
   
    constructor(){
      
      this.data = [];
      this.rear = 0;
      this.size = 10;
    }

    enqueue(element) {
        if(this.rear < this.size ) {
              this.data[this.rear] = element;
              this.rear = this.rear + 1;
         }
      }

    isEmpty() {
   
        return this.rear === 0;
      }

    dequeue() {
       if(this.isEmpty() === false) {
             
             this.rear = this.rear-1;
             return this.data.shift();
        }
     }

    update() {
   
        for(let i =0; i < this.rear; i++) {
           console.log(this.data[i]);
           
         }
     }
}

var queue = new Queue(); //creating new instance of Stack 

document.getElementById('enqueue').addEventListener('click',function(){
    let input = document.getElementById('value').value
    queue.enqueue(input)
    queue.update()

})

document.getElementById('dequeue').addEventListener('click',function(){
    queue.dequeue()
    queue.update()
    
})