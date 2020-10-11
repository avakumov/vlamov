import { CheckCircleOutlined, MailOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { signin, signout, useSession } from 'next-auth/client'
import Link from 'next/link'
import React, { useState } from 'react'

const TopNavigation = () => {
    const [current, setCurrent] = useState('mail')
    const [session, loading] = useSession()

    const handleClick = (e) => {
        setCurrent(e.key)
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home">
                <Link href="/">
                    <img src="/images/profile.jpg" alt="home" className="top-navigation__home" />
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
            {!session && (
                <>
                    <span>Not signed in</span>
                    <a
                        href={`/api/auth/signin`}
                        onClick={(e) => {
                            e.preventDefault()
                            signin()
                        }}>
                        <button>Sign in</button>
                    </a>
                </>
            )}
            {session && (
                <>
                    <span style={{ backgroundImage: `url(${session.user.image})` }} />
                    <span>
                        <strong>{session.user.email}</strong>
                    </span>
                    <a
                        href={`/api/auth/signout`}
                        onClick={(e) => {
                            e.preventDefault()
                            signout()
                        }}>
                        <button>Sign out</button>
                    </a>
                </>
            )}
        </Menu>
    )
}

export default TopNavigation
