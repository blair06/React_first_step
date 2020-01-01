import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//1. root라는 id를 가진 element에 app이라는 컴포넌트를 렌더링
// ReactDOM.render(<App />, document.getElementById('root'));

//2. 객체를 사용해 성과 이름 정의
// const name ={
//     firstName: "Hyewon",
//     lastName: "Kim",
// };
// const element = <h1>Hello, {name.firstName+" "+name.lastName}!</h1>

// ReactDOM.render (
//     element,
//     document.getElementById('root'));

//3. 함수를 이용한 출력
const formatName = function (name){
    return name.firstName + " " + name.lastName;
}
const name = {
    firstName: "Hyewon",
    lastName: "Kim",
};
const element = <h1>Hello, {formatName(name)}!</h1>

ReactDOM.render(
    element,
    document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
