import React, {Component} from 'react'; // 클래스 방식의 컴포넌트 작성을 위해 추가
import logo from './logo.svg';
import './App.css';

/** 컴포넌트 - 리액트를 통해 만든 사용자 정의 태그 */

// 아래는 함수 방식의 컴포넌트.
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

/**
 * class 방식의 컴포넌트
 * 리액트 컴포넌트는 하나의 태그 안에 들어가야 함
 * return에 그냥 문자열만 넣거나 여러 태그를 사용하면 오류 발생
 * 
 */
class App extends Component {
  render() { 
    return (
      <div className="App">
        Hello, React!!
      </div>
      );
  }
}

export default App;
