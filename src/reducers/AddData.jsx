import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Button from "../components/Button";
import TextField from "../components/TextField";
import { addUser } from "./userSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleAddUser = () => {
    setValues({ name: "", email: "" });
    dispatch(
      addUser({
        id: uuidv4(),
        name: values.name,
        email: values.email,
      })
    );
    navigate("/custom");
  };

  return (
    <div className="pt-4 mx-auto  content-center max-w-2xl flex justify-center bg-slate-300">
      <div>
        <div className="pt-2 font-serif pl-0 pb-3 text-2xl">
          Enter Details of new User
        </div>
        <TextField
          label="Name:"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          inputProps={{ type: "text", placeholder: "Enter Name" }}
        />
        <br />
        <TextField
          label="Job:"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          inputProps={{ type: "text", placeholder: "Enter Job..." }}
        />
        <Button onClick={handleAddUser}>Submit</Button>
      </div>
    </div>
  );
};

export default AddUser;
