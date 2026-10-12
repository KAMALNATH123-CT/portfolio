import React from "react";
// import "./box.css"
function box(){
    return(
        <div>
            <div className="head">
                <span>
                <h1>Task Manager</h1>
                <p>Manage your daily tasks easily</p>
                </span>
                <span>
                    <button>Light Mode</button>
                </span>
            </div>
            <div>
                <div className="box">
                    <h1>Welcome, Kamalnath! 👋</h1>
                    <p>kamalchinna198@gmail.com • AI & Data Science Student</p>
                </div>
                <div className="box1">
                    <div className="box3">
                        <h2>Total Tasks</h2>
                        <h1>1</h1>
                    </div>
                    <div className="box3">
                        <h2>Completed</h2>
                        <h1>1</h1>
                    </div>
                    <div className="box3">
                        <h2>Pending</h2>
                        <h1>1</h1>
                    </div>
                </div>
                <div className="box">
                    <h1>Add New Task</h1>
                    <div style={{display:'flex',margin:'10px'}}>
                        <input type="text" placeholder="task name:"></input>
                        <select>
                            <option>kamal</option>
                            <option>kamal</option>
                            <option>kamal</option>
                        </select>
                        <button>submit</button>
                    </div>

                </div>
                <div className="box" style={{display:'flex'}}>
                    <h1>C++</h1>
                    <div>
                    <button>complete</button>
                    <button>delete</button></div>
                </div>
            </div>
        </div>
    )
}

export default box;