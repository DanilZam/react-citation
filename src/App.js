import React, { useState } from 'react'
// import styles1 from './styles.css'
import styles from './App.module.css'
import { top3it } from './Top3.data';
import {Top3Item} from './Top3-item/Top3-item';
import NewTopIt from './Top3-item/NewTopIt';
import { Table } from './table/Table';
import { FilSort } from './FilterSort/FilterSort';

function App() {

  const [isOpen, setIsPressed] = useState(false)

  function handleButtonClick(){ 
    setIsPressed(!isOpen)
  }

  return (
    
    <div className={styles.MainDiv}>
      <div className={styles.divb} >
      <button onClick={()=>{handleButtonClick()}} className={!isOpen ? styles.butt : styles.Disable}  id={styles.left}>Таблицы</button>
      <button onClick={()=>{handleButtonClick()}} className={isOpen ? styles.butt : styles.Disable} id={styles.right}>Графики</button>
      </div>

      {isOpen && (<div className={styles.Graph}>

      </div>)}

      <div>
        <h1>Топ 3</h1>
        <div className={styles.blockIt}>
        {top3it.length ? (top3it.map(top => <Top3Item key={top.id} top={top} /> ) ) 
        : <p>Отсутствуют данные по цитированию</p> }           
        </div>
      </div>
      <FilSort/>
      <NewTopIt/>
      <Table />
    </div>
  );
}


export default App;