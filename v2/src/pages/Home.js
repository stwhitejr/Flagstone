import React from 'react';
import TextBlock from '../components/TextBlock';
import './css/Home.css';

const HomePage = props =>  (
  <div className="full-height row align-center">
    <div className="width-base">
      <TextBlock
        title="dedicated service"
        copy="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi doloribus totam harum magnam aperiam doloremque eum voluptatem, quo blanditiis, ducimus quis perspiciatis temporibus ut illum eius expedita saepe a laboriosam."
        ctaCopy="landscape services"
        ctaUrl="services"
        hasBackground
        centered
        onDark
      />
    </div>
  </div>
);

export default HomePage;
