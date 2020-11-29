import React from 'react';

import { Stat, StatTitle, Progress, ProgressPercentage } from './styles';

interface ProgressBarProps {
  title: string;
  percentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ title, percentage }) => {
  return (
    <Stat>
      <StatTitle>{title}</StatTitle>
      <Progress>
        <ProgressPercentage style={{ width: percentage * 1.5 }}>
          {percentage}
          /100
        </ProgressPercentage>
      </Progress>
    </Stat>
  );
};

export default ProgressBar;
