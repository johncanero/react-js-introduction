const Math = () => {

    const pi = 3.1415962

    // Functions
    function add(n1, n2) {
        return n1 + n2;
    }

    function multiply(n1, n2) {
        return n1 * n2;
    }

    function subtract(n1, n2) {
        return n1 - n2;
    }


    function divide(n1, n2) {
        return n1 / n2;
    }
    

  return (
    <div className="mathPadding">
        <ul>
            <h3 className="colorText">The Pi World</h3>
            <li>Value of pi: {pi}</li>
            <li>Value of doublePi: {pi * 2}</li>
            <li>Value of triplePi: {pi * 3}</li>

            <br></br>

            {/* Functions */}
            <h3 className="colorText">The Functions World</h3>
            <li>{add(1, 2)}</li>
            <li>{multiply(3, 2)}</li>
            <li>{subtract(7, 5)}</li>
            <li>{divide(5, 2)}</li>
        </ul>
    </div>
  )
}

export default Math