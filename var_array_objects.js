// const, let 사용. var는 사용하지 않는다. let은 값 변경 가능

/** null vs undefined **/ 
// null : 값이 없음을 의미, undefined : 변수가 init 되지 않음(정의되지 않음)을 의미
// null은 우리가 명시적으로 값을 지정하지 않는 경우에는 변수에 null이 자동 할당되지 않음.
// let a; << undefined

/** 배열 **/ 
// 배열에는 어떤것이든 들어갈 수 있다. 함수까지 넣을 수 있다.
// let nonsense = [1, 2, "hello", false, null, undefined]; 
// nonsense.push(1);
// nonsense[1233213]; << undefined


//** object **//
// const player =  {
//     name : "nico",
//     points : 10,
//     fat : true,
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);
// player.lastNmae = "potato";

//**function **//
// const player = {
//     name: "nico",
//     sayHello: function (otherPersonsName) {
//         console.log("hello! " + otherPersonsName + " nice to meet you");
//     },
// }

// player.sayHello("lynn");

//**Conditionals**//
// const age = parseInt(prompt("How old are you?"));

// if (isNaN(age)) {
//     prompt("How old are you. please input number!")
// }


////////////////////////// JavaScript On the Browser //////////////////////////
//** The Document Object **//
// document는 이미 브라우저에 정의되어 있는 객체이고, 우리가 작성해 놓은 HTML 정보를 가지고 있다.
// 우리가 HTML로 <title>abc</title> 로 정의하면 javaScript 에서 document.title로 접근할 수 있다.
// document.title = "hi from JS"; << 이처럼 write도 가능하다. 

<h1 id="title">abs</h1>
const title = document.getElementById("title"); // 해당 h1 객체를 가져온다.
title.innerText = "Got you!" 

const hellos = document.getElementsByClassName("hello"); // 해당 클래스를 가진 객체 리스트 가져온다.

<div class="hello">
    <h1>Hello</h1>
</div>
// querySelector는 element를 CSS 방식으로 검색할 수 있다.(CSS Selector)
const title = document.querySelector(".hello h1"); // hello 클래스 안에 있는 h1을 가져온다. 만약 조건에 맞는 여러개의 h1이 있다면 첫번째 하나만 반환한다. 찾지 못했다면 null을 반환한다.
const title = document.querySelectorAll(".hello h1"); // 모든 h1을 list로 가져온다.

//** Events and event handlers **//
title.addEventListener("click", handleTitleClick); // = title.onclick = handleTitleClick; but, addEventListener를 더 선호하는 이유는 removeEventListener를 통해서 리스닝을 해제할 수 있기 때문이다. 
function handleTitleClick() {
    title.style.color = "blue";
}
title.addEventListener("mouseenter", handleMouseEnter); 
function handleMouseEnter() {
    title.innerText = "Mouse is here!";
}


window.addEventListener("resize", handleWindowResize);
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato"; // document.doby, head, title 이런것들을 중요하기 때문에 이렇게 ducument를 통해 접근할 수 있고 다른 html element들은 qeuerySelector등을 통해 접근해야 한다. 
}
window.addEventListener("copy", handleCopy);
function handleCopy() {
    alert("copier!");
}

//** CSS in JavaScript **//
window.addEventListener("offline", handleOffline);
function handleOffline() {
    alert("SOS no WIFI");
    
    const clickedClass = "clicked";
    // javaScript css style을 직접 접근하지 않고, className을 통해 style을 제어할 수 있다. 
    if (title.className === "active") {
        title.className = "";
    }
    else {
        title.className = "active";
    }
}

// 하나의 HTML element가 여러개의 class를 가질 수 있다. 그래서, 기존 Class를 지우지 않고 추가할 수 있다. 
function handleOffline() {
    alert("SOS no WIFI"); // alert이 뜨고 확인을 누르기 전까지 다른 작업이 멈추기 때문에, 프로그래밍시에 디버깅 용도로 종종 사용한다.

    const clickedClass = "clicked";

    if (title.classList.contains(clickedClass)) {
        title.classList.remove(clickedClass);
    } else {
        title.classList.add(clickedClass);
    }

    //위 다섯줄의 코드를 아래 한줄로 대체할 수 있다.
    title.classList.toggle(clickedClass); // toggle은 title의 classList에 clickedClass가 있는지 확인하고, 있으면 제거하고 없으면 추가한다.
}

// console.dir(title); // title의 모든 정보를 볼 수 있다. title element 안에 어떤 property들이 있는지 편하게 확인할 수 있다. 