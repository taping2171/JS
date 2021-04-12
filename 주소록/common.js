let n = document.getElementsByName("name")[0]; 
let p = document.getElementsByName("tel")[0];
let t = document.getElementById("addrlist");
// 저장 버튼 클릭 시 이름, 전화번호를 저장하는 함수
function addAddr() {
    let text = document.createTextNode(n.value + " , " + p.value);
    let li = document.createElement("li");
    li.appendChild(text);
    t.appendChild(li);

}

// 리셋 버튼 클릭 시 저장된 이름, 전화번호를 삭제하고 배경을 원래대로 만들어주는 함수
function resetAddr () {
    t.innerHTML="";
    document.body.style.backgroundColor = "white";
}

// 색상변경 버튼 클릭 시 바디 색상을 오렌지컬러로 바꿔주는 함수
function changeBg() {
    document.body.style.backgroundColor = "yellow";
}