
import React from 'react';

import 'antd/dist/antd.css';

import { List, Avatar, Icon } from 'antd';



  const Pagination = () => {
    const listData = [];
    for (let i = 0; i < 8; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }
    
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
       
      </span>
    );
      return(
           <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={listData}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
         
          <IconText type="message" text="2" key="list-vertical-message" />,
        ]}
     
      >
       
        {item.content}
      </List.Item>
    )}
  />
      )
  }

  export default  Pagination