// const [lives, setLives] = useState(10);
//     const [Full, setFull] = useState(false);
//     const [findword, setFindword] = useState("");
//     const [found, setfound] = useState("");
//     const {theme} = useContext(ThemeContext);

//     const fetchWord = async () => {
//         setFull(false);
//         fetch('https://animalfinderapi.herokuapp.com/word%27)
//             .then(response => response.json())
//             .then(json => handleData(json.data.word));
//     }

//     function handleData(gword) {
//         setFindword(gword);
//         setfound(hideWord(gword));
//         console.log(gword);
//     }

//     function hideWord(str) {
//         let hidden = '';
//         for(let i = 0; i < str.length; i++){
//             hidden += '_';
//         }
//         return hidden;
//     }

//     function foundword() {
//         let result = '';
//         for(let i = 0; i < found.length; i++){
//             result +=  ${found[i]} ;
//         }
//         return result;
//     }

//     function compareWord(charToCompare) {
//         let temp = found;
//         let bravo = false;
//         for(let i = 0; i < findword.length; i++){
//             if(findword[i].toUpperCase() === charToCompare.toUpperCase()){
//                temp = setCharAt(temp, i, charToCompare);
//                bravo = true;
//             } 
//         }
//         if (temp.toUpperCase() === findword.toUpperCase()) {
//             setFull(true);
//         }
//         if (!bravo) {
//             if(lives - 1 <= 0) {
//                 setFull(true);
//             }
//             setLives(lives - 1);
//         }
//         setfound(temp);
//     }

//     function setCharAt(str,index,chr) {
//         if(index > str.length-1) return str;
//         return str.substring(0,index) + chr + str.substring(index+1);
//     }
// <button value={'Nouvelle partie'} onClick={() => fetchWord()} ></button>
//                 <input id="keydown" type="text" placeholder='Tapez une lettre' maxLength="1" onChange={(event) => compareWord(event.target.value)}></input>
//                 <p>{foundword(found)}</p>