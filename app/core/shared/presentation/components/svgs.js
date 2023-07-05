import React from 'react';
import Svg, { Circle, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeBlend, Path } from 'react-native-svg';


const AppSvgs = {
  emailSvg: (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <Path
        opacity="0.4"
        d="M22.4999 16.4402C22.4999 19.2302 20.2599 21.4902 17.4699 21.5002H17.4599H7.54991C4.76991 21.5002 2.49991 19.2502 2.49991 16.4602V16.4502C2.49991 16.4502 2.50591 12.0242 2.51391 9.79818C2.51491 9.38018 2.99491 9.14618 3.32191 9.40618C5.69791 11.2912 9.94691 14.7282 9.99991 14.7732C10.7099 15.3422 11.6099 15.6632 12.5299 15.6632C13.4499 15.6632 14.3499 15.3422 15.0599 14.7622C15.1129 14.7272 19.2669 11.3932 21.6789 9.47718C22.0069 9.21618 22.4889 9.45018 22.4899 9.86718C22.4999 12.0762 22.4999 16.4402 22.4999 16.4402Z"
        fill="#F67952"
      />
      <Path
        d="M21.976 6.17357C21.11 4.54157 19.406 3.49957 17.53 3.49957H7.55001C5.67401 3.49957 3.97001 4.54157 3.10401 6.17357C2.91001 6.53857 3.00201 6.99357 3.32501 7.25157L10.75 13.1906C11.27 13.6106 11.9 13.8196 12.53 13.8196C12.534 13.8196 12.537 13.8196 12.54 13.8196C12.543 13.8196 12.547 13.8196 12.55 13.8196C13.18 13.8196 13.81 13.6106 14.33 13.1906L21.755 7.25157C22.078 6.99357 22.17 6.53857 21.976 6.17357Z"
        fill="#F67952"
      />
    </Svg>
  ),

  lockSvg: (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.2688 9.21381H16.7312C19.0886 9.21381 21 11.083 21 13.3885V18.3253C21 20.6308 19.0886 22.5 16.7312 22.5H8.2688C5.91136 22.5 4 20.6308 4 18.3253V13.3885C4 11.083 5.91136 9.21381 8.2688 9.21381ZM12.4949 17.8294C12.9928 17.8294 13.3891 17.4419 13.3891 16.955V14.7489C13.3891 14.2719 12.9928 13.8843 12.4949 13.8843C12.0072 13.8843 11.6109 14.2719 11.6109 14.7489V16.955C11.6109 17.4419 12.0072 17.8294 12.4949 17.8294Z"
        fill="#F67952"
      />
      <Path
        opacity="0.4"
        d="M18.0228 7.89595V9.36667C17.6672 9.2673 17.2912 9.21761 16.9051 9.21761H16.2446V7.89595C16.2446 5.87868 14.5679 4.23903 12.5052 4.23903C10.4424 4.23903 8.76579 5.86874 8.75563 7.87608V9.21761H8.1053C7.70901 9.21761 7.33304 9.2673 6.97739 9.37661V7.89595C6.98755 4.91476 9.45676 2.5 12.4849 2.5C15.5536 2.5 18.0228 4.91476 18.0228 7.89595Z"
        fill="#F67952"
      />
    </Svg>
  ),
};

export default AppSvgs;