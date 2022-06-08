

function listContainerReducer(state, action){
    console.log("reducer시작 =>", state)
    if(state===undefined){
        return {
            type:'read',
            content : [ 
                { id:1, title:"Toy PJT 만들기" , description:'Redux, Webpack 학습내용 적용하여 PJT 만드는 중 ...', isChecked:false },
                { id:2, title:"생활코딩 시청하기" , description:'React에서 Redux적용 강좌 시청 꼭 필요', isChecked:false },
                { id:3, title:"Typescript 강좌 시청" , description:'캡틴판교가 진행하는 typescript 실전 강좌 시청 필요', isChecked:false }
            ]
        }
    }
    else{
        
        return 0;

    }
}

var store = Redux.createStore(listContainerReducer)

function listShowFn(){
    var state = store.getState()
    console.log(state)
    var i = 0
    var list = '' 
    console.log(store)
    while(i<state.content.length){
        list = list + `
        <li>
            <p>
                <input type="checkbox" id="${state.content[i].id}" 
                    onclick="store.dispatch({isChecked:!state.content[i].isChecked});">
                <label for=${state.content[i].id}>${state.content[i].title}</label>
            </p>
        </li>
        `
        i=i+1;
    }
    document.querySelector("#listContainer").innerHTML=`
    <ul>
        ${list}
    </ul>
    `
}
store.subscribe(listShowFn)
listShowFn();
