import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { PureComponent } from 'react';
import './search.scss';
export default class SearchBarExample extends PureComponent {
  state = {
    value: '',
    hotClassName:false
  };
  onChange = (value) => {
    this.setState({ value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  onSearch = (value) => {
    console.log(this.state.value);
  }
  //   handleClick = () => {
  //     this.manualFocusInst.focus();
  //   }
  render() {
    let styleOfSearch = {
      backgroundColor: '#000'
    }
    return (<div>
      <SearchBar
        className='search'
        value={this.state.value}
        placeholder="目的地 / 路线推荐"
        // onSubmit={value => console.log(value, 'onSubmit')}
        // onClear={value => console.log(value, 'onClear')}
        onFocus={() => this.setState({
          hotClassName : true
        })}
        onBlur={() => this.setState({
          hotClassName : false
        })}
        onCancel={this.onSearch}
        showCancelButton
        onChange={this.onChange}
        cancelText = '搜索'
      />
      {
        this.state.hotClassName ? <HotSearch/> : null
      }
    </div>);
  }
}
class HotSearch extends PureComponent{
  render(){
    return(
      <>
        <dl className='hotSearch'>
          <dt>热门搜索</dt>
          <hr/>
          <dd>龙门石窟</dd>
          <dd>龙门石窟</dd>
          <dd>龙门石窟</dd>
          <dd>龙门石窟</dd>
        </dl>
      </>
    )
  }
}
// ReactDOM.render(<SearchBarExample />, mountNode);
// .am-search {
//   border-bottom: 1px solid #ddd;
// }
// .sub-title {
//   color: #888;
//   font-size: 14px;
//   padding: 30px 0 18px 0;
// }