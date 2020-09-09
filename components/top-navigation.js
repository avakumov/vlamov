import { Menu } from 'antd';
import { CheckCircleOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class TopNavigation extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="contacts" icon={<MailOutlined />}>
          Contacts
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Disabled
        </Menu.Item>
    <SubMenu icon={<CheckCircleOutlined />} title="Tasks">
          <Menu.ItemGroup>
            <Menu.Item key="setting:1">Tasks by days</Menu.Item>
            <Menu.Item key="setting:2">All tasks</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export  default TopNavigation