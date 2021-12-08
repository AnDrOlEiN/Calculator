import React from 'react';
import { Space, Select, Button } from 'antd';

const SettingsControl = () => {
  const handleChangeTheme = (value, option) => {
    console.log(value, option); // кидать в стор
  };

  const handleClearHistory = () => {
    console.log('clear all history'); // обнулять массив с историей
  }

  return (
    <>
      <Space direction="vertical" size="middle">
        <div>
          <p style={{ marginBottom: 0 }}>Switch Theme:</p>
          <Select defaultValue="Light" size="large" 
                  style={{ width: 200 }} onChange={handleChangeTheme}>
            <Select.Option value="light">Light</Select.Option>
            <Select.Option value="colored">Colored</Select.Option>
            <Select.Option value="dark">Dark</Select.Option>
          </Select>
        </div>

        <Button size="large" style={{ width: 200 }} type="default"
                danger onClick={handleClearHistory}>
          Clear All History
        </Button>
      </Space>
    </>
  );
};

export default SettingsControl;