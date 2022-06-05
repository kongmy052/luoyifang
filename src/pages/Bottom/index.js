import {TabBar} from "antd-mobile";
import Icon from "../Icon";
import {useNavigate} from "react-router-dom";


const Bottom = (props) => {

  const navigate = useNavigate()

  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <Icon name="shouye"/>,
    },
    {
      key: 'shequ',
      title: '社区',
      icon: <Icon name="shequ"/>,
    },
    {
      key: 'shop',
      title: '商城',
      icon: <Icon name="shangcheng"/>,
    },
    {
      key: 'me',
      title: '我的',
      icon: <Icon name="31wode"/>,
    },
  ]

  return <TabBar onChange={value => navigate(value)}>
        {
          tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
          ))
        }
  </TabBar>

}

export default Bottom