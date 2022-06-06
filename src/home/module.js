import { PureComponent } from "react";
import './module.scss';
import Icon from '../pages/Icon/index';
export default class Module extends PureComponent {
  render() {
    return (
      <div className="module">
        <div className="module1">
          <div className="modules"><Icon name='huiyuan'/><span>会员</span></div>
          <div className="modules"><Icon name='jingdian'/><span>景点AR</span></div>
          <div className="modules"><Icon name='zhifu'/><span>支付</span></div>
          <div className="modules"><Icon name='feiji'/><span>出行</span></div>
        </div>
        <div className="centerIcon"><Icon name='luxian'/><span>定制路线</span></div>
        <div className="module2">
          <div className="modules"><Icon name='fankui'/><span>反馈</span></div>
          <div className="modules"><Icon name='shipin'/><span>小视频</span></div>
          <div className="modules"><Icon name='chuantongwenshi'/><span>文创</span></div>
          <div className="modules"><Icon name='liwuhuodong'/><span>活动</span></div>
        </div>
      </div>
    )
  }
}