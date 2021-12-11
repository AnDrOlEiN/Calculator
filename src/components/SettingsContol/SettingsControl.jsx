import React from 'react';
import { Space, Select, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { clearExpression } from '@/store/calculateReducer';
import { setTheme } from '@/store/themeReducer';
import { coloredTheme, darkTheme, lightTheme, THEME_MODE } from '@/constants/themes';

const SettingsControl = () => {
  const dispatch = useDispatch();

  const { theme } = useSelector((state) => state.theme);

  const handleChangeTheme = (value) => {
    if (value === THEME_MODE.LIGHT) dispatch(setTheme(lightTheme));
    if (value === THEME_MODE.DARK) dispatch(setTheme(darkTheme));
    if (value === THEME_MODE.COLORED) dispatch(setTheme(coloredTheme));
  };

  const handleClearHistory = () => {
    dispatch(clearExpression([]));
  }

  return (
    <>
      <Space direction="vertical" size="middle">
        <div>
          <p style={{ marginBottom: 0 }}>Switch Theme:</p>
          <Select defaultValue={theme.mode} size="large" 
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