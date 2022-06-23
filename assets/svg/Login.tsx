import React from 'react';

import Svg, { G, Path } from 'react-native-svg';

import { computeHeightByRatio, computeWidthByRatio } from '@utils/functions';

const Login = ({ height = 0, width = 0 }) => {
  const dimensions = { width: 500, height: 393 };
  const cHeight = height || computeHeightByRatio(dimensions.width, dimensions.height, width);
  const cWidth = width || computeWidthByRatio(dimensions.width, dimensions.height, height);
  return (
    <Svg
      width={cWidth || dimensions.width}
      height={cHeight || dimensions.height}
      viewBox="0 0 500 393"
      fill="none"
    >
      <G clip-path="url(#clip0_715_374)">
        <Path
          d="M455.131 358.368C445.546 368.63 434.563 377.49 422.506 384.688C422.23 384.858 421.948 385.018 421.666 385.183L402.147 367.907C402.352 367.717 402.579 367.503 402.824 367.268C417.368 353.458 489.569 256.901 494.38 233.388C494.048 235.347 498.721 312.167 455.131 358.368Z"
          fill="#F0F0F0"
        />
        <Path
          d="M426.272 388.022C425.903 388.11 425.528 388.192 425.151 388.267L410.507 375.307C410.794 375.207 411.128 375.088 411.511 374.957C417.794 372.732 436.507 366.016 455.129 358.366C475.14 350.143 495.054 340.852 499.337 334.901C498.418 336.284 470.118 378.217 426.272 388.022Z"
          fill="#F0F0F0"
        />
        <Path
          d="M454.86 102.811H452.775V45.6826C452.775 41.3405 451.919 37.041 450.258 33.0294C448.596 29.0179 446.161 25.3729 443.09 22.3026C440.02 19.2323 436.375 16.7968 432.364 15.1352C428.352 13.4735 424.053 12.6183 419.71 12.6183H298.676C294.334 12.6183 290.035 13.4735 286.023 15.1351C282.012 16.7968 278.367 19.2322 275.296 22.3025C272.226 25.3728 269.791 29.0178 268.129 33.0293C266.467 37.0409 265.612 41.3404 265.612 45.6825V359.093C265.612 363.435 266.467 367.734 268.129 371.746C269.791 375.757 272.226 379.402 275.296 382.473C278.367 385.543 282.012 387.978 286.023 389.64C290.035 391.302 294.334 392.157 298.676 392.157H419.71C424.052 392.157 428.352 391.302 432.363 389.64C436.375 387.978 440.02 385.543 443.09 382.473C446.161 379.402 448.596 375.757 450.258 371.746C451.919 367.734 452.775 363.435 452.775 359.093V143.476H454.86V102.811Z"
          fill="#3F3D56"
        />
        <Path
          d="M445.736 45.9096V358.864C445.736 362.106 445.098 365.317 443.856 368.313C442.615 371.309 440.796 374.031 438.503 376.323C436.209 378.616 433.487 380.434 430.491 381.674C427.494 382.914 424.283 383.552 421.041 383.551H299.424C296.182 383.551 292.972 382.912 289.976 381.672C286.981 380.431 284.259 378.613 281.967 376.32C279.675 374.028 277.856 371.306 276.616 368.311C275.375 365.316 274.737 362.106 274.737 358.864V45.9096C274.737 42.6676 275.375 39.4573 276.616 36.462C277.856 33.4668 279.675 30.7452 281.967 28.4527C284.259 26.1603 286.981 24.3419 289.976 23.1013C292.972 21.8608 296.182 21.2224 299.424 21.2227H314.183C313.458 23.004 313.183 24.9361 313.38 26.8489C313.577 28.7618 314.242 30.5968 315.315 32.1927C316.388 33.7885 317.837 35.0963 319.533 36.0009C321.23 36.9055 323.124 37.3793 325.047 37.3806H394.384C396.308 37.3824 398.203 36.9106 399.902 36.0069C401.6 35.1031 403.051 33.7951 404.124 32.1984C405.198 30.6016 405.862 28.7651 406.058 26.851C406.254 24.9369 405.976 23.0039 405.248 21.2227H421.041C424.283 21.2215 427.494 21.8592 430.491 23.0993C433.487 24.3394 436.209 26.1576 438.503 28.4501C440.796 30.7427 442.615 33.4645 443.856 36.4603C445.098 39.456 445.736 42.6669 445.736 45.9096Z"
          fill="white"
        />
        <Path
          d="M407.906 208.537H301.008C299.136 208.535 297.341 207.791 296.017 206.467C294.693 205.143 293.948 203.348 293.946 201.475V197.96C293.948 196.088 294.693 194.293 296.017 192.969C297.341 191.645 299.136 190.9 301.008 190.898H407.906C409.778 190.9 411.573 191.645 412.897 192.969C414.221 194.293 414.966 196.088 414.968 197.96V201.475C414.966 203.348 414.221 205.143 412.897 206.467C411.573 207.791 409.778 208.535 407.906 208.537Z"
          fill="#F0F0F0"
        />
        <Path
          d="M407.906 238.839H301.008C299.136 238.837 297.341 238.092 296.017 236.768C294.693 235.444 293.948 233.649 293.946 231.777V228.262C293.948 226.389 294.693 224.594 296.017 223.27C297.341 221.946 299.136 221.202 301.008 221.2H407.906C409.778 221.202 411.573 221.946 412.897 223.27C414.221 224.594 414.966 226.389 414.968 228.262V231.777C414.966 233.649 414.221 235.444 412.897 236.768C411.573 238.092 409.778 238.837 407.906 238.839Z"
          fill="#F0F0F0"
        />
        <Path
          d="M413.253 201.76H306.356C304.39 201.758 302.505 200.976 301.115 199.586C299.725 198.196 298.943 196.311 298.94 194.345V190.83C298.943 188.864 299.725 186.979 301.115 185.589C302.505 184.199 304.39 183.417 306.356 183.415H413.253C415.219 183.417 417.104 184.199 418.494 185.589C419.884 186.979 420.666 188.864 420.668 190.83V194.345C420.666 196.311 419.884 198.196 418.494 199.586C417.104 200.976 415.219 201.758 413.253 201.76ZM306.356 184.827C304.764 184.829 303.238 185.462 302.113 186.587C300.988 187.713 300.355 189.238 300.353 190.83V194.345C300.355 195.937 300.988 197.462 302.113 198.588C303.238 199.713 304.764 200.346 306.356 200.348H413.253C414.845 200.346 416.37 199.713 417.496 198.588C418.621 197.462 419.254 195.937 419.256 194.345V190.83C419.254 189.238 418.621 187.713 417.496 186.587C416.37 185.462 414.845 184.829 413.253 184.827H306.356Z"
          fill="#3F3D56"
        />
        <Path
          d="M413.253 232.062H306.356C304.39 232.06 302.505 231.278 301.115 229.888C299.725 228.498 298.943 226.613 298.94 224.647V221.132C298.943 219.166 299.725 217.281 301.115 215.891C302.505 214.501 304.39 213.719 306.356 213.716H413.253C415.219 213.719 417.104 214.501 418.494 215.891C419.884 217.281 420.666 219.166 420.668 221.132V224.647C420.666 226.613 419.884 228.498 418.494 229.888C417.104 231.278 415.219 232.06 413.253 232.062ZM306.356 215.129C304.764 215.131 303.238 215.764 302.113 216.889C300.988 218.014 300.355 219.54 300.353 221.132V224.647C300.355 226.238 300.988 227.764 302.113 228.889C303.238 230.015 304.764 230.648 306.356 230.65H413.253C414.845 230.648 416.37 230.015 417.496 228.889C418.621 227.764 419.254 226.238 419.256 224.647V221.132C419.254 219.54 418.621 218.014 417.496 216.889C416.37 215.764 414.845 215.131 413.253 215.129H306.356Z"
          fill="#3F3D56"
        />
        <Path
          d="M445.736 45.9096V113.981C434.92 116.827 423.595 117.154 412.633 114.936C401.67 112.718 391.363 108.015 382.503 101.189C373.644 94.3624 366.468 85.5947 361.529 75.5601C356.589 65.5256 354.018 54.4917 354.011 43.3073C354.011 41.3109 354.092 39.3354 354.252 37.3806H394.384C396.308 37.3824 398.203 36.9106 399.902 36.0069C401.6 35.1031 403.051 33.7951 404.124 32.1984C405.198 30.6016 405.862 28.7651 406.058 26.851C406.254 24.9369 405.976 23.0039 405.248 21.2227H421.041C424.283 21.2215 427.494 21.8592 430.491 23.0993C433.487 24.3394 436.209 26.1576 438.503 28.4501C440.796 30.7427 442.615 33.4645 443.856 36.4603C445.098 39.456 445.736 42.6669 445.736 45.9096Z"
          fill="#F0F0F0"
        />
        <Path
          d="M336.187 379.299C336.187 380.734 336.133 382.151 336.018 383.551H299.424C296.182 383.551 292.972 382.912 289.976 381.672C286.981 380.431 284.259 378.613 281.967 376.32C279.675 374.028 277.856 371.306 276.616 368.311C275.375 365.316 274.737 362.106 274.737 358.864V325.389C282.407 324.392 290.202 325.04 297.603 327.292C305.003 329.544 311.838 333.347 317.653 338.449C323.467 343.55 328.128 349.832 331.324 356.876C334.52 363.92 336.178 371.564 336.187 379.299H336.187Z"
          fill="#222831"
        />
        <Path
          d="M41.0461 320.564C42.0744 321.016 43.24 321.042 44.2873 320.636C45.3347 320.23 46.1782 319.425 46.633 318.398L79.5986 243.685C80.3531 241.975 80.5836 240.08 80.2611 238.239C79.9385 236.398 79.0772 234.695 77.7863 233.343C76.4953 231.992 74.8327 231.054 73.0085 230.648C71.1844 230.241 69.2807 230.385 67.5383 231.061H67.5382C65.5251 231.829 63.8406 233.272 62.7711 235.143C62.601 235.439 62.4468 235.744 62.309 236.056L29.3434 310.769C29.1187 311.278 28.9965 311.827 28.9838 312.383C28.971 312.939 29.068 313.493 29.2692 314.012C29.4703 314.53 29.7717 315.004 30.1562 315.407C30.5406 315.809 31.0005 316.132 31.5096 316.356L41.0461 320.564Z"
          fill="#222831"
        />
        <Path
          d="M78.2452 274.358L45.6381 267.112L53.7087 245.761C55.0836 240.543 58.2832 235.99 62.7272 232.929C67.1713 229.867 72.5654 228.5 77.9311 229.075L78.2453 229.11L78.2452 274.358Z"
          fill="#2F2E41"
        />
        <Path
          d="M144.107 321.633C143.148 321.631 142.209 321.352 141.406 320.828C140.602 320.305 139.968 319.56 139.578 318.683L106.613 243.97C105.565 241.593 105.467 238.904 106.341 236.457C107.214 234.01 108.992 231.991 111.309 230.815C113.626 229.64 116.305 229.396 118.796 230.136C121.286 230.875 123.399 232.541 124.699 234.791V234.791C124.881 235.108 125.047 235.436 125.195 235.771L158.16 310.484C158.69 311.684 158.721 313.044 158.247 314.267C157.773 315.489 156.833 316.473 155.633 317.003L145.773 321.353L145.768 321.342C145.235 321.534 144.673 321.632 144.107 321.633Z"
          fill="#222831"
        />
        <Path
          d="M98.5067 295.977C97.3833 295.978 96.3062 296.425 95.5119 297.219C94.7175 298.013 94.2707 299.09 94.2694 300.214V387.088C94.2707 388.212 94.7175 389.289 95.5119 390.083C96.3062 390.877 97.3833 391.324 98.5067 391.326H108.93C110.053 391.324 111.131 390.877 111.925 390.083C112.719 389.289 113.166 388.212 113.167 387.088V300.214C113.166 299.09 112.719 298.013 111.925 297.219C111.131 296.425 110.054 295.978 108.93 295.977H98.5067Z"
          fill="#222831"
        />
        <Path
          d="M77.8906 295.977C76.7672 295.978 75.6901 296.425 74.8958 297.219C74.1014 298.013 73.6546 299.09 73.6533 300.214V387.088C73.6546 388.212 74.1014 389.289 74.8958 390.083C75.6901 390.877 76.7672 391.324 77.8906 391.326H88.3141C89.4376 391.324 90.5146 390.877 91.309 390.083C92.1034 389.289 92.5502 388.212 92.5514 387.088V300.214C92.5502 299.09 92.1034 298.013 91.309 297.219C90.5146 296.425 89.4376 295.978 88.3141 295.977H77.8906Z"
          fill="#222831"
        />
        <Path
          d="M93.099 204.96C112.991 204.96 129.116 188.835 129.116 168.944C129.116 149.052 112.991 132.927 93.099 132.927C73.2074 132.927 57.082 149.052 57.082 168.944C57.082 188.835 73.2074 204.96 93.099 204.96Z"
          fill="#222831"
        />
        <Path
          d="M105.085 184.063C107.419 183.998 110.325 183.917 112.564 182.282C113.23 181.775 113.778 181.128 114.168 180.388C114.559 179.647 114.782 178.83 114.823 177.993C114.864 177.399 114.766 176.803 114.538 176.253C114.311 175.702 113.958 175.212 113.51 174.82C112.34 173.832 110.633 173.6 108.793 174.141L110.7 160.211L109.3 160.019L107.059 176.396L108.228 175.86C109.583 175.238 111.442 174.922 112.598 175.899C112.882 176.154 113.103 176.471 113.244 176.826C113.385 177.181 113.443 177.563 113.412 177.943C113.378 178.566 113.21 179.174 112.92 179.726C112.629 180.277 112.224 180.76 111.73 181.141C109.988 182.414 107.672 182.578 105.045 182.651L105.085 184.063Z"
          fill="#2F2E41"
        />
        <Path d="M125.227 161.412H117.62V162.824H125.227V161.412Z" fill="#2F2E41" />
        <Path d="M101.216 161.412H93.6086V162.824H101.216V161.412Z" fill="#2F2E41" />
        <Path
          d="M128.786 322.071L115.823 227.439C115.684 226.424 115.182 225.494 114.41 224.821C113.639 224.147 112.649 223.776 111.625 223.776H101.84C101.881 223.543 101.902 223.307 101.903 223.07V219.539C101.903 218.415 101.457 217.338 100.662 216.543C99.8677 215.748 98.7899 215.302 97.6661 215.302H89.1916C88.0678 215.302 86.99 215.748 86.1954 216.543C85.4007 217.338 84.9543 218.415 84.9543 219.539V223.07C84.9557 223.307 84.977 223.543 85.0177 223.776H75.2328C74.2086 223.776 73.219 224.147 72.4472 224.821C71.6754 225.494 71.1736 226.424 71.0345 227.439L58.0712 322.071C57.9891 322.671 58.0363 323.281 58.2096 323.861C58.383 324.44 58.6784 324.976 59.0762 325.432C59.4739 325.888 59.9646 326.253 60.5154 326.504C61.0662 326.754 61.6641 326.884 62.2692 326.884H124.588C125.193 326.884 125.791 326.754 126.342 326.504C126.893 326.253 127.384 325.888 127.782 325.432C128.179 324.976 128.475 324.44 128.648 323.861C128.821 323.281 128.869 322.671 128.786 322.071Z"
          fill="#2F2E41"
        />
        <Path
          d="M108.613 274.358V229.11L108.927 229.075C114.299 228.501 119.699 229.872 124.146 232.941C128.593 236.01 131.791 240.572 133.161 245.798L141.22 267.112L108.613 274.358Z"
          fill="#2F2E41"
        />
        <Path
          d="M91.2853 206.084L66.3732 196.415C62.2996 194.834 58.2032 193.301 54.1511 191.665C52.4154 191.06 50.8165 190.118 49.4466 188.892C48.254 187.63 47.4411 186.057 47.1012 184.354C46.2372 180.702 46.3934 176.709 46.455 172.982C46.5029 168.905 46.8384 164.836 47.4591 160.806C48.547 153.233 51.1019 145.946 54.9805 139.351C61.9669 127.888 74.0039 119.264 87.8498 119.952C94.2599 120.271 100.707 122.571 105.469 126.954C105.966 127.547 106.524 128.087 107.133 128.565C107.556 128.724 108.016 128.755 108.457 128.654C109.038 128.617 109.62 128.588 110.202 128.569C112.222 128.484 114.246 128.568 116.251 128.822C119.906 129.217 123.371 130.656 126.23 132.966C128.61 135.013 130.547 137.904 130.746 141.116C130.842 142.59 130.599 144.067 130.034 145.432C129.469 146.798 128.598 148.015 127.488 148.99C124.515 151.495 120.275 150.615 116.71 150.426L103.649 149.734L97.0318 149.383C95.6693 149.311 95.6732 151.43 97.0318 151.502L114.62 152.434C117.446 152.584 120.359 152.951 123.188 152.781C125.362 152.683 127.437 151.848 129.073 150.414C130.567 149.041 131.68 147.305 132.304 145.374C132.927 143.443 133.04 141.383 132.63 139.396C131.723 135.061 128.497 131.476 124.716 129.343C119.57 126.44 113.425 126.162 107.667 126.591L108.416 126.902C101.903 119.911 91.9272 116.96 82.5616 117.993C72.6729 119.083 63.8779 124.6 57.5587 132.144C50.5132 140.554 46.6738 151.042 45.1812 161.826C44.4044 167.648 44.1487 173.528 44.4171 179.396C44.406 181.984 44.8487 184.554 45.7252 186.989C46.7251 189.359 48.5331 191.297 50.8277 192.459C53.4583 193.729 56.1627 194.84 58.9264 195.786L68.1045 199.349L86.133 206.346L90.7221 208.127C91.9939 208.621 92.5448 206.573 91.2853 206.084Z"
          fill="#2F2E41"
        />
        <Path
          d="M52.1153 134.087C49.9503 134.087 47.8339 133.445 46.0338 132.242C44.2337 131.04 42.8307 129.33 42.0022 127.33C41.1737 125.33 40.9569 123.129 41.3793 121.005C41.8016 118.882 42.8442 116.932 44.375 115.401C45.9059 113.87 47.8564 112.827 49.9798 112.405C52.1031 111.982 54.3041 112.199 56.3042 113.028C58.3044 113.856 60.014 115.259 61.2168 117.059C62.4196 118.86 63.0616 120.976 63.0616 123.141C63.0583 126.043 61.904 128.825 59.8519 130.877C57.7998 132.93 55.0174 134.084 52.1153 134.087ZM52.1153 114.313C50.3693 114.313 48.6626 114.831 47.2109 115.801C45.7592 116.771 44.6277 118.15 43.9596 119.763C43.2914 121.376 43.1166 123.151 43.4572 124.863C43.7978 126.575 44.6386 128.148 45.8732 129.383C47.1077 130.618 48.6807 131.458 50.3931 131.799C52.1055 132.14 53.8804 131.965 55.4935 131.297C57.1065 130.628 58.4852 129.497 59.4552 128.045C60.4252 126.594 60.943 124.887 60.943 123.141C60.9403 120.8 60.0094 118.557 58.3545 116.902C56.6995 115.247 54.4557 114.316 52.1153 114.313Z"
          fill="#2F2E41"
        />
        <Path
          d="M235.098 201.923L211.406 183.802L193.285 207.495L216.978 225.615L235.098 201.923Z"
          fill="#F0F0F0"
        />
        <Path
          d="M101.197 40.1606C104.941 40.1577 108.633 41.0313 111.978 42.7117C115.323 44.3921 118.228 46.8324 120.461 49.8373L134.295 31.7485L92.785 0L61.0367 41.5106L78.9276 55.1941C80.718 50.7537 83.7948 46.95 87.763 44.2712C91.7311 41.5924 96.4095 40.1609 101.197 40.1606Z"
          fill="#F0F0F0"
        />
        <Path
          d="M499.294 392.562H0.706215C0.518915 392.562 0.339286 392.487 0.206845 392.355C0.074404 392.222 0 392.043 0 391.855C0 391.668 0.074404 391.489 0.206845 391.356C0.339286 391.224 0.518915 391.149 0.706215 391.149H499.294C499.481 391.149 499.661 391.224 499.793 391.356C499.926 391.489 500 391.668 500 391.855C500 392.043 499.926 392.222 499.793 392.355C499.661 392.487 499.481 392.562 499.294 392.562Z"
          fill="#3F3D56"
        />
        <Path
          d="M377.604 275.379H326.854C324.982 275.377 323.187 274.632 321.863 273.308C320.539 271.984 319.794 270.189 319.792 268.317V264.802C319.794 262.929 320.539 261.134 321.863 259.81C323.187 258.486 324.982 257.742 326.854 257.74H377.604C379.476 257.742 381.271 258.486 382.595 259.81C383.919 261.134 384.664 262.929 384.666 264.802V268.317C384.664 270.189 383.919 271.984 382.595 273.308C381.271 274.632 379.476 275.377 377.604 275.379Z"
          fill="#222831"
        />
        <Path
          d="M382.952 268.602H332.201C330.235 268.6 328.351 267.818 326.96 266.428C325.57 265.038 324.788 263.153 324.786 261.187V257.672C324.788 255.706 325.57 253.821 326.96 252.431C328.351 251.041 330.235 250.259 332.201 250.257H382.952C384.918 250.259 386.802 251.041 388.192 252.431C389.583 253.821 390.365 255.706 390.367 257.672V261.187C390.365 263.153 389.583 265.038 388.192 266.428C386.802 267.818 384.918 268.6 382.952 268.602ZM332.201 251.669C330.61 251.671 329.084 252.304 327.959 253.429C326.833 254.555 326.2 256.08 326.199 257.672V261.187C326.2 262.779 326.833 264.304 327.959 265.43C329.084 266.555 330.61 267.188 332.201 267.19H382.952C384.543 267.188 386.069 266.555 387.194 265.43C388.32 264.304 388.953 262.779 388.954 261.187V257.672C388.953 256.08 388.32 254.555 387.194 253.429C386.069 252.304 384.543 251.671 382.952 251.669H332.201Z"
          fill="#3F3D56"
        />
      </G>
    </Svg>
  );
};

export default Login;