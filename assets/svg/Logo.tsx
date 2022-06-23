import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { computeHeightByRatio, computeWidthByRatio } from '@utils/functions';

const Logo = ({ height = 0, width = 0 }) => {
  const dimensions = { width: 1024, height: 1024 };
  const cHeight = height || computeHeightByRatio(dimensions.width, dimensions.height, width);
  const cWidth = width || computeWidthByRatio(dimensions.width, dimensions.height, height);
  return (
    <Svg
      width={cWidth || dimensions.width}
      height={cHeight || dimensions.height}
      viewBox="0 0 1024 1024"
      fill="none"
    >
      <Path
        d="M201.421 650.547C201.421 686.182 230.298 715.059 265.933 715.059C301.568 715.059 330.445 686.182 330.445 650.547C330.445 614.912 301.568 586.035 265.933 586.035C230.298 586.035 201.421 614.912 201.421 650.547Z"
        fill="#222831"
      />
      <Path
        d="M693.555 650.547C693.555 686.182 722.432 715.059 758.067 715.059C793.702 715.059 822.579 686.182 822.579 650.547C822.579 614.912 793.702 586.035 758.067 586.035C722.432 586.035 693.555 614.912 693.555 650.547Z"
        fill="#222831"
      />
      <Path
        d="M774.861 509.645C774.861 287.437 249.242 363.93 249.242 509.645C249.242 540.672 249.242 684.032 249.242 715.162C249.139 860.877 366.285 977.92 512 977.92C657.715 977.92 774.861 860.877 774.861 715.059C774.861 684.032 774.861 540.672 774.861 509.645Z"
        fill="#222831"
      />
      <Path d="M750.899 559.821H822.579V633.856L750.899 681.677V559.821Z" fill="#222831" />
      <Path d="M273.101 559.821H201.421V633.856L273.101 681.677V559.821Z" fill="#222831" />
      <Path
        d="M273.101 457.011C256.41 473.702 249.242 490.496 249.242 509.542C249.242 540.57 249.242 683.93 249.242 715.059C249.139 860.877 366.285 977.92 512 977.92C512 913.408 569.344 927.744 569.344 894.259C569.344 872.755 452.301 882.278 452.301 860.774C452.301 827.29 516.813 834.458 571.802 834.458C586.138 834.458 590.951 812.954 571.802 812.954C500.122 812.954 540.775 765.133 571.802 729.293C590.951 676.762 717.517 667.136 774.861 717.312C774.861 686.285 774.861 542.925 774.861 511.795C774.861 492.646 770.048 473.6 762.88 459.264H273.101V457.011Z"
        fill="#222831"
      />
      <Path
        d="M10.24 476.16C10.24 568.525 234.906 643.379 512 643.379C789.094 643.379 1013.76 568.525 1013.76 476.16C1013.76 383.795 789.094 308.941 512 308.941C234.906 308.941 10.24 383.795 10.24 476.16Z"
        fill="#222831"
      />
      <Path
        d="M643.379 46.08C593.203 46.08 566.886 72.3968 512 72.3968C457.011 72.3968 435.507 46.08 380.621 46.08C282.624 46.08 237.261 275.456 201.421 421.171C201.421 509.543 397.312 516.711 512 516.711C626.688 516.711 822.579 514.355 822.579 421.171C779.571 265.933 741.376 46.08 643.379 46.08Z"
        fill="#222831"
      />
      <Path
        d="M512 397.312C418.816 397.312 273.101 392.499 220.467 344.781C213.299 371.098 206.131 397.312 201.318 421.274C201.318 509.645 397.209 516.813 511.897 516.813C626.585 516.813 822.476 514.458 822.476 421.274C815.308 397.414 808.14 371.098 800.972 347.238C748.544 394.957 605.184 397.312 512 397.312Z"
        fill="#222831"
      />
    </Svg>
  );
};

export default Logo;
