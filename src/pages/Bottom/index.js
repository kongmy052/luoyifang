import { TabBar } from "antd-mobile";
import Icon from "../Icon";
import { useNavigate } from "react-router-dom";
import {useEffect, useState} from "react";


const Bottom = (props) => {

  const navigate = useNavigate()
  //页面最初实际的高度
  const [clientHeight, setClientHeight] = useState(null)
  //页面变化后的高度
  const [showHeight, setShowHeight] = useState(null)


  const tabs = [
    {
      key: 'home',
      title: '首页',
      icon: <Icon name="shouye" />,
    },
    {
      key: 'shequ',
      title: '社区',
      icon: <Icon name="shequ" />,
    },
    {
      key: 'shop',
      title: '商城',
      icon: <Icon name="shangcheng" />,
    },
    {
      key: 'me',
      title: '我的',
      icon: <Icon name="31wode" />,
    },
  ]

  useEffect(() => {
    //第一次加载底部导航, 获取页面的最初实际高度, 设置clientHeight的值
    setClientHeight(document.documentElement.clientHeight)
    setShowHeight(document.documentElement.clientHeight)

    window.onresize = () => {
      return (() => {
        //页面高度变化后, 设置showHeight的值
        setShowHeight(document.body.clientHeight)
      })()
    }

    return () => {
      window.onresize = () => {
      }
    }
  }, [])

  if (showHeight && clientHeight && showHeight < (clientHeight - 10)) {
    //如果页面变化后的高度 小于 最初的高度, 那么返回一个空页面
    return <div></div>
  }


  return <TabBar onChange={value => navigate(value)}>
    {
      tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))
    }
  </TabBar>

}

export default Bottom