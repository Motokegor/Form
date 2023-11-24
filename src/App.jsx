import { useState } from "react";
import "./App.scss";
import Form from "./Components/Form/Form";
import Card from "./Components/Card/Card";

function App() {
  const [arr, setArr] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function delCard(id) {
    const copyArr = [...arr];
    const resultArr = copyArr.filter((item) => item.id != id);
    setArr(resultArr);
  }

  const addPost = (name, phone, text, email, deliv) => {
    setArr([...arr, { id: Date.now(), name, phone, text, email, deliv }]);
  };
  const handleButtonClick = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  return (
    <div>
      {!isOpenModal && <button onClick={handleButtonClick}> Open modal</button>}

      {isOpenModal && (
        <div className="modal">
          <div className="content-modal" onClick={(e) => e.stopPropagation()}>
            <button className="buy close" onClick={() => handleCloseModal(false)}>
              Close modal
            </button>
            <Form addPost={addPost} />
          </div>
        </div>
      )}
      <>
        {arr.map((item, index) => (
          <Card object={item} delCard={delCard} key={index} />
        ))}
      </>
    </div>
  );
}

export default App;
