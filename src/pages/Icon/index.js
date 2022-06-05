import './assets/iconfont'
import './assets/index.scss'

const Icon = (props) => {

  return (<svg className="icon" aria-hidden="true">
    <use xlinkHref={"#icon-" + props.name}></use>
  </svg>)
}

export default Icon