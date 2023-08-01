import React from 'react'

import { Col,Row,Typography } from 'antd'
const {Title}=Typography;
const LineChart = ({coinHistory,currentPrice,coinName}) => {
  const coinPrice=[]
  const coinTimestamp=[]

  for(let i=0;i<coinHistory?.data?.history?.length;i+=1){
    coinPrice.push(coinHistory.data.history[i].price)
    coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp)).toLowerCase();
  }
  return (
    <>
    <Row className='chart-header'>
      <Title level={2} className="chart-title">{coinName} Price Chart</Title>
      <Col className='price-container'>
          <Title level={5} className='price-change'>{coinHistory?.data?.change}</Title>
          <Title level={5} className='current-price'> current{coinName} Price:${currentPrice}{coinHistory?.data?.change}</Title>

      </Col>
    </Row>

        
    </>
  )
}

export default LineChart