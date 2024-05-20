// src/components/EditableTextBox.jsx
import { useState } from 'react';
import Showdown from 'showdown';

const EditableTextBox = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState('Edit this text...');
  const [markdown, setMarkdown] = useState(text);

  const converter = new Showdown.Converter();

  const handleSave = () => {
    setText(markdown);
    setIsEditing(false);
  };

  return (
    <div className="p-4 border border-gray-300 rounded">
      {isEditing ? (
        <div>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <div className="mt-2">
            <button onClick={handleSave} className="px-4 py-2 mr-2 text-white bg-blue-500 rounded">Save</button>
            <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-gray-700 bg-gray-300 rounded">Cancel</button>
          </div>
        </div>
      ) : (
        <div
          onClick={() => setIsEditing(true)}
          dangerouslySetInnerHTML={{ __html: converter.makeHtml(text) }}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default EditableTextBox;
