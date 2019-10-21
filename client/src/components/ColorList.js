import React, { useState, } from "react";
import {axioswithAuth} from './axioswithAuth';

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?

    let activeColor = colors.filter(color => color.id === colorToEdit.id)

    axioswithAuth()
      .put(`http://localhost:5000/api/colors/${activeColor[0].id}`, colorToEdit)
      .then(res => {

        console.log(res)

        colors = colors.filter(color => color.id !== res.data.id)
        updateColors([...colors, res.data])


        setEditing(false)
      })
      .catch(err => console.log(err))
    //console.log(colorList)

  };


  const deleteColor = color => {
    axioswithAuth()
    .delete(`http://localhost:5000/api/colors/${color.id}`)
    .then(() =>
    updateColors([...colors])
    )
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li>
          <button className="delete" onClick={() => deleteColor(color)}>
                x
              </button>{" "}
            <span key={color.color} onClick={() => editColor(color)}>
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
