import { Button, Form, Input, Modal, Radio, Slider } from 'antd'

export const NewTaskModal = ({ visible, handleClose, addTask }) => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    }
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!'
        },
        number: {
            range: '${label} must be between ${min} and ${max}'
        }
    }
    return (
        <Modal
            title="New task"
            visible={visible}
            //   onOk={this.handleOk}
            onCancel={handleClose}
            footer={[]}>
            <Form
                {...layout}
                name="add-task"
                onFinish={addTask}
                validateMessages={validateMessages}>
                <Form.Item name={['task', 'title']} label="Title" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name={['task', 'durationMins']}
                    label="Duration in mins"
                    rules={[{ required: true }]}>
                    <Slider
                        min={1}
                        max={600}
                        marks={{
                            0: '0',
                            120: '2:00',
                            240: '4:00',
                            360: '6:00',
                            480: '8:00',
                            600: '10:00'
                        }}
                    />
                </Form.Item>
                <Form.Item name={['task', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    name={['task', 'difficulty']}
                    label="Difficulty"
                    rules={[{ required: true }]}>
                    <Radio.Group>
                        <Radio.Button value="1">1</Radio.Button>
                        <Radio.Button value="2">2</Radio.Button>
                        <Radio.Button value="3">3</Radio.Button>
                        <Radio.Button value="4">4</Radio.Button>
                        <Radio.Button value="5">5</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                    name={['task', 'importance']}
                    label="Importance"
                    rules={[{ required: true }]}>
                    <Radio.Group>
                        <Radio.Button value="1">1</Radio.Button>
                        <Radio.Button value="2">2</Radio.Button>
                        <Radio.Button value="3">3</Radio.Button>
                        <Radio.Button value="4">4</Radio.Button>
                        <Radio.Button value="5">5</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name={['task', 'color']} label="Color">
                    <Input type="color" value="#aaaaaa" />
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Add Task
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}
