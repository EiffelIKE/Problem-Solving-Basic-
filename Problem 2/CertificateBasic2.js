function getMinCost(crew_id, job_id) {
   let result = 0
   let newcrew = crew_id.sort((a,b)=>a-b)
   let newcjob = job_id.sort((a,b)=>a-b)

   for (let index = 0; index < newcjob.length; index++) {
      result = Math.abs(newcjob[index] - newcrew[index]) + result
       
   }


console.log(result)
}
const crew_id = [5,9,4,3,8,2] 
const job_id = [9,8,1,10,1,4]
getMinCost(crew_id, job_id)
