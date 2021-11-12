let initialData = [['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']], index = 1, incrementChar = 0, uniqIncrement = 0;
for (let item of initialData[0]) {
    initialData[index] = [];
    initialData[index].push(item);
    for (let wordSame of initialData[0]) {
        if (wordSame !== item) {
            for (let char of wordSame) {
                if (item.length === wordSame.length && item.indexOf(char) >= 0) {
                    incrementChar++;
                    if (incrementChar === item.length) {
                        // console.log(item,wordSame,incrementChar);
                        if (initialData[index].indexOf(wordSame) < 0) {
                            initialData[index].push(wordSame);
                        }
                        incrementChar = 0;
                    }
                } else {
                    incrementChar = 0;
                }
            }
        }
    }
    if (!initialData[index].length) {
        delete initialData[index];
    }
    index++;
}
let OutputData = initialData.slice(1, initialData.length), incrementWord = 0,indexOutputData=0;
delete initialData;
for (let ResultData of OutputData) {
    for (let CloneData of OutputData){
        if(ResultData[0]!==CloneData[0]){
            for(let Word of CloneData){
                if(ResultData.indexOf(Word)>-1&&ResultData.length===CloneData.length){
                    incrementWord++;
                }
            }
            if(incrementWord===ResultData.length){
                OutputData.splice(indexOutputData,1);
                incrementWord=0;
            }
        }
    }
    indexOutputData++;
}
console.log(OutputData);
// console.log(incrementWord);
/*
Result
[
  [ 'atik', 'kita', 'tika' ],
  [ 'aku', 'kua' ],
  [ 'kia' ],
  [ 'makan' ]
]
*/