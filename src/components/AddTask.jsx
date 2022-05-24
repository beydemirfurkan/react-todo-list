import { useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);


  const onSubmit = (e) => {
      e.preventDefault()

      if(!text) {
        alert('Please add a task')
        return 
      }

      onAdd({text, day, reminder})

      setText('')
      setDay('')
      setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control border-0 py-3">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add Task"
          className="form-control mt-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control border-0 py-3">
        <label htmlFor="">Day & Time</label>
        <input
          type="text"
          className="form-control mt-2"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check border-0">
        <label htmlFor="">Set Reminder</label>
        <input type="checkbox" className="ms-3 form-control-check"
            checked={reminder} 
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}/>
      </div>

      <input
        type="submit"
        value="Save Task"
        className="btn btn-primary w-100 mt-4"
      />
    </form>
  );
};

export default AddTask;
