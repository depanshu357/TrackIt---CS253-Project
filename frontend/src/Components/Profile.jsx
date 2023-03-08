import React,{useState} from 'react'


const Profile = () => {
  const [word,setWord] = useState(null);
  const handleClick = () =>{

    console.log("ok");
    console.log(word)
  }
  
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
      onClick={handleClick}
    >
      <h1>
        <input type="text" onChange={e => setWord(e.target.value)} value={word}/>
      Profile Page
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi quas beatae velit doloremque, nemo exercitationem sed veniam aliquam tenetur! Nesciunt deleniti officia consectetur voluptatibus voluptates beatae autem adipisci alias assumenda blanditiis! Veniam, quas voluptatum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic repellendus omnis pariatur eum corporis dolores iusto quaerat laudantium culpa distinctio, maxime quis sed beatae consequatur magni ab sapiente? Corporis sint alias eum sequi numquam.
      </h1>
    </div>
  )
}

export default Profile