import React from 'react'
import { SvgIcon, SvgIconProps } from '@material-ui/core'

export default function FinancesIcon({ ...props }: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 55 50">
      <path d="M51.8264 6.85333C47.4676 2.49454 38.608 0 27.5113 0C16.4145 0 7.55492 2.49454 3.19613 6.85333C1.52811 8.5121 0.444985 10.6685 0.110287 12.997C-0.224412 15.3254 0.207481 17.6996 1.34076 19.761C1.68917 20.2525 2.15331 20.6505 2.69213 20.9199C3.23096 21.1894 3.82788 21.3218 4.43009 21.3057C4.97039 21.2946 5.50841 21.2322 6.03689 21.1193L6.25883 21.0749C6.91575 20.9506 8.41603 20.5511 9.87192 20.1871C11.0171 19.8853 12.1001 19.6012 12.5351 19.5125C13.6392 19.2884 14.6137 18.6456 15.2542 17.7188C15.8947 16.792 16.1515 15.6531 15.9707 14.5411C15.8973 14.0204 15.9387 13.4899 16.092 12.9869C16.2454 12.4839 16.507 12.0206 16.8584 11.6294C17.9681 10.3865 20.7289 8.87737 27.5113 8.87737C34.2758 8.87737 37.0278 10.3599 38.1641 11.6027C38.5162 11.9953 38.7782 12.4601 38.9316 12.9647C39.0849 13.4693 39.126 14.0013 39.0518 14.5234C38.7145 17.6748 41.715 19.1396 43.313 19.4681C43.748 19.5568 44.7245 19.8676 45.6655 20.1605C46.855 20.5334 48.0801 20.924 48.737 21.0482H48.959C50.0864 21.2702 52.1903 21.6874 53.6729 19.7078C54.7958 17.6534 55.2228 15.2905 54.8899 12.9731C54.5571 10.6557 53.4822 8.50851 51.8264 6.85333ZM52.2614 18.6957C51.5068 19.7078 50.5569 19.5835 49.3052 19.3615H49.0655C48.5151 19.255 47.29 18.8733 46.207 18.536C45.124 18.1986 44.2096 17.9057 43.6858 17.7903C43.6858 17.7903 40.5787 17.1244 40.8273 14.7719C40.9221 14.0003 40.8498 13.2172 40.6155 12.4759C40.3812 11.7346 39.9902 11.0523 39.4691 10.4753C37.4894 8.2382 33.468 7.1019 27.5113 7.1019C21.5457 7.1019 17.5065 8.22045 15.5268 10.422C15.0072 11.001 14.6191 11.6857 14.3893 12.4289C14.1594 13.1721 14.0932 13.9563 14.1952 14.7276C14.3196 15.3926 14.1808 16.08 13.8082 16.6448C13.4356 17.2095 12.8582 17.6075 12.1978 17.7547C11.7095 17.8613 10.6531 18.1365 9.43693 18.4561C8.07869 18.8112 6.5429 19.2195 5.94812 19.3438H5.71731C4.43009 19.6101 3.54235 19.7078 2.76114 18.6957C1.97993 17.6837 0.328743 12.233 4.43009 8.10504C8.53143 3.97706 16.8584 1.77547 27.5113 1.77547C38.1641 1.77547 46.5443 4.08359 50.5924 8.10504C54.6405 12.1265 53.0692 17.6216 52.2614 18.6957V18.6957Z" />
      <path d="M33.725 20.0185V15.0916H31.9495V19.7078C31.0666 19.59 30.177 19.5307 29.2863 19.5302H25.7353C24.8447 19.5307 23.955 19.59 23.0721 19.7078V15.0916H21.2967V20.0185C16.7638 21.028 12.7104 23.5527 9.80545 27.1759C6.90046 30.799 5.31737 35.3042 5.31738 39.9482V49.7133H49.7042V39.9482C49.7043 35.3042 48.1212 30.799 45.2162 27.1759C42.3112 23.5527 38.2579 21.028 33.725 20.0185V20.0185ZM47.9288 47.9378H7.09286V39.9482C7.09286 35.0039 9.05697 30.2621 12.5531 26.766C16.0493 23.2698 20.791 21.3057 25.7353 21.3057H29.2863C34.2306 21.3057 38.9724 23.2698 42.4685 26.766C45.9647 30.2621 47.9288 35.0039 47.9288 39.9482V47.9378Z" />
      <path d="M27.5101 26.6321C25.9299 26.6321 24.3852 27.1007 23.0713 27.9786C21.7575 28.8565 20.7334 30.1044 20.1287 31.5643C19.524 33.0242 19.3657 34.6306 19.674 36.1805C19.9823 37.7303 20.7433 39.1539 21.8606 40.2713C22.978 41.3887 24.4016 42.1496 25.9514 42.4579C27.5013 42.7662 29.1077 42.6079 30.5676 42.0032C32.0276 41.3985 33.2754 40.3745 34.1533 39.0606C35.0312 37.7467 35.4998 36.202 35.4998 34.6218C35.4998 32.5028 34.658 30.4706 33.1597 28.9723C31.6613 27.4739 29.6291 26.6321 27.5101 26.6321V26.6321ZM27.5101 40.8359C26.2811 40.8359 25.0797 40.4715 24.0577 39.7887C23.0358 39.1058 22.2393 38.1353 21.769 36.9998C21.2987 35.8643 21.1756 34.6149 21.4154 33.4095C21.6552 32.204 22.247 31.0968 23.1161 30.2277C23.9851 29.3586 25.0924 28.7668 26.2978 28.527C27.5033 28.2872 28.7527 28.4103 29.8882 28.8806C31.0237 29.351 31.9942 30.1475 32.677 31.1694C33.3599 32.1913 33.7243 33.3927 33.7243 34.6218C33.7243 36.2699 33.0696 37.8505 31.9042 39.0159C30.7388 40.1812 29.1582 40.8359 27.5101 40.8359Z" />
    </SvgIcon>
  )
}
