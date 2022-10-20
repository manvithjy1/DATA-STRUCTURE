function stack(){   var items = [];   //other methods go here 

//push an item in the Stack
this.push = function(element){   items.push(element); }
this.pop = function(){      return items.pop();   } 
this.display = function(){   
    let i = 0      
    while(i != items.length){
        console.log(items[i])
        i++
    }
    }
}

var stack = new stack(); //creating new instance of Stack 


document.getElementById('pushbutton').addEventListener('click',function(){
    let input = document.getElementById('pushtext').value
    stack.push(input)
    document.getElementById('table').innerHTML += `<th>${input}</th>`;
    stack.display()
})

document.getElementById('popbutton').addEventListener('click',function(){
    console.log(stack.pop()); 
    
})