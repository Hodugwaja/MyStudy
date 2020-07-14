var OutSideFile = document.getElementById('outside');
OutSideFile.addEventListener('click', function(){
    alert("js 파일의 분리를 할 수 잇다. 하나의 js 파일을 여러 웹 페이지에 로드할 수 있고, 속도가 빨라질 수 있다");
    alert("단 script 파일을 부를 때 하단 쪽에 하자(head 테그 쪽에는 절대로 안됨)")
})