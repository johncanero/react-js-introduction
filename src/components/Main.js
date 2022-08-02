const Main = () => {

    // const name = "Jam";
    const customStyle = {
      color: 'purple',
      fontSize: '15px',
    }
  
    // You could modify the color immediately 
    // customStyle.color ='navy'
  
  
    return (
      <main>
          <div className="displayImageContent">
              <img className="imageContent" src="https://patterns.dev/img/reactjs/react-logo@3x.svg" alt="reactJs.png" />
              <img className="imageContent" src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/photo-1619410283995-43d9134e7656.jpeg" alt="codingInterface.png"/>
          </div>
  
          <div>
              <h1 style={{color:'#7c02ff97'}}>Hello World!</h1>
              <p style={customStyle}>This project is built to understand more of React Js.</p>
          </div>
  
  
          <div>
            <img className="imageContent" src="https://web-static.wrike.com/blog/content/uploads/2018/11/Time_Management_Apps_You_Should_Start_Using_Yesterday_1.jpg?av=205d85987f44f0b5b87a28ae569e8492" alt="time.png" />
          </div>
      </main>
    )
  }
  
  export default Main