const React = require('react');
const { useState, useRef} = React; // React 글씨, 반복되는 것 없애버릴 수 있음. 


const GuGudan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
     // use로 시작하는 것이 hooks. 함수 좋아하는 사람들이 요청해서 만듬.
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
         e.preventDefault();

         if(parseInt(value) === first * second){
            setResult('정답 ' + value );
            setFirst(Math.ceil(Math.random() * 9))
            setSecond(Math.ceil(Math.random() * 9))
            setValue('')
            inputRef.current.focus();
         } else {
             setResult('때앵앵!!');
             setValue('');
             inputRef.current.focus();
         }
     };

     const onChangeInput = (e) => {
         setValue(e.target.value);
     };


     return (           
      <>
      <div> {first} 곱하기 {second} 는? </div>
     
      <form onSubmit={onSubmitForm}>
      <input ref={inputRef} onChange={onChangeInput} value={value} />
      <button> 입력 </button>
      </form>
      <div id="result"> {result} </div>
       </>          
      );
}

// 다른 곳에서 쓰고 있으니 여기서 쓰겠다고 선언을 해줘야함.
module.exports = GuGudan;

