var setcol = "brown";
var pw = 0.9;
var ng = 1;
var prevx = -1;
var prevy = -1;
var turn = 0;//white
matpos = JSON.parse(localStorage.getItem("mp"));
hl = JSON.parse(localStorage.getItem("h"));
var wkc = 0;var bkc = 0;
var wkm = 0;var bkm = 0;
var wr1m = 0;var br1m = 0;
var wcr1 = 0;var bcr1 = 0;
var wr2m = 0;var br2m = 0;
var wcr2 = 0;var bcr2 = 0;
var inipos = 
{
    "white": {
        "rook1": {
            r: 0,
            c: 0,
            active: 1
        },
        "rook2": {
            r: 7,
            c: 0,
            active: 1
        },
        "bishop1": {
            r: 2,
            c: 0,
            active: 1
        },
        "bishop2": {
            r: 5,
            c: 0,
            active: 1
        },
        "knight1": {
            r: 1,
            c: 0,
            active: 1
        },
        "knight2": {
            r: 6,
            c: 0,
            active: 1
        },
        "queen": {
            r: 3,
            c: 0,
            active: 1
        },
        "king": {
            r: 4,
            c: 0,
            active: 1
        },
        "pawn1": {
            r: 0,
            c: 1,
            active: 1
        },
        "pawn2": {
            r: 1,
            c: 1,
            active: 1
        },
        "pawn3": {
            r: 2,
            c: 1,
            active: 1
        },
        "pawn4": {
            r: 3,
            c: 1,
            active: 1
        },
        "pawn5": {
            r: 4,
            c: 1,
            active: 1
        },
        "pawn6": {
            r: 5,
            c: 1,
            active: 1
        },
        "pawn7": {
            r: 6,
            c: 1,
            active: 1
        },
        "pawn8": {
            r: 7,
            c: 1,
            active: 1
        }  
    },
    "black": {
        "rook1": {
            r: 0,
            c: 7,
            active: 1
        },
        "rook2": {
            r: 7,
            c: 7,
            active: 1
        },
        "bishop1": {
            r: 2,
            c: 7,
            active: 1
        },
        "bishop2": {
            r: 5,
            c: 7,
            active: 1
        },
        "queen": {
            r: 3,
            c: 7,
            active: 1
        },
        "knight1": {
            r: 1,
            c: 7,
            active: 1
        },
        "knight2": {
            r: 6,
            c: 7,
            active: 1
        },
        "king": {
            r: 4,
            c: 7,
            active: 1
        },
        "pawn1": {
            r: 0,
            c: 6,
            active: 1
        },
        "pawn2": {
            r: 1,
            c: 6,
            active: 1
        },
        "pawn3": {
            r: 2,
            c: 6,
            active: 1
        },
        "pawn4": {
            r: 3,
            c: 6,
            active: 1
        },
        "pawn5": {
            r: 4,
            c: 6,
            active: 1
        },
        "pawn6": {
            r: 5,
            c: 6,
            active: 1
        },
        "pawn7": {
            r: 6,
            c: 6,
            active: 1
        },
        "pawn8": {
            r: 7,
            c: 6,
            active: 1
        }                
    }
}
pos = inipos;
function start(){
    c = document.getElementById("can");
    ctx = c.getContext("2d");
    if(window.innerHeight<window.innerWidth){
        c.height = pw*window.innerHeight;    
        c.width = pw*window.innerHeight;
    }
    else{    
        c.width = pw*window.innerWidth;
        c.height = pw*window.innerWidth;
    }
    bx = c.width/8;
    by = c.height/8;
    game();
//            setInterval(game(),1000/15);
}
function boxcol(x,y){
    if((x+y)%2 == 0){
        ctx.fillStyle = "white";
    }
    else{
        ctx.fillStyle = setcol;
    }
}
function drawpiece(x,y,s){
    boxcol(x,y);
    ctx.fillRect(x*bx,y*by,bx,by);
    if(s == "bpawn"){
        bp4 = new Image();
        bp4.src = 'images/bpawn.png';
        bp4.onload = function(){
            ctx.drawImage(bp4,bx*x,by*y,bx,by);
        }
    }
    if(s == "wpawn"){
        wp4 = new Image();
        wp4.src = 'images/wpawn.png';
        wp4.onload = function(){
            ctx.drawImage(wp4,bx*x,by*y,bx,by);
        }
    } 
    if(s == "wrook"){
        wr4 = new Image();
        wr4.src = 'images/wrook.png';
        wr4.onload = function(){
            ctx.drawImage(wr4,bx*x,by*y,bx,by);
        } 
    }
    if(s == "brook"){
        br4 = new Image();
        br4.src = 'images/brook.png';
        br4.onload = function(){
            ctx.drawImage(br4,bx*x,by*y,bx,by);
        } 
    }
    if(s == "wbish"){
        wb4 = new Image();
        wb4.src = 'images/wbish.png';
        wb4.onload = function(){
            ctx.drawImage(wb4,bx*x,by*y,bx,by);
        } 
    }
    if(s == "bbish"){
        bb4 = new Image();
        bb4.src = 'images/bbish.png';
        bb4.onload = function(){
            ctx.drawImage(bb4,bx*x,by*y,bx,by);
        } 
    }
    if(s == "wqueen"){
        wq4 = new Image();
        wq4.src = 'images/wqueen.png';
        wq4.onload = function(){
            ctx.drawImage(wq4,bx*x,by*y,bx,by);
        }
    }
    if(s == "bqueen"){
        bq4 = new Image();
        bq4.src = 'images/bqueen.png';
        bq4.onload = function(){
            ctx.drawImage(bq4,bx*x,by*y,bx,by);
        }
    }
    if(s == "wking"){
        wk4 = new Image();
        wk4.src = 'images/wking.png';
        wk4.onload = function(){
            ctx.drawImage(wk4,bx*x,by*y,bx,by);
        }
    }
    if(s == "bking"){
        bk4 = new Image();
        bk4.src = 'images/bking.png';
        bk4.onload = function(){
            ctx.drawImage(bk4,bx*x,by*y,bx,by);
        }
    }
    if(s == "whorse"){
        wh4 = new Image();
        wh4.src = 'images/wknight.png';
        wh4.onload = function(){
            ctx.drawImage(wh4,bx*x,by*y,bx,by);
        }
    }
    if(s == "bhorse"){
        bh4 = new Image();
        bh4.src = 'images/bknight.png';
        bh4.onload = function(){
            ctx.drawImage(bh4,bx*x,by*y,bx,by);
        }
    }
}
function borderfill(x,y){
    ctx.fillStyle = "blue";
    ctx.fillRect(Math.floor(x/bx)*bx,Math.floor(y/by)*by,bx,0.05*by);               ctx.fillRect(Math.floor(x/bx)*bx,Math.floor(y/by)*by,0.05*bx,by);
    ctx.fillRect(Math.floor(x/bx)*bx,Math.floor(y/by)*by+by-(0.05*by),bx,0.05*by);             
    ctx.fillRect(Math.floor(x/bx)*bx+bx-(0.05*bx),Math.floor(y/by)*by,0.05*bx,by);
    hl[Math.floor(x/bx)][Math.floor(y/by)] = 1;

}
function borderclear(){
    for(var i = 0;i < 8;i++){
        for(var j = 0;j < 8;j++){
            if(hl[i][j]==1){
                boxcol(i,j);
                ctx.fillRect(i*bx,j*by,bx,0.05*by);                         
                ctx.fillRect(i*bx,j*by,0.05*bx,by);
                ctx.fillRect(i*bx,j*by+by-(0.05*by),bx,0.05*by);             
                ctx.fillRect(i*bx+bx-(0.05*bx),j*by,0.05*bx,by);

                hl[i][j] = 0;                        
            }
        }
    }
}
function straightcheck(x,y){
    l = 1;
    while(x+l < 8 && matpos[x+l][y]==null){
        borderfill((x+l)*bx,y*by);
        hl[x+l][y] = 1;
        l++;
    }
    if(x+l < 8){
        if(matpos[x+l][y][0]!=matpos[x][y][0]){
            borderfill((x+l)*bx,y*by);
            hl[x+l][y] = 1;   
        }
    }
    l = 1;
    while(y+l < 8 && matpos[x][y+l]==null){
        borderfill(x*bx,(y+l)*by);
        hl[x][y+l] = 1;
        l++;
    }
    if(y+l < 8){
        if(matpos[x][y+l][0]!=matpos[x][y][0]){
            borderfill((x)*bx,(y+l)*by);
            hl[x][y+l] = 1;   
        }
    }
    l = 1;
    while(x-l >= 0 && matpos[x-l][y]==null){
        borderfill((x-l)*bx,y*by);
        hl[x-1][y] = 1;
        l++;
    }
    if(x-l >= 0){
        if(matpos[x-l][y][0]!=matpos[x][y][0]){
            borderfill((x-l)*bx,y*by);
            hl[x-l][y] = 1;   
        }
    }
    l = 1;
    while(y-l>=0 && matpos[x][y-l]==null){
        borderfill(x*bx,(y-l)*by);
        hl[x][y-l] = 1;
        l++;
    }
    if(y-l >= 0){
        if(matpos[x][y-l][0]!=matpos[x][y][0]){
            borderfill((x)*bx,(y-l)*by);
            hl[x][y-l] = 1;   
        }
    }

}
function crosscheck(x,y){
    l = 1;
    while(x+l < 8 && y+l < 8 && matpos[x+l][y+l]==null){
        borderfill((x+l)*bx,(y+l)*by);
        hl[x+l][y+l] = 1;
        l++;
    }
    if(x+l < 8 && y+l < 8){
        if(matpos[x+l][y+l][0]!=matpos[x][y][0]){
            borderfill((x+l)*bx,(y+l)*by);
            hl[x+l][y+l] = 1;
        }
    }
    l = 1;
    while(x-l >= 0 && y+l < 8 && matpos[x-l][y+l]==null){
        borderfill((x-l)*bx,(y+l)*by);
        hl[x-l][y+l] = 1;
        l++;
    }
    if(x-l >= 0 && y+l < 8){
        if(matpos[x-l][y+l][0]!=matpos[x][y][0]){
            borderfill((x-l)*bx,(y+l)*by);
            hl[x-l][y+l] = 1;
        }
    }
    l = 1;
    while(x+l < 8 && y-l >= 0 && matpos[x+l][y-l]==null){
        borderfill((x+l)*bx,(y-l)*by);
        hl[x+l][y-l] = 1;
        l++;
    }
    if(x+l < 8 && y-l >= 0){
        if(matpos[x+l][y-l][0]!=matpos[x][y][0]){
            borderfill((x+l)*bx,(y-l)*by);
            hl[x+l][y-l] = 1;
        }
    }
    l = 1;
    while(x-l>=0 && y-l >= 0 && matpos[x-l][y-l]==null){
        borderfill((x-l)*bx,(y-l)*by);
        hl[x-l][y-l] = 1;
        l++;
    }
    if(x-l >= 0 && y-l >= 0){
        if(matpos[x-l][y-l][0]!=matpos[x][y][0]){
            borderfill((x-l)*bx,(y-l)*by);
            hl[x-l][y-l] = 1;
        }
    }            
}
function checkforking(nx,ny,x,y){
    if(matpos[nx][ny]==null || matpos[nx][ny][0]!=matpos[x][y][0]){
            borderfill(nx*bx,ny*by);
            hl[nx][ny] = 1;   
        }
}
function onestrcheck(x,y){
    if(y+1 < 8){
        checkforking(x,y+1,x,y);
    }
    if(y-1 >= 0){
        checkforking(x,y-1,x,y);
    }
    if(x+1 < 8){
        checkforking(x+1,y,x,y);
    }
    if(x-1 >= 0){
        checkforking(x-1,y,x,y);
    }
}
function onecrosscheck(x,y){
    if(x+1 < 8 && y+1 < 8){
        checkforking(x+1,y+1,x,y);
    }
    if(x+1 < 8 && y-1 >= 0){
        checkforking(x+1,y-1,x,y);
    }
    if(x-1>=0 && y+1 < 8){
        checkforking(x-1,y+1,x,y);
    }
    if(x-1>=0 && y-1>=0){
        checkforking(x-1,y-1,x,y);
    }
}
function horsecheck(x,y){
    if(x+2 < 8 && y+1 < 8){
        checkforking(x+2,y+1,x,y);
    }
    if(x+2 < 8  && y-1 >= 0){
        checkforking(x+2,y-1,x,y);
    }
    if(x-2 >= 0 && y+1 < 8){
        checkforking(x-2,y+1,x,y);
    }
    if(x-2 >= 0 && y-1 >= 0){
        checkforking(x-2,y-1,x,y);                
    }
    if(x+1 < 8 && y+2 < 8){
        checkforking(x+1,y+2,x,y);
    }
    if(x+1 < 8  && y-2 >= 0){
        checkforking(x+1,y-2,x,y);
    }
    if(x-1 >= 0 && y+2 < 8){
        checkforking(x-1,y+2,x,y);
    }
    if(x-1 >= 0 && y-2 >= 0){
        checkforking(x-1,y-2,x,y);                
    }
}
function possibilities(x,y){
    if(matpos[x][y]=="wpawn"){
        if(x+1 < 8 && y+1 < 8 && matpos[x+1][y+1]!=null){
            if(matpos[x+1][y+1][0]=='b'){
                borderfill((x+1)*c.width/8,(y+1)*c.height/8);
                hl[x+1][y+1] = 1;
            }
        }
        if(x-1 >= 0 && y+1 < 8 && matpos[x-1][y+1]!=null){
            if(matpos[x-1][y+1][0]=='b'){    
                borderfill((x-1)*c.width/8,(y+1)*c.height/8);
                hl[x-1][y+1] = 1;
            }
        }
        if(y+1<8 && matpos[x][y+1]==null){
            if(y==1 && matpos[x][3]==null){
                borderfill(x*bx,(3)*bx);
                hl[x][y+2] = 1;
            }
            borderfill(x*bx,(y+1)*by);
            hl[x][y+1] = 1;
        }
    }
    if(matpos[x][y]=="bpawn"){
        if(x+1 < 8 && y-1 >= 0 && matpos[x+1][y-1]!=null){
            if(matpos[x+1][y-1][0]=='w'){
                borderfill((x+1)*c.width/8,(y-1)*c.height/8);
                hl[x+1][y-1] = 1;
            }
        }
        if(x-1 >= 0 && y-1 >= 0 && matpos[x-1][y-1]!=null){
            if(matpos[x-1][y-1][0]=='w'){
                borderfill((x-1)*c.width/8,(y-1)*c.height/8);
                hl[x-1][y-1] = 1;
            }
        }
        if(y-1>=0 && matpos[x][y-1]==null){
            if(y==6 && matpos[x][4]==null){
                borderfill(x*bx,4*bx);
                hl[x][4] = 1;
            }
            borderfill(x*bx,(y-1)*by);
            hl[x][y-1] = 1;
        }
    }
    if(matpos[x][y]=="wrook" || matpos[x][y]=="brook"){
        straightcheck(x,y);
    }
    if(matpos[x][y] == "wbish" || matpos[x][y] == "bbish"){
        crosscheck(x,y);
    }
    if(matpos[x][y] == "wqueen" || matpos[x][y] == "bqueen"){
        straightcheck(x,y);
        crosscheck(x,y);
    }
    if(matpos[x][y]=="wking" || matpos[x][y]=="bking"){
        onestrcheck(x,y);
        onecrosscheck(x,y);
        if(matpos[x][y] == "wking" && wkc == 0 && wkm == 0){
            if(wr1m == 0 && matpos[5][0]==null && matpos[6][0]==null){
                borderfill(6*bx,0);
                wcr1 = 1;
            }
            if(wr2m == 0 && matpos[3][0]==null && matpos[2][0]==null && matpos[1][0]==null){
                borderfill(2*bx,0);
                wcr2 = 1;
            }
        }
        if(matpos[x][y] == "bking" && bkc == 0 && bkm == 0){
            if(br1m == 0 && matpos[5][7]==null && matpos[6][7]==null){
                borderfill(6*bx,7*bx);
                bcr1 = 1;
            }
            if(br2m == 0 && matpos[3][7]==null && matpos[2][7]==null && matpos[1][7]==null){
                borderfill(2*bx,7*bx);
                bcr2 = 1;
            }
        }
    }
    if(matpos[x][y]=="whorse" || matpos[x][y]=="bhorse"){
        horsecheck(x,y);
    }
    if(hl[4][0] == 1){
//        wkc = 1;
    }
    if(hl[4][7] == 1){
//        bkc = 1;
    }
}
function movepiece(x,y,prevx,prevy){
    boxcol(prevx,prevy);
    ctx.fillRect(prevx*bx,prevy*by,bx,by);
    drawpiece(x,y,matpos[prevx][prevy]);
    matpos[x][y]=matpos[prevx][prevy];
    matpos[prevx][prevy] = null;
}
function move(x,y,prevx,prevy){
    if(matpos[prevx][prevy][1] == 'r'){
        if(matpos[prevx][prevy][0] == 'w'){
            if(prevx == 7 && prevy == 0){wr1m = 1;wcr1=0;}
            if(prevx == 0 && prevy == 0){wr2m = 1;wcr2=0;}
        }
        if(matpos[prevx][prevy][0] == 'b'){
            if(prevx == 7 && prevy == 7){br1m = 1;bcr1=0;}
            if(prevx == 0 && prevy == 7){br2m = 1;bcr2=0;}
        }
    }
    if(matpos[prevx][prevy][1] == 'k'){
        if(matpos[prevx][prevy][0] == 'w'){
            wkm = 1;
            if(wcr1 == 1 && x == 6 && y == 0)movepiece(5,0,7,0);
            if(wcr2 == 1 && x == 2 && y == 0)movepiece(3,0,0,0);
            wcr1=wcr2=0;
        }
        if(matpos[prevx][prevy][0] == 'b'){
            bkm = 1;
            if(bcr1 == 1 && x == 6 && y == 7)movepiece(5,7,7,7);
            if(bcr2 == 1 && x == 2 && y == 7)movepiece(3,7,0,7);
            bcr1=bcr2=0;
        }
    }
    movepiece(x,y,prevx,prevy);
    turn = 1-turn;
    borderclear();
}
function piececlick(event){
    flag = 0;
    x = event.clientX - c.offsetLeft;
    y = event.clientY - c.offsetTop;
//            console.log(x+" "+y);
    if(hl[Math.floor(x/bx)][Math.floor(y/by)] == 0 || Math.floor(prevx/bx)==Math.floor(x/bx) && Math.floor(prevy/by)==Math.floor(y/by)){   
        borderclear();
        for(var i = 0;i < 8;i++){
            for(var j = 0;j < 8;j++){
                if(matpos[i][j]!=null){
                    drawpiece(i,j,matpos[i][j]);
                }
            }
        }
    }
    else{
        move(Math.floor(x/bx),Math.floor(y/by),Math.floor(prevx/bx),Math.floor(prevy/by));
        flag = 1;
    }
    if(hl[Math.floor(x/bx)][Math.floor(y/by)] == 0 && matpos[Math.floor(x/bx)][Math.floor(y/by)] != null && flag == 0){
        if(turn == 0){
//            console.log(Math.floor(x/bx)+" "+Math.floor(y/by)+" "+matpos[Math.floor(x/bx)][Math.floor(y/by)])
            if(matpos[Math.floor(x/bx)][Math.floor(y/by)][0]=='w'){
                borderfill(x,y);
//                        hl[x][y] = 1;
                possibilities(Math.floor(x/bx),Math.floor(y/by));    
            }
        }
        if(turn == 1){
            if(matpos[Math.floor(x/bx)][Math.floor(y/by)][0]=='b'){
                borderfill(x,y);
//                        hl[x][y] = 1;
                possibilities(Math.floor(x/bx),Math.floor(y/by));
            }
        }
    }
    else{
        borderclear();
    }
    prevx = x;
    prevy = y;
}
function game(){
    drawboard();
    if(ng == 1){
        defaultpieces();
        ng = 0;
    }
    drawpieces();
    c.addEventListener('click',piececlick,false);
}
function drawboard(){
    ctx.fillStyle = setcol;
    ctx.fillRect(0,0,c.width,c.height);
    x = (c.width)/8;
    y = (c.height)/8;
    ctx.fillStyle = "white";
    for(var i = 0;i < 8;i++){
        for(var j = 0;j < 8;j++){
            if((i+j)%2==0){
                ctx.fillRect(i*x,j*y,x,y);
            }
        }
    }            
}
function defaultpieces(){
    pos = inipos;
}
function drawpieces(){
//            console.log("draw");
    x = c.width/8;
    y = c.height/8;
    if(pos.black.pawn1.active == 1){
//                bp1 = new Image();
//                bp1.src = 'images/pawn.png';
//                bp1x = pos.black.pawn1.r;
//                bp1y = pos.black.pawn1.c;
//                bp1.onload = function(){
//                    ctx.drawImage(bp1,bp1x*x,bp1y*y,x,y);
//                }
        drawpiece(pos.black.pawn1.r,pos.black.pawn1.c,"bpawn");
    }
    if(pos.black.pawn2.active == 1){
        drawpiece(pos.black.pawn2.r,pos.black.pawn2.c,"bpawn");
    }
    if(pos.black.pawn3.active == 1){
        drawpiece(pos.black.pawn3.r,pos.black.pawn3.c,"bpawn");
    }
    if(pos.black.pawn4.active == 1){
        drawpiece(pos.black.pawn4.r,pos.black.pawn4.c,"bpawn");
    }
    if(pos.black.pawn5.active == 1){
        drawpiece(pos.black.pawn5.r,pos.black.pawn5.c,"bpawn");
    }
    if(pos.black.pawn6.active == 1){
        drawpiece(pos.black.pawn6.r,pos.black.pawn6.c,"bpawn");
    }
    if(pos.black.pawn7.active == 1){
        drawpiece(pos.black.pawn7.r,pos.black.pawn7.c,"bpawn");
    }
    if(pos.black.pawn8.active == 1){
        drawpiece(pos.black.pawn8.r,pos.black.pawn8.c,"bpawn");
    }
    if(pos.black.rook1.active == 1){
        drawpiece(pos.black.rook1.r,pos.black.rook1.c,"brook");
    }
    if(pos.black.rook2.active == 1){
        drawpiece(pos.black.rook2.r,pos.black.rook2.c,"brook");
    }
    if(pos.black.bishop1.active == 1){
        drawpiece(pos.black.bishop1.r,pos.black.bishop1.c,"bbish");
    }
    if(pos.black.bishop2.active == 1){
        drawpiece(pos.black.bishop2.r,pos.black.bishop2.c,"bbish");
    }
    if(pos.black.queen.active == 1){
        drawpiece(pos.black.queen.r,pos.black.queen.c,"bqueen");
    }
    if(pos.black.king.active == 1){
        drawpiece(pos.black.king.r,pos.black.king.c,"bking");
    }
    if(pos.black.knight1.active == 1){
        drawpiece(pos.black.knight1.r,pos.black.knight1.c,"bhorse");
    }
    if(pos.black.knight2.active == 1){
        drawpiece(pos.black.knight2.r,pos.black.knight2.c,"bhorse");
    }



    if(pos.white.pawn1.active == 1){
        drawpiece(pos.white.pawn1.r,pos.white.pawn1.c,"wpawn");
    }
    if(pos.white.pawn2.active == 1){
        drawpiece(pos.white.pawn2.r,pos.white.pawn2.c,"wpawn");
    }
    if(pos.white.pawn3.active == 1){
        drawpiece(pos.white.pawn3.r,pos.white.pawn3.c,"wpawn");
    }
    if(pos.white.pawn4.active == 1){
        drawpiece(pos.white.pawn4.r,pos.white.pawn4.c,"wpawn");

    }
    if(pos.white.pawn5.active == 1){
        drawpiece(pos.white.pawn5.r,pos.white.pawn5.c,"wpawn");
    }
    if(pos.white.pawn6.active == 1){
        drawpiece(pos.white.pawn6.r,pos.white.pawn6.c,"wpawn");
    }
    if(pos.white.pawn7.active == 1){
        drawpiece(pos.white.pawn7.r,pos.white.pawn7.c,"wpawn");
    }
    if(pos.white.pawn8.active == 1){
        drawpiece(pos.white.pawn8.r,pos.white.pawn8.c,"wpawn");
    }
    if(pos.white.rook1.active == 1){
        drawpiece(pos.white.rook1.r,pos.white.rook1.c,"wrook");
    }
    if(pos.white.rook2.active == 1){
        drawpiece(pos.white.rook2.r,pos.white.rook2.c,"wrook");
    }
    if(pos.white.bishop1.active == 1){
        drawpiece(pos.white.bishop1.r,pos.white.bishop1.c,"wbish");
    }
    if(pos.white.bishop2.active == 1){
        drawpiece(pos.white.bishop2.r,pos.white.bishop2.c,"wbish");
    }
    if(pos.white.queen.active == 1){
        drawpiece(pos.white.queen.r,pos.white.queen.c,"wqueen");
    }
    if(pos.white.king.active == 1){
        drawpiece(pos.white.king.r,pos.white.king.c,"wking");
    }
    if(pos.white.knight1.active == 1){
        drawpiece(pos.white.knight1.r,pos.white.knight1.c,"whorse");
    }
    if(pos.black.knight2.active == 1){
        drawpiece(pos.white.knight2.r,pos.white.knight2.c,"whorse");
    }
}