import React from 'react';
import { Button } from 'antd';
import './index.less'

export default function NewButton(props) {
  return (
  // <button >{props.name}</button>
  <Button type="primary">{props.name}</Button>
  )
}