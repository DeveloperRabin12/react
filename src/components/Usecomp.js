const data ={
    title:'welcome to react',
    description:'lorem ipsum dolor whic is a component of react js in whic is a polpular',
    image : 'https://dummyimage.com/640x360/fff/aaa'

}

function Usecomp (){
    return (
<div>
    <div className ="image" ><img src = {data.image}/></div>
    <h2>{data.title}</h2>
    <p className="para" style={{color:"blue" ,
    padding :  '2px',
    maxWidth : 'px'

           

       }} > 
         {data.description}
    </p>
    <button>Read More</button>
</div>
    );
}
export default Usecomp; 