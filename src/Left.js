
const St={
    marginLeft:"10px",
    width:'90%',
    color:"blue"
    
}
function Left(){
    return (
       <div style={St} > <form >
          <label>Enter your name:
            <input placeholder="NAME" style={St} class="left-inp" type="text" />
          </label>
          <h4>Enter your name here</h4>
        </form>
        <p >Lorem ipsum dolores sit amei</p>
        
        </div>
      )
}
export default Left
