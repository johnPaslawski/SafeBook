export const sortObjectsArrayByDate = (array) => {
    for(let j = 0; j < array.length; j++){
        for(let i = 0; i < array.length; i++){
            if(i+1 <= array.length - 1 && array[i].creationDate < array[i+1].creationDate){
                let save = array[i];
                array[i] = array[i+1];
                array[i+1] = save;
            }
        }
    }
    return array;
}