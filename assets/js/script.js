let a = document.getElementById('d-1'); //fetchig the pending tasks tab
let b = document.getElementById('d-2'); //fetching the completed tasks tab

a.addEventListener('click', function(){
    //if pending tasks is clicked we render the index route
    window.open('http://localhost:8000/', '_self');
});

b.addEventListener('click', function(){
    //if completed tasks is clicked we render te completed-tasks route
    window.open('http://localhost:8000/completed-tasks', '_self');
});