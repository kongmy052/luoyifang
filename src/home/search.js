import { SearchBar } from 'antd-mobile';
import React, { PureComponent } from 'react';
import './search.scss';
import Module from "./module";
import Introduce from './introduction';

export default class SearchBarExample extends PureComponent {
  state = {
    value: '',
    hotClassName: false
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
  render() {
    let styleOfSearch = {
      backgroundColor: '#000'
    }
    return (<div className='searchFather'>
      <SearchBar
        className='search'
        value={this.state.value}
        placeholder="目的地 / 路线推荐"
        // onSubmit={value => console.log(value, 'onSubmit')}
        // onClear={value => console.log(value, 'onClear')}
        onFocus={() => this.setState({
          hotClassName: true
        })}
        onBlur={() => this.setState({
          hotClassName: false
        })}
        onCancel={this.onSearch}
        showCancelButton
        onChange={this.onChange}
        cancelText='搜索'
      />
      {
        this.state.hotClassName ? <HotSearch /> : null
      }
      <Module />
      <Introduce />
    </div>);
  }
}
class HotSearch extends PureComponent {
  render() {
    return (
      <>
        <dl className='hotSearch'>
          <dt>热门搜索</dt>
          <hr />
          <dd>龙门石窟<span>↖</span></dd>
          <dd>应天门<span>↖</span></dd>
          <dd>王城公园<span>↖</span></dd>
          <dd>白马寺<span>↖</span></dd>
        </dl>
      </>
    )
  }
}