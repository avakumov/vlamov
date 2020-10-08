import { CheckCircleOutlined, MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import Link from 'next/link'
import React from 'react'

class TopNavigation extends React.Component {
    state = {
        current: 'mail'
    }

    handleClick = (e) => {
        console.log('click ', e)
        this.setState({ current: e.key })
    }

    render() {
        const { current } = this.state
        return (
            <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">
                        <img
                            src="/images/profile.jpg"
                            alt="home"
                            className="top-navigation__home"
                        />
                    </Link>
                </Menu.Item>
                <Menu.Item key="contacts" icon={<MailOutlined />}>
                    <Link href="/contacts">
                        <a>Contacts</a>
                    </Link>
                </Menu.Item>

                <Menu.Item key="tasks" icon={<CheckCircleOutlined />}>
                    <Link href="/tasks">
                        <a>Tasks</a>
                    </Link>
                </Menu.Item>
            </Menu>
        )
    }
}

export default TopNavigation
