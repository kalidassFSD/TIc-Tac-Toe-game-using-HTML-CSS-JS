let tiles= document.querySelectorAll(".tile");
let head = document.querySelector("#header");
let btn  = document.querySelector(".controls-btn");
let turnX =true;
let player;
let time=0;
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        time++;
        if(turnX){
            tile.innerText="X";
            tile.style.color="red";
            player="X";
            turnX=false;
        }
        else{
            tile.innerText="O";
            tile.style.color="green";
            player="O";
            turnX=true;
        }
        tile.disabled="true";
        if(time===9)
            draw();
        checkWinner();
       
        
    })
});
const checkWinner= ()=>{
    
        for( winner of win){
           let q1 = tiles[winner[0]].innerText;
           let q2 = tiles[winner[1]].innerText;
           let q3 = tiles[winner[2]].innerText;
           
           if(q1!="" && q2!="" && q3!="")
           {
            if(q1===q2 && q3===q2)
               Winner();
           }
        }
};
const Winner =()=>{
    head.innerText= `" ${player} Win's"`;
    disabletile();
    btn.innerText="New Game";
    btn.style.backgroundColor="green";
}
const disabletile = ()=>{
    for(let x of tiles)
         x.disabled=true;
};
const draw =()=>{
    head.innerText= `" Oop's Game Draw"`;
    disabletile();
    btn.innerText="New Game";
    btn.style.backgroundColor="red";
    btn.style.color="black";
}
btn.addEventListener("click", ()=>{
        player="X";
        time=0;
        tiles.forEach((tile) => {
                tile.innerText="";
                tile.disabled=false;
        })
        btn.innerText="Reset Game";
        btn.style.backgroundColor="azure";
        btn.style.color="black";
        head.innerText= `Tic-Tac-Toe Begins`;
});