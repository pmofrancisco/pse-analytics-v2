import React from 'react';
import styled from 'styled-components';

import BaseChartIcon from '../../icons/ChartIcon';
import BaseHomeIcon from '../../icons/HomeIcon';

const iconStyles = `
  height: 32px;
  stroke: var(--white);
  width: 32px;
`;

const ChartIcon = styled(BaseChartIcon)`${iconStyles}`;
const HomeIcon = styled(BaseHomeIcon)`${iconStyles}`;

const icons = {
  chart: <ChartIcon />,
  home: <HomeIcon />,
};

export type SideMenuIconType = keyof typeof icons;

type Props = {
  type: SideMenuIconType;
};

const Icon = ({ type }: Props) => <>{icons[type]}</>;

export default Icon;
