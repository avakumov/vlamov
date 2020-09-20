import React, { useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import { Button, Modal, Form, Input, InputNumber, Slider } from "antd";
import { ItemTypes } from "../../lib/items-draggable";
//dragging task
const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.TASK,
      id: task.id,
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div ref={drag} className="list-tasks__task">
      {task.title}
    </div>
  );
};

//container drops tasks list
const ListTasks = ({ tasks }) => {
  const [modal, setModal] = useState(false);
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item, monitor) => {
      //moveTask(item.id, -1);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleClose = () => {
    setModal(false);
  };
  const addTask = (values) => {
      console.log(values)
  }

  return (
    <div
      ref={drop}
      className={
        isOver
          ? "list-tasks__container list-tasks__container--drop"
          : "list-tasks__container"
      }
    >
      <NewTaskModal visible={modal} handleClose={handleClose} addTask={addTask}/>
      <Button type="primary" onClick={() => setModal(true)}>
        +
      </Button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

const NewTaskModal = ({ visible, handleClose, addTask }) => {


  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  return (
    <Modal
      title="New task"
      visible={visible}
      //   onOk={this.handleOk}
      onCancel={handleClose}
      footer={[]}
    >
      <Form
        {...layout}
        name="nest-messages"
        onFinish={addTask}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[{ type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[{ type: "number", min: 10, max: 99 }]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "website"]} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="slider" label="Slider">
        <Slider
          marks={{
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
          }}
        />
      </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Add Task
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export { ListTasks };
