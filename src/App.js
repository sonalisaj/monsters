import React, { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

   const onSearchChange = (e) => {
            const searchFieldString = e.target.value.toLocaleLowerCase();
            setSearchField(searchFieldString)  
   }
  
    // const filteredMonsters = monsters.filter((monster) => {
    //           return monster.name.toLocaleLowerCase().includes(searchField);
    // });
  
  useEffect(() => {
     fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((user) => 
        setMonsters(user)
      )
  }, [])

  useEffect(() => {
      const newFilteredMonsters = monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchField);
      });
    
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])
  
  

  return (
    <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='Search Monsters'
          className='monsters-search-box'
        />
      <CardList monsters={ filteredMonsters } />
    </div>
  )
}


// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((res) => res.json())
//       .then((user) => 
//         this.setState(
//           () => {
//             return { monsters: user }
//           },
//           () => {
//             console.log(this.state)
//           }
          
//         )
//       )
//   }
 
//   onSearchChange = (e) => {
//             const searchField = e.target.value.toLocaleLowerCase();
//             this.setState(() => {
//               return { searchField };
//             })
//          }

//   render()
//   {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
     
//    const filteredMonsters = monsters.filter((monster) => {
//               return monster.name.toLocaleLowerCase().includes(searchField);
//    });
    
//     return (
//     <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder='Search Monsters'
//           className='monsters-search-box'
//         />
//       <CardList monsters={ filteredMonsters } />
//     </div>
//     );
//   }
// }

export default App;
