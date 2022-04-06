import React, {useState , useEffect} from 'react';

function ExerciseTwo (){

    const [name , setName] = useState("");
    const [id , setId] = useState(0);
    const [position , setPosition] = useState();
    const [color , setColor] = useState({relat : "red"});
    const [count , setCount] = useState(0);

    const ChangeColor = () =>
    {

        setColor({...color, relat:"green"})

    }

    const ChangeCount = () =>{

        setCount(count + 1);
    }

    useEffect(()=>{
        document.title = `You Clicked ${count} Times`
    })

    const Submit = () =>{
          
        document.write(name);
        document.write(id);
        document.write(position);
    } 

    return(
        <div>
            <h2>Second Assignment</h2>
            <label>First Name :</label>
            <input type="text" id="name" value={name} onChange={(e)=>{setName(e.target.value)}} /><br/><br/>
            <label>Enter ID :</label>
            <input type="text" id='id' value={id} onChange={(e)=>{setId(e.target.value)}} /><br/><br/>
            <label>Job Position</label>
            <select value={position} onChange={(e)=>{setPosition(e.target.value)}}>
                <option value={"Information Technology Senior Associate"}>Information Technology Senior Associate</option>
                <option value={"Delivery Director"}>Delivery Director</option>
                <option value={"Software Developer"}>Software Developer</option>
            </select> <br/><br/>
            <button onClick={()=>Submit()}>Submit</button> <br/><br/>
            <button onClick={()=>alert("Clicked It !")}>Click Me</button><br/><br/>
            <p>{`${color.relat}`}</p><br/><br/>
            <button onClick={()=>ChangeColor()}>Change Color</button><br/><br/>
            <button onClick={()=>ChangeCount()}>Click </button>
            
        </div>
    )
}

export default ExerciseTwo