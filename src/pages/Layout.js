const Fill=(props)=>{return <h2>FILL {props.one}</h2>}

function Layout(){
    return<div>
<h1>Layout</h1>
<Fill one={"ONE"}/>
<Fill one={"TWO"}/>



    </div>
}
export default Layout