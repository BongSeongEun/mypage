/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

function Items({ endpoint = '' }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      'https://my-json-server.typicode.com/BongSeongEun/mypage/items${endpoint}'
    );
  });
}
export default Items;
