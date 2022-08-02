const Copyright = () => {

    const fName = "John";
    const lName = "Cañero";
    const currentDate = new Date();
    const year = currentDate.getFullYear()
  
    return (
      <footer>
          <div className="footerTitle">
              <h4>Created by {fName} {lName}</h4>
              <p>&copy; {year}</p> 
          </div>
      </footer>
    )
  }
  
  export default Copyright
  
  
  //  <p>{new Date().getFullYear()}</p> {/* Outputs 2020 */}