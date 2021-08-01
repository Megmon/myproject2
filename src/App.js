import { Fragment } from 'react'
import './App.css'

function App() {
  
  const regist = document.getElementById("addTodo");
  regist.addEventListener("click", () => {
    //空欄チェック
    let check = document.getElementById("thing").value;
    let error = document.getElementById("error");
    if (check === '') {
      error = 'やることを入力してね＾＾'
    } else {
      error = ''
      //リストに追加
      //tableの参照を取得
      let table = document.getElementById('list')
      //取得したテーブルへ行を追加
      let newRow = table.insertRow(-1)
      //作成した行にセルを追加
      let cell1 = newRow.insertCell(-1)
      let cell2 = newRow.insertCell(-1)
      let cell3 = newRow.insertCell(-1)
      //cell1要素の作成
      let newThing = document.createTextNode(document.getElementById('thing').value)
      cell1.appendChild(newThing)
      //cell2要素の作成
      let deadline = document.getElementById('deadline').value
      if (deadline !== '') {
        deadline = deadline + 'まで'
      }
      let newDeadline = document.createTextNode(deadline)
      cell2.appendChild(newDeadline)
      //cell3要素の作成
      let btn = document.createElement('button')
      btn.id = 'comp'
      btn.innerHTML = '完了'
      btn.addEventListener('click', () => {
        const tr = btn.closest('tr')
        tr.remove()
      })
      cell3.appendChild(btn)
    }
  }
  
  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <div id="title">
            <h1>やることリスト</h1>
          </div>
          <div id="today"></div>
        </header>
        <div id="main">
          <div>
            <form>
              <input id="thing" />
              <input id="deadline" type="date" />
              <button onClick={regist}>登録</button>
            </form>
          </div>
          <div>
            <span id="error"></span>
          </div>
          <div>
            <table id="list"></table>
            <table id="compList"></table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
