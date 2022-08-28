function superbowlWin(array){
    const result = array.find(array=>(array.result ==="W"));
    // const result = array.find(parameter(array)=> function result)
    console.log(result);
    if (result) {
        return result.year;
    } else{
        return undefined;
    };
  } 