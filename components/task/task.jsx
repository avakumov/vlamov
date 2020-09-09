import React from 'react';
import { Progress } from 'antd';


function Task({task}) {
  return (
    <div className="task__container">
        <div className="task__title">{task.title}</div>
        <Progress className="task__progress-bar" percent={task.percent} />
     
    </div>
  );
}
export {
    Task
}