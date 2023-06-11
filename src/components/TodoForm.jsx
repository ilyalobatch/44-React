import { useState } from "react";

import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Create from "@mui/icons-material/Create";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <ListItem
      sx={{ display: "flex", justifyContent: "center", marginTop: "15px" }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          onChange={handleChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  edge="end"
                  type="submit"
                >
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
};

export default TodoForm;
