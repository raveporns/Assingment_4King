import React, { useState } from 'react';
import './App.css';


function App() {
  const [quantity, setQuantity] = useState(0)
  const [data, setData] = useState([])
  const [check, setCheck] = useState(false)

  const getQuantity = (e) => {
    
    e.preventDefault();
    const inputQuantity = document.getElementById('inputField').value;
    if (!inputQuantity || inputQuantity == 0 ||inputQuantity<0 ) {
      alert('กรุณากรอกจำนวนผู้เข้าร่วมคัดสรรให้ถูกต้อง');
      setCheck(false);
    }else if(isNaN(inputQuantity)){
      alert('กรุณากรอกจำนวนผู้เข้าร่วมคัดสรรให้ถูกต้อง');
    }
    else{
    setQuantity(inputQuantity);
    }
  };


  const addData = (e) => {
    e.preventDefault();
    const updatedData = Array.from({ length: quantity }, (_, index) => {
      const name = document.getElementById(`name-surname-${index}`).value;
      if (name === "") {
        alert('กรุณากรอกชื่อให้ครบถ้วน');
        setCheck(false);
        //return null; // Exit early if any name is not filled
      }

      return { name };

    })//.filter(Boolean); // Remove any null values from the array

    
    setCheck(true);
    setData(updatedData);
  }
  

  const resetData = () => {
    setData([]);
    setQuantity(0);
    document.getElementById('inputField').value = ''; // ให้ค่าในช่องนำเป็นค่าว่าง
    document.getElementById('inputField').placeholder = 'กรอกจำนวนผู้เข้าร่วมคัดสรร';
  };

  const generateTableRows = (groupName, groupData) => {
    return groupData.map((item, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{item.name}</td>
      </tr>
    ));
  };

  const handleBackpage = () => {
    setData([]);
    setQuantity(0);
    setCheck(false);
  };

  return (

    <>

      {!check ? (
        <>

          <div>
            <div className='background-image'>
              <img src="4King.png" alt="" />
          
              <h1 className='text'>หมวกคัดสรร</h1>
              <div className="Quantity">
                <form action="">
                  <div className="mb-3">
                    <input type="int" className='form-control' placeholder='Enter Quantity' id='inputField' />
                  </div>
                  <button type='button' className='btn-success2' onClick={getQuantity}>ยืนยัน</button>
                </form>
              </div>
              <hr className='line'/>
              <div className='Quantity'>
                <h5 className='text'>จำนวนผู้เข้ารับการคัดสรร {quantity} คน</h5>
              </div>
                {Array(Number(quantity)).fill().map((_, index) => (
                  <div key={index} className="Name-Surname">
                    <form action="">
                      <div className="mb-3">
                        <label htmlFor={`name-surname-${index}`} className='form-label'>คนที่ {index + 1}</label>
                        <input
                          type="text"
                          className='form-control'
                          placeholder={`กรอกชื่อ-นามสกุล `}
                          id={`name-surname-${index}`}
                        />
                      </div>
                    </form>
                  </div>
                ))}
                <div className="button-container">
                  <button type='reset' className='btn-danger' onClick={resetData} style={{ marginRight: '10px' }}>
                    Reset
                  </button>
                  <button type='submit' className='btn-success' onClick={addData}>
                    รายชื่อที่ได้รับการจัดสรรแล้ว
                  </button>
                </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <hr />

          <div>
            <h4 className='text'>ประชาชื่น</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ลำดับที่</th>
                  <th scope="col">ชื่อ-นามสกุล</th>
                </tr>
              </thead>
              <tbody>
                {generateTableRows("ประชาชื่น", data.filter((_data, index) => index % 4 === 1))}
              </tbody>
            </table>
          </div>
          <hr />
          <div>
            <h4 className='text'>อินทร</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ลำดับที่</th>
                  <th scope="col">ชื่อ-นามสกุล</th>
                </tr>
              </thead>
              <tbody>
                {generateTableRows("อินทร", data.filter((_data, index) => index % 4 === 3))}
              </tbody>
            </table>
          </div>
          <hr />
          <div>
            <h4 className='text'>กนกอาชีวะ</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ลำดับที่</th>
                  <th scope="col">ชื่อ-นามสกุล</th>
                </tr>
              </thead>
              <tbody>
                {generateTableRows("กนกอาชีวะ", data.filter((_data, index) => index % 4 === 0))}
              </tbody>
            </table>
          </div>
          <hr />
          <div>
            <h4 className='text'>บูรณพล</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">ลำดับที่</th>
                  <th scope="col">ชื่อ-นามสกุล</th>
                </tr>
              </thead>
              <tbody>
                {generateTableRows("บูรณพล", data.filter((_data, index) => index % 4 === 2))}
              </tbody>
            </table>
          </div>
          <br />
          <button onClick={handleBackpage}>Back to random</button>
        </>
      )}


    </>

  )

}

export default App
