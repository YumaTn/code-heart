import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Meme from '../src/assets/meme.jpg';
import logo from '../src/assets/logo.jpg'
export default function Home() {
  const [showDialog, setShowDialog] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showHeading, setShowHeading] = useState(true);
  const [buttonPosition, setButtonPosition] = useState({ x: 550, y: 355 });
  const [showExternalDialog, setShowExternalDialog] = useState(false);
  const [showOpenButton, setShowOpenButton] = useState(true);
  const [showSecondDialog, setShowSecondDialog] = useState(false); 

  const handleMouseEnter = () => {
    const newX = Math.floor(Math.random() * window.innerWidth * 0.9);
    const newY = Math.floor(Math.random() * window.innerHeight * 0.9);
    setButtonPosition({ x: newX, y: newY });
  };

  const toggleDialog = () => {
    setShowDialog(!showDialog);
    setShowHeading(!showHeading);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') 
    { 
      console.log('Submitted value:', inputValue);
      setInputValue('');
      setShowSecondDialog(true); 
      setShowDialog(false); 
    } 
  };

  const buttonStyle = {
    position: 'absolute',
    padding: '10px 20px',
    backgroundColor: '#00EE00',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    zIndex: 3,
  };

  const toggleExternalDialog = () => {
    setShowExternalDialog(!showExternalDialog);
    setShowOpenButton(false);
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0, overflow: 'hidden' }}>
  <img
    src={logo}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      maxWidth: '100%',
      maxHeight: '100%',
    }}
    alt=''
  />
</div>
      {showExternalDialog && (
        <>
          {showHeading && (
            <>
              <h1
                style={{
                  position: 'absolute',
                  top: '15%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 2,
                  color: 'white',
                }}
              >
                Cậu yêu tớ nhiều honggggg =))))))))
              </h1>
              <button
                onMouseEnter={handleMouseEnter}
                style={{
                  ...buttonStyle,
                  top: buttonPosition.y + 'px',
                  left: buttonPosition.x + 'px',
                }}
              >
                Đéoooo
              </button>
              {!showDialog && (
                <button
                  onClick={toggleDialog}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px 20px',
                    backgroundColor: '#000011',
                    color: 'white',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    zIndex: 2,
                  }}
                >
                  Nhiều vailoz
                </button>
              )}
            </>
          )}
          {showDialog && (
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  backgroundColor: '#111111',
                  borderRadius: '5px',
                  color: 'white',
                  textAlign: 'center',
                  padding: '20px 200px 20px 200px',
                }}
              >
                <h2>Em thấy bồ em giỏi vs dzai hongggg :{'>'} </h2>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '10px',
                      marginBottom: '10px',
                      border: '1px solid black',
                      borderRadius: '4px',
                    }}
                    placeholder="Nhập vào đây..."
                  />
                  <button
                    type="submit"
                    style={{
                      display: 'block',
                      margin: '0 auto',
                      border: '1px solid black',
                      borderRadius: '4px',
                      padding: '10px 20px',
                      cursor: 'pointer',
                      backgroundColor: 'black',
                      color: 'white',
                    }}
                    disabled={inputValue.trim() === ''} // Vô hiệu hóa nút nếu trường nhập liệu trống
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
      {showOpenButton && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#ffffff',
              padding: '20px 40px 20px 40px',
              borderRadius: '5px',
              color: 'black',
              textAlign: 'center',
            }}
          >
            <img 
              style={{
                width:'200px'
              }}
              src={Meme} alt=''
            />
            <h2>Hello bạn nhỏ =)))</h2>
            <h2>Trước khi cho bạn xem cái mình làm</h2>
            <h2> Mình có 1 số câu hỏi muốn hỏi bạn</h2>
            <button
              onClick={toggleExternalDialog}
              style={{
                marginTop:'20px',
                padding: '10px',
                backgroundColor: '#000011',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Mở
            </button>
          </div>
        </div>
      )}
      {showSecondDialog && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: '#111111',
              borderRadius: '5px',
              color: 'white',
              textAlign: 'center',
              padding: '20px 40px 20px 40px',
            }}
          >
            <h4>Anh biết anh giỏi mà</h4>
            <h4>Hong cần khen đâuuuu =)))) </h4>
            <h2>Coi anh làm đừng chê nheee</h2>
            <Link to='/Heart'>
              <button
                type="submit"
                style={{
                  display: 'block',
                  margin: '0 auto',
                  border: '1px solid black',
                  borderRadius: '4px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  backgroundColor: 'black',
                  color: 'white',
                }}
              >
                Ok
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
