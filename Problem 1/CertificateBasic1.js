function minTime(files, numCores, limit) {
    let result = 0
    const newfiles = files.sort((a,b)=> b - a)
    for (let index = 0; index < files.length; index++) {
        if(limit == 0){
           result = newfiles[index] + result
        }else if(newfiles[index] % numCores == 0){
           result = (newfiles[index] / numCores ) + result;
           limit --
        }else result = result = newfiles[index] + result
        
        
    }
    
console.log(result)
}
const files = [4,1,3,2,8]
const numCores = 4
const limit = 1
minTime(files, numCores, limit)

