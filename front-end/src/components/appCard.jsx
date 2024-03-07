export const UserCard = () => {
  return (
    <div className=" relative rounded-[18px] py-[30px] px-[20px]  bg-blue-700 w-[385px] h-[220px] ">
      <div className="flex  gap-[8px] py-[4px] px-[4px] items-center ">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M14.5348 7.47163V0.703369H7.61915V7.47163H0.70343V14.3873H7.61915V21.1556H14.5348V14.3873H21.4506V7.47163H14.5348ZM14.5348 14.2399H7.61915V7.62013H14.5348V14.2399Z"
              fill="white"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="43"
            height="16"
            viewBox="0 0 43 16"
            fill="none"
          >
            <path
              d="M7.32282 7.60974H13.9264V13.2162C12.5907 14.5144 10.5588 15.1917 8.18826 15.1917C3.57889 15.1917 0.68158 12.5389 0.68158 8.26822C0.68158 3.9975 3.57889 1.32596 7.90605 1.32596C10.3142 1.32596 12.1391 2.05969 13.4185 3.24496L11.7441 5.12633C10.841 4.33615 9.46759 3.82818 7.92486 3.82818C5.2345 3.82818 3.4472 5.54023 3.4472 8.26822C3.4472 11.0903 5.30976 12.7459 8.28232 12.7459C9.46759 12.7459 10.54 12.5389 11.4242 11.8804V9.94263H7.32282V7.60974Z"
              fill="white"
            />
            <path
              d="M25.8783 9.79212C25.8783 9.96145 25.8783 10.3565 25.8595 10.5635H17.8825C18.1647 12.0874 19.2182 12.9528 20.9115 12.9528C22.1156 12.9528 23.1879 12.5013 23.884 11.6359L25.5208 13.0281C24.5802 14.3262 23.0751 15.1352 20.7233 15.1352C17.2804 15.1352 15.2485 13.0281 15.2485 9.7545C15.2485 6.49973 17.4498 4.37378 20.5916 4.37378C24.1286 4.37378 25.8783 6.63142 25.8783 9.79212ZM20.5916 6.53735C19.2747 6.53735 18.2211 7.19583 17.9013 8.68212H23.3384C23.1879 7.55329 22.3789 6.53735 20.5916 6.53735Z"
              fill="white"
            />
            <path
              d="M27.5715 14.9283V0.66748H30.1678V14.9283H27.5715Z"
              fill="white"
            />
            <path
              d="M37.0448 15.154C34.0346 15.154 32.078 13.0657 32.078 9.77331C32.078 6.48091 34.0534 4.41141 36.9319 4.41141C37.9855 4.41141 39.246 4.71243 40.0927 5.54023V0.66748H42.6513V14.9283H40.1303V13.9311C39.3213 14.9095 38.042 15.154 37.0448 15.154ZM37.6092 12.8211C38.5876 12.8211 39.6035 12.426 40.1303 11.4665V8.06126C39.6035 7.21465 38.5499 6.74431 37.5528 6.74431C35.916 6.74431 34.7496 7.8355 34.7496 9.77331C34.7496 11.6735 35.8784 12.8211 37.6092 12.8211Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="absolute right-0 bottom-[1px] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="224"
          height="195"
          viewBox="0 0 224 195"
          fill="none"
        >
          <g opacity="0.5">
            <path
              d="M196.175 41.0872C205.369 51.9725 204.982 69.4448 196.526 89.1273C188.089 108.764 171.703 130.371 149.343 149.257C126.984 168.142 102.941 180.684 82.1689 185.717C61.3492 190.762 44.0584 188.221 34.8643 177.335C25.6702 166.45 26.0572 148.978 34.5132 129.295C42.9497 109.658 59.3361 88.0513 81.6956 69.1657C104.055 50.2801 128.098 37.7387 148.87 32.7056C169.69 27.6609 186.981 30.2019 196.175 41.0872Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M199.986 45.598C209.18 56.4833 208.793 73.9556 200.337 93.6381C191.9 113.275 175.514 134.882 153.155 153.768C130.795 172.653 106.752 185.195 85.9801 190.228C65.1604 195.272 47.8696 192.731 38.6755 181.846C29.4814 170.961 29.8684 153.489 38.3244 133.806C46.761 114.169 63.1473 92.562 85.5068 73.6764C107.866 54.7909 131.91 42.2494 152.681 37.2164C173.501 32.1717 190.792 34.7127 199.986 45.598Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M203.798 50.1107C212.992 60.996 212.605 78.4683 204.149 98.1508C195.713 117.788 179.326 139.395 156.967 158.28C134.607 177.166 110.564 189.707 89.7924 194.74C68.9728 199.785 51.6819 197.244 42.4878 186.359C33.2937 175.473 33.6807 158.001 42.1367 138.319C50.5733 118.682 66.9597 97.0747 89.3191 78.1891C111.679 59.3036 135.722 46.7621 156.494 41.7291C177.313 36.6844 194.604 39.2253 203.798 50.1107Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M207.609 54.6236C216.803 65.5089 216.416 82.9812 207.96 102.664C199.524 122.301 183.138 143.908 160.778 162.793C138.419 181.679 114.375 194.22 93.6036 199.253C72.784 204.298 55.4931 201.757 46.299 190.872C37.1049 179.986 37.4919 162.514 45.948 142.832C54.3845 123.194 70.7709 101.588 93.1304 82.7021C115.49 63.8165 139.533 51.2751 160.305 46.242C181.124 41.1973 198.415 43.7383 207.609 54.6236Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M211.42 59.1353C220.614 70.0206 220.227 87.4929 211.771 107.175C203.334 126.813 186.948 148.419 164.588 167.305C142.229 186.191 118.185 198.732 97.4138 203.765C76.5942 208.81 59.3033 206.269 50.1092 195.383C40.9151 184.498 41.3021 167.026 49.7581 147.343C58.1947 127.706 74.5811 106.099 96.9405 87.2138C119.3 68.3282 143.343 55.7868 164.115 50.7537C184.935 45.709 202.225 48.25 211.42 59.1353Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M215.231 63.647C224.425 74.5323 224.038 92.0046 215.582 111.687C207.145 131.324 190.759 152.931 168.399 171.817C146.04 190.702 121.997 203.244 101.225 208.277C80.4054 213.321 63.1145 210.78 53.9204 199.895C44.7263 189.01 45.1133 171.538 53.5694 151.855C62.0059 132.218 78.3923 110.611 100.752 91.7255C123.111 72.8399 147.155 60.2985 167.926 55.2654C188.746 50.2208 206.037 52.7617 215.231 63.647Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M219.042 68.16C228.236 79.0453 227.849 96.5176 219.393 116.2C210.957 135.837 194.57 157.444 172.211 176.33C149.851 195.215 125.808 207.757 105.036 212.79C84.2167 217.834 66.9258 215.293 57.7317 204.408C48.5376 193.523 48.9246 176.051 57.3806 156.368C65.8172 136.731 82.2035 115.124 104.563 96.2385C126.923 77.3529 150.966 64.8114 171.737 59.7784C192.557 54.7337 209.848 57.2747 219.042 68.16Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M222.853 72.6727C232.047 83.558 231.66 101.03 223.204 120.713C214.768 140.35 198.381 161.957 176.022 180.842C153.662 199.728 129.619 212.269 108.848 217.302C88.0279 222.347 70.737 219.806 61.5429 208.921C52.3488 198.036 52.7358 180.563 61.1919 160.881C69.6284 141.244 86.0148 119.637 108.374 100.751C130.734 81.8656 154.777 69.3241 175.549 64.2911C196.368 59.2464 213.659 61.7874 222.853 72.6727Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M226.665 77.1844C235.859 88.0697 235.472 105.542 227.016 125.225C218.579 144.862 202.193 166.468 179.833 185.354C157.474 204.24 133.43 216.781 112.659 221.814C91.8391 226.859 74.5482 224.318 65.3541 213.433C56.16 202.547 56.547 185.075 65.0031 165.392C73.4396 145.755 89.826 124.148 112.185 105.263C134.545 86.3773 158.588 73.8359 179.36 68.8028C200.18 63.7581 217.47 66.2991 226.665 77.1844Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M230.475 81.6963C239.669 92.5817 239.282 110.054 230.826 129.736C222.389 149.374 206.003 170.98 183.643 189.866C161.284 208.752 137.241 221.293 116.469 226.326C95.6493 231.371 78.3584 228.83 69.1643 217.944C59.9702 207.059 60.3572 189.587 68.8133 169.904C77.2498 150.267 93.6362 128.66 115.996 109.775C138.355 90.8893 162.398 78.3478 183.17 73.3148C203.99 68.2701 221.281 70.811 230.475 81.6963Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M234.287 86.209C243.481 97.0944 243.094 114.567 234.638 134.249C226.202 153.886 209.815 175.493 187.456 194.379C165.096 213.264 141.053 225.806 120.281 230.839C99.4616 235.883 82.1707 233.343 72.9766 222.457C63.7825 211.572 64.1695 194.1 72.6256 174.417C81.0621 154.78 97.4485 133.173 119.808 114.288C142.167 95.4019 166.211 82.8605 186.982 77.8275C207.802 72.7828 225.093 75.3237 234.287 86.209Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M238.097 90.7208C247.291 101.606 246.904 119.078 238.448 138.761C230.012 158.398 213.625 180.005 191.266 198.89C168.906 217.776 144.863 230.317 124.091 235.35C103.272 240.395 85.9809 237.854 76.7868 226.969C67.5927 216.084 67.9797 198.611 76.4357 178.929C84.8723 159.292 101.259 137.685 123.618 118.799C145.978 99.9137 170.021 87.3722 190.793 82.3392C211.612 77.2945 228.903 79.8355 238.097 90.7208Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M241.908 95.2327C251.103 106.118 250.716 123.59 242.259 143.273C233.823 162.91 217.437 184.517 195.077 203.402C172.718 222.288 148.674 234.829 127.903 239.862C107.083 244.907 89.7921 242.366 80.598 231.481C71.4039 220.596 71.7909 203.123 80.247 183.441C88.6835 163.804 105.07 142.197 127.429 123.311C149.789 104.426 173.832 91.8842 194.604 86.8511C215.423 81.8064 232.714 84.3474 241.908 95.2327Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M245.721 99.7454C254.915 110.631 254.528 128.103 246.072 147.786C237.635 167.423 221.249 189.03 198.889 207.915C176.53 226.801 152.487 239.342 131.715 244.375C110.895 249.42 93.6044 246.879 84.4103 235.994C75.2162 225.108 75.6033 207.636 84.0593 187.953C92.4958 168.316 108.882 146.709 131.242 127.824C153.601 108.938 177.644 96.3969 198.416 91.3638C219.236 86.3191 236.527 88.8601 245.721 99.7454Z"
              stroke="white"
              strokeWidth="1.47658"
            />
            <path
              d="M249.532 104.258C258.726 115.144 258.339 132.616 249.883 152.298C241.446 171.936 225.06 193.542 202.701 212.428C180.341 231.314 156.298 243.855 135.526 248.888C114.707 253.933 97.4157 251.392 88.2216 240.507C79.0275 229.621 79.4145 212.149 87.8705 192.466C96.307 172.829 112.693 151.222 135.053 132.337C157.412 113.451 181.456 100.91 202.227 95.8768C223.047 90.8321 240.338 93.3731 249.532 104.258Z"
              stroke="white"
              strokeWidth="1.47658"
            />
          </g>
        </svg>
      </div>
      <div className="absolute left-[25px] bottom-[40px]">
        <h1 className="text-xl">Cash</h1>
        <div className="text-white text-2xl"> 10000 </div>
      </div>
      <div className="absolute right-[30px] bottom-[30px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M21.2692 10.0015C21.6815 9.6826 22.2743 9.7583 22.5932 10.1706C27.1419 16.0511 27.1289 23.744 22.5945 29.632C22.2764 30.045 21.6838 30.122 21.2708 29.8039C20.8578 29.4859 20.7808 28.8932 21.0989 28.4802C25.1125 23.2686 25.1207 16.5234 21.1001 11.3256C20.7812 10.9132 20.8569 10.3205 21.2692 10.0015Z"
            fill="white"
          />
          <path
            d="M17.5023 12.4362C17.9143 12.1169 18.5071 12.1921 18.8264 12.6042C22.2385 17.0076 22.2246 22.7872 18.8281 27.1969C18.51 27.6098 17.9174 27.6867 17.5044 27.3687C17.0915 27.0506 17.0145 26.458 17.3326 26.045C20.2089 22.3107 20.2163 17.4797 17.3343 13.7604C17.015 13.3483 17.0902 12.7555 17.5023 12.4362Z"
            fill="white"
          />
          <path
            d="M15.6918 15.9561C15.3739 15.543 14.7813 15.4658 14.3682 15.7838C13.9551 16.1017 13.878 16.6943 14.1959 17.1074C15.4989 18.8004 15.5068 20.9748 14.1964 22.6748C13.8781 23.0877 13.9548 23.6803 14.3677 23.9986C14.7805 24.3168 15.3732 24.2401 15.6914 23.8273C17.528 21.4447 17.5146 18.3244 15.6918 15.9561Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};
