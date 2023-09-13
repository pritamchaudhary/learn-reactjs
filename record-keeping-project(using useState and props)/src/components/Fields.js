import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";

const Fields = ({ name, email, index }) => {
  
  return (
    <div className="data_val">
      <h4>{name}</h4>
      <h4>{email}</h4>
      <Stack>
        <Button variant="contained" color="error">
          <DeleteIcon />
        </Button>
      </Stack>
    </div>
  );
};

export default Fields;
