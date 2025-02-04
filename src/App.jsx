import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const [formData, setFormData] = useState({
    author: "",
    content: "",
    category: "",
    published: false,
  });

  const handleFormField = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setList((currentList) => [...currentList, formData]);

    setFormData({
      author: "",
      content: "",
      category: "",
    });
  };

  return (
    <div>
      <h1>Lista</h1>
      <ul>
        {list.map((item) => (
          <li key={item.index}>
            {item.author} | {item.content} | {item.category} |{" "}
            {item.published ? "Pubblicato" : "Privato"}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="author">Autore:</label>
        <input
          type="text"
          name="author"
          placeholder="Inserisci l'autore"
          value={formData.author}
          onChange={(event) => handleFormField("author", event.target.value)}
        />
        <br />
        <label htmlFor="content">Contenuto:</label>
        <input
          type="text"
          name="content"
          placeholder="Inserisci il contenuto"
          value={formData.content}
          onChange={(event) => handleFormField("content", event.target.value)}
        />
        <br />
        <label htmlFor="category">Categoria:</label>
        <select
          name="category"
          value={formData.category}
          onChange={(event) => handleFormField("category", event.target.value)}
        >
          <option value="">Seleziona una categoria</option>
          <option value="FrontEnd">FrontEnd</option>
          <option value="BackEnd">BackEnd</option>
          <option value="UI/UX">UI/UX</option>
        </select>
        <br />
        <input
          type="checkbox"
          value={formData.published}
          onChange={(event) =>
            handleFormField("published", event.target.checked)
          }
        />
        <br />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
