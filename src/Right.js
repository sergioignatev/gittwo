import { useState } from "react";



 


function Right(){
  
    const base="https://qph.fs.quoracdn.net/main-qimg-bd575a0eafc8ff81bd166702547857fa-lq"
    const cont= "https://upload.wikimedia.org/wikipedia/commons/6/6d/Map_of_the_Spanish_Empire.png "
    
   const Change=()=>{
       setOne(previousState=>{
           return{...previousState,pict:cont,descr:"Spanish empire on its height",head:"DROIT",incr:one.incr+1}
       })
   }
    
 
    const [one,setOne]=useState({
pict:base,
descr:"Kingdom of Castille in 15th century",
head:"RIGTH",
incr:0

    })
return <div id="droit"><h1  class="text-center">{one.head}</h1>

<div  class='figc' >

<img onClick={Change} class="mt-5 iright" src={one.pict}/>


<i><h3>{one.descr}</h3>
<h2>{one.incr}</h2>

</i>

</div>

</div>

}
export default Right