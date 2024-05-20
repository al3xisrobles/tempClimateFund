// src/App.jsx
import EditableTextBox from './components/editableTextBox';

const App = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold mb-4">Evanston Climate Fund</h1>
      <EditableTextBox />
    </div>
  );
};

export default App;
