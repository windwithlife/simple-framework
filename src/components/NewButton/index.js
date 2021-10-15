import React from 'react';
import { Button } from 'antd';
import './index.less'

export default function NewButton(props) {
  console.log('newbutton....')
  return (
  // <button >{props.name}</button>
  
  <Button type="primary" {...props}>{props.name}</Button>
  )
}