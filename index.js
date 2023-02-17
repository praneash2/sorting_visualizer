sorting_container=document.getElementById("sorting_container");
sort=document.getElementById("sort");
randomise=document.getElementById("randomise");

console.log(sorting_container);

min_val=1;
max_val=30;
let array=[]
for(let i=min_val;i<max_val;i++){
    array.push(0);
}   

function random_generate(array,min_val,max_val){
    for(let i=min_val;i<max_val;i++){
        let val=Math.floor(Math.random()*max_val)+min_val;
        array[i]=val;
    }
    
    return array;
}

function render(array){
    for(let i=0;i<array.length;i++){
        let bar=document.createElement("div");
        bar.classList.add("bars");
        bar.style.height=array[i]+'vh';
        sorting_container.appendChild(bar);
    }
}

function bubble_sort(array){
    for(let i=0;i<array.length;i++){
        for(let j=i;j<array.length;j++){
            if(array[i]>array[j]){
                let temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }

}

console.log(array);
random_generate(array,min_val,max_val);
console.log(array)
// bubble_sort(array);
render(array);
randomise.addEventListener("click",main_control_randomise);
function main_control_randomise(){

    sorting_container.innerHTML="";    
    random_generate(array,min_val,max_val);
    render(array);
    
}
sort.addEventListener("click",main_control_sort);
function main_control_sort(){
    sorting_container.innerHTML=""; 
    bubble_sort(array);
    render(array)
}



