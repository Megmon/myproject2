import { Fragment, useState } from 'react'
import './App.css'

function App() {
  const [newThing, setThing] = useState('')
  const changeThing = setThing(thing.value)
  const [isError, setIsError] = useState(false)
  const onClickRegit = setIsError(newThing || !isError)
  /*
  const regist = () => {
    //空欄チェック
    let check = document.getElementById('thing').value
    let error = document.getElementById('error')
    if (check === '') {
      error.innerHTML = 'やることを入力してね＾＾'
    } else {
      error.innerHTML = ''
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
  */

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <div>
            <h1>やることリスト</h1>
          </div>
          <div>TODAY:</div>
        </header>
        <div>
          <div>
            <form>
              <input type="text" name="thing" onChange={changeThing} value={this.state.value} />
              <input type="date" name="deadline" />
              <button onClick={onClickRegit}>登録</button>
            </form>
            {isError && <span>やることを入力してね＾＾</span>}
          </div>
          <div>
            <table></table>
            <table></table>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App
