sorting_container=document.getElementById("sorting_container");
sort=document.getElementById("sort");
randomise=document.getElementById("randomise");

console.log(sorting_container);

min_val=1;
max_val=20;
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
        let bars=document.createElement("div");
        bars.classList.add("bars");
        bars.style.height=array[i]+'vh';
        
        sorting_container.appendChild(bars);
    }
}
function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
}

async function bubble_sort(array){
    let bars=document.getElementsByClassName("bars");
    
    for(let i=0;i<array.length;i++){
        for(let j=0;j<(array.length);j++){
            if(array[j+1]<array[j]){
                let temp=array[j+1];
                array[j+1]=array[j];
                array[j]=temp;
                
                bars[j+1].style.height=array[j+1]+"vh"
                bars[j+1].style.backgroundColor = "#00ff00"
                bars[j].style.height=array[j]+"vh"
                bars[j].style.backgroundColor = "#00ff00"

                
                await sleep(100);
                bars[j+1].style.backgroundColor="#ffa500"
                bars[j].style.backgroundColor="#ffa500"
            }
            
        }
    }
    console.log(array);

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
    
    bubble_sort(array,sorting_container);
    
}



