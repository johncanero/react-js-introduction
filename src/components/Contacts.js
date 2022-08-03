const Contacts = () => {

   const Card = (props) => {
    return <div> 
        <h2 className="colorText">{props.name}</h2>
        <img className="cardImage" src={props.src} alt="avatar_img"/>
        <p>{props.contact}</p>
        <p>{props.email}</p>
    </div>
   }


  return (
    <div>
        <h1>My Contacts</h1>
        <div className="cardPadding">
            <Card 
                name="Lionel Messi" 
                src="https://cdn.britannica.com/34/212134-050-A7289400/Lionel-Messi-2018.jpg" 
                contact="+123 456 789" 
                email="lionel@messi.com" 
            />

            <Card 
                name="Cristiano Ronaldo" 
                src="https://static.independent.co.uk/2021/09/24/22/0c8825065042ef65514483e5a5856d25Y29udGVudHNlYXJjaGFwaSwxNjMyNTgxOTQ4-2.62342572.jpg?width=1200" 
                contact="+123 456 789" 
                email="c@ronaldo.com" 
            />

            <Card 
                name="Ronaldhino" 
                src="https://pbs.twimg.com/media/DxVnbspW0AAXNy2.jpg" 
                contact="+123 456 789" 
                email="ronaldhino@.com" 
            />
        </div>

        
  </div>
  )
}
export default Contacts

