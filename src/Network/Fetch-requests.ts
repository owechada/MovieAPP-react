



async function iterableFetch(url:string){
var completarr=[]


 var first_response= await fetch(url,{method:'GET'})
var data= await first_response.json()
var res=data.results;
var totalpage=data.total_pages
var page= data.page
if (page<=totalpage){
completarr.push(res)

for(let i=2; i<=50;i++){
 console.log("getting pages data for",i)
  var cons_response= await fetch(`${url}&&?page=${i}`,{method:'GET'})
  var data= await cons_response.json()
  var res=data.results
  completarr=completarr.concat(res)
}

}

return completarr;
}
export function  SearchMovieByTitle(querry:string){
var fulldata=iterableFetch(`https://api.themoviedb.org/3/search/movie?query=${querry}&api_key=3ee667a41011640319f3bd446a38c57d`) 

   
return fulldata
} 
export async function GetMoviewById(id:string){

  var res =await  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=3ee667a41011640319f3bd446a38c57d`)

return res
}

export function GetPopularMoview(){

  var fulldata=iterableFetch('https://api.themoviedb.org/3/movie/popular?api_key=3ee667a41011640319f3bd446a38c57d') 

   
  return fulldata

}