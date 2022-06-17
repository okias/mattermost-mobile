// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
import * as React from 'react';
import Svg, {
    Path,
    Mask,
    G,
    EMaskUnits,
} from 'react-native-svg';

type Props = {
    theme: Theme;
}

function SvgComponent({theme}: Props) {
    return (
        <Svg
            width={200}
            height={201}
            fill='none'
            viewBox='0 0 210 170'
        >
            <Path
                d='M20.215 68.747h41.93a5.84 5.84 0 0 1 4.143 1.704 5.864 5.864 0 0 1 1.727 4.14v26.71a5.879 5.879 0 0 1-1.727 4.141 5.842 5.842 0 0 1-4.144 1.704h-6.188v9.998l-9.281-9.998H20.23a5.857 5.857 0 0 1-4.143-1.704 5.871 5.871 0 0 1-1.728-4.141v-26.71a5.871 5.871 0 0 1 1.722-4.135 5.844 5.844 0 0 1 4.134-1.709Z'
                fill={theme.buttonBg}
            />
            <Path
                d='M46.675 107.146H20.23a5.857 5.857 0 0 1-4.143-1.704 5.871 5.871 0 0 1-1.728-4.141V85.086s1.846 14.994 2.178 16.314c.332 1.32.99 3.295 4.109 3.622 3.119.328 26.029 2.124 26.029 2.124Z'
                fill='#000'
                fillOpacity={0.16}
            />
            <Path
                d='M55.501 84.128a3.77 3.77 0 0 0-3.49 2.337 3.795 3.795 0 0 0 .82 4.126 3.774 3.774 0 0 0 6.447-2.677 3.787 3.787 0 0 0-2.33-3.499 3.764 3.764 0 0 0-1.447-.287ZM41.18 84.128a3.77 3.77 0 0 0-3.49 2.337 3.794 3.794 0 0 0 .819 4.126 3.775 3.775 0 0 0 4.116.82 3.78 3.78 0 0 0 2.331-3.497 3.79 3.79 0 0 0-1.104-2.678 3.772 3.772 0 0 0-2.673-1.108ZM26.873 84.128a3.77 3.77 0 0 0-3.493 2.334 3.793 3.793 0 0 0 .816 4.127 3.774 3.774 0 0 0 6.45-2.675 3.787 3.787 0 0 0-2.328-3.498 3.764 3.764 0 0 0-1.445-.288Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M63.664 79.93a11.918 11.918 0 0 0-5.668-7.174.411.411 0 0 1 .168-.779c2.644-.159 7.98.407 6.307 7.914a.417.417 0 0 1-.807.04Z'
                fill='#fff'
                fillOpacity={0.16}
            />
            <Path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M207.944 110.447c0 36.185-29.205 65.518-65.232 65.518-36.026 0-65.231-29.333-65.231-65.518 0-36.184 29.205-65.518 65.231-65.518 36.027 0 65.232 29.334 65.232 65.518Zm-.637 0c0 35.832-28.92 64.879-64.595 64.879-35.674 0-64.595-29.047-64.595-64.879 0-35.832 28.921-64.879 64.595-64.879 35.675 0 64.595 29.047 64.595 64.879Z'
                fill={theme.centerChannelColor}
                fillOpacity={0.16}
            />
            <Path
                d='M142.712 175.326c35.675 0 64.595-29.047 64.595-64.879 0-35.832-28.92-64.879-64.595-64.879s-64.595 29.047-64.595 64.879c0 35.832 28.92 64.879 64.595 64.879Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M142.712 175.326c35.675 0 64.595-29.047 64.595-64.879 0-35.832-28.92-64.879-64.595-64.879s-64.595 29.047-64.595 64.879c0 35.832 28.92 64.879 64.595 64.879Z'
                fill={theme.centerChannelColor}
                fillOpacity={0.16}
            />
            <Path
                d='M155.792 71.637c2.437-.51 6.786-.958 9.91.984 2.029 1.263 3.191 3.507 4.631 5.416 1.631 2.156 3.689 3.97 5.408 6.063 5.246 6.395 6.965 15.552 4.378 23.427-.823 2.499-2.039 4.863-2.694 7.409-.83 3.229-.716 6.611-.976 9.933-.694 9.229-4.142 17.993-7.549 26.587-1.023 2.58-2.087 5.226-3.98 7.248-3.074 3.282-8.243 4.369-12.369 2.604-2.995-1.284-5.377-3.873-8.52-4.731-1.497-.407-3.073-.393-4.618-.532-7.869-.718-15.183-5.787-18.628-12.915-3.446-7.128-2.891-16.048 1.411-22.69 1.431-2.213 3.234-4.16 5.008-6.093l9.082-9.821c2.301-2.486 4.677-5.104 5.602-8.371.679-2.395.515-4.946.715-7.425.384-4.678 2.194-9.342 5.539-12.614 3.346-3.272 5.487-4.026 7.65-4.479Z'
                fill='#6F370B'
            />
            <Mask
                id='a'
                maskUnits={'userSpaceOnUse' as EMaskUnits.USER_SPACE_ON_USE}
                x={76}
                y={43}
                width={134}
                height={135}
            >
                <Path
                    d='M142.712 176.326c36.231 0 65.595-29.499 65.595-65.879 0-36.38-29.364-65.879-65.595-65.879-36.231 0-65.595 29.5-65.595 65.879 0 36.38 29.364 65.879 65.595 65.879Z'
                    fill='#FFFFFF'
                />
            </Mask>
            <G mask='url(#a)'>
                <Path
                    d='m156.679 118.534-8.794 18.965c-.238.515-.029 1.677.477 1.916 8.155 3.722 11.617 7.744 12.977 9.222a511.194 511.194 0 0 1 17.795 20.405c4.462-2.218 14.091-9.73 19.337-16.915 20.583-28.192 10.237-52.42 7.63-51.498-11.684 4.137-16.732 6.977-26.707 14.372-2.191 1.626-6.168 3.667-8.703 4.67-4.242 1.677-10.163-.797-12.471-1.916-.518-.266-1.338.232-1.541.779Z'
                    fill={theme.centerChannelBg}
                />
                <Path
                    d='m156.679 118.534-8.794 18.965c-.239.515-.029 1.677.477 1.916 8.155 3.722 11.617 7.744 12.976 9.222a510.414 510.414 0 0 1 17.796 20.405c4.462-2.218 14.09-9.73 19.336-16.915 20.584-28.192 10.237-52.42 7.631-51.498-11.684 4.137-16.732 6.977-26.707 14.372-2.191 1.626-6.169 3.667-8.703 4.67-4.243 1.677-10.163-.797-12.472-1.916-.517-.266-1.337.232-1.54.779Z'
                    fill={theme.centerChannelColor}
                    fillOpacity={0.04}
                />
            </G>
            <Path
                d='M88.124 49.27c.121 1.962-.046 8.863 0 9.51.503 8.58 19.505 32.628 21.348 34.443 4.44 4.374 13.955 10.01 19.315 13.174 11.148 6.577 15.831 7.162 27.899 12.137l-8.794 18.965c-18.278-6.599-26.266-11.449-35.804-17.916-3.369-2.285-10.144-7.076-12.876-9.821-11.208-11.257-16.103-32.335-20.746-42.395-2.265-4.91-3.538-5.16-5.007-7.186-1.908-2.635-2.027-3.473-3.577-5.749-2.53-3.715-7.48-6.64-9.062-9.87a.413.413 0 0 1 .303-.584.409.409 0 0 1 .246.035c2.974 1.459 5.177 2.994 8.396 4.551.544-1.406-1.192-4.072-2.862-6.707-1.561-2.467-4.65-10.898-3.457-12.096.589-.591 2.385 1.97 3.219 3.473 3.1 5.51 4.65 7.066 4.65 7.066s-6.372-11.286-5.962-12.215c.954-2.156 5.228 4.04 8.585 9.102 1.907 2.874 3.1 3.592 3.1 3.592s-1.073-8.742-1.789-12.814c-.524-2.987 1.26-2.256 2.504 1.078.716 1.916 1.05 3.399 2.146 6.706a45.414 45.414 0 0 0 1.908 4.79c1.123 2.506 1.907 3.354 2.742 4.672.253-2.35.358-3.234 1.43-5.51 1.136-2.395 3.816-5.508 2.624-.718-.873 3.473-.594 8.462-.48 10.288ZM168.43 109.482c-1.028-.558-2.291-1.152-3.338-1.677-2.17-1.087-4.037-2.079-5.63-3.916a63.152 63.152 0 0 1-8.675-12.951c-1.023-2.031-1.946-4.154-2.251-6.41-.305-2.256.069-4.683 1.431-6.498 2.384-3.178 7.945-4.103 10.589-3.28 2.948.918 6.815 4.823 9.3 8.145 3.577 4.776 5.723 8.297 8.346 13.653.238.479 1.206 4.852 1.321 5.065 2.971 5.474 6.786 7.39 6.786 7.39l2.442-.958a6.171 6.171 0 0 1 3.494-.309 6.191 6.191 0 0 1 3.102 1.645 7.433 7.433 0 0 1 1.335 1.651c2.862 5.509 2.888 11.736-.954 15.569-3.841 3.832-7.656 5.37-12.995 4.431-2.781-.479-5.723-1.677-8.449-3.248-3.701-2.156-3.963-7.092-.715-9.873.019.007-2.394-6.951-5.139-8.429Z'
                fill='#FFBC1F'
            />
            <Path
                d='M171.203 112.682c5.392-2.506 6.796-5.691 7.123-6.661a.443.443 0 0 0-.119-.463l-.015-.012a.434.434 0 0 0-.368-.109.436.436 0 0 0-.271.157 9.81 9.81 0 0 1-2.351 2.058 9.203 9.203 0 0 1-5.287 1.756 8.988 8.988 0 0 1-2.079-.24c.208.108.415.216.608.321.985.534 1.939 1.801 2.759 3.193Z'
                fill='#CC8F00'
            />
            <Path
                d='M166.399 99.609a6.721 6.721 0 0 0 3.851-3.26c.214-.407-.403-.772-.618-.362a6 6 0 0 1-3.429 2.942c-.434.146-.238.84.191.692l.005-.012ZM157.373 79.984c-1.257 4.908-1.478 9.998-6.247 12.873-3.367-2.499-4.905-10.484-2.623-14.633 1.33-2.41 5.67-5.202 9.023-6.268 1.094-.348 5.808 2.251 5.761 2.675-.353 3.236-3.842 6.297-5.485 9.102l-.429-3.749Z'
                fill='#6F370B'
            />
            <Path
                d='M174.17 90.298c-.208-1.109.839-2.076.93-3.202.117-1.452-1.317-2.493-2.576-3.22a.844.844 0 0 0-.543-.162c-.315.055-.456.424-.511.74a5.848 5.848 0 0 0 .878 4.184l1.822 1.66Z'
                fill='#FFBC1F'
            />
            <Path
                d='M173.297 86.708a.683.683 0 0 1 .217-.853c.381-.256.024-.879-.36-.62a1.422 1.422 0 0 0-.477 1.837c.207.412.825.048.617-.364h.003ZM83.943 44.688c-1.771 1.823-2.68 4.508-3.004 6.994-.239 1.917.513 4.537 2.244 5.596.393.24.753-.381.36-.62-1.75-1.071-2.146-3.692-1.796-5.529.396-2.127 1.173-4.362 2.702-5.933.322-.33-.181-.838-.506-.508ZM75.373 63.565c1.639 1.164 4.343 1.368 5.876-.139.329-.323-.176-.83-.506-.508-1.318 1.296-3.631 1.004-5.007.027-.377-.269-.735.354-.36.62h-.003ZM162.35 91.544c.488.82.853 1.708 1.082 2.635.122.5.122 1.025.239 1.52.005.17.052.334.136.48.617.795 1.819-.213 2.212-.748.272-.373-.348-.733-.617-.364-.165.226-.592.736-.882.614-.201-.084-.148-.192-.179-.48a9.881 9.881 0 0 0-1.369-4.019.356.356 0 0 0-.646.094.36.36 0 0 0 .028.268h-.004ZM164.615 85.71c-1.073 0-1.076 1.676 0 1.676 1.075 0 1.078-1.677 0-1.677ZM157.759 90.44c-1.073 0-1.075 1.676 0 1.676 1.076 0 1.078-1.676 0-1.676Z'
                fill='#6F370B'
            />
            <Path
                d='M35.265 117.963H11.052a3.359 3.359 0 0 0-2.392.983 3.39 3.39 0 0 0-.998 2.392v15.423a3.39 3.39 0 0 0 2.097 3.122c.41.169.85.255 1.293.253h3.574v5.774l5.36-5.774h15.27a3.359 3.359 0 0 0 2.393-.983 3.39 3.39 0 0 0 .998-2.392v-15.423a3.392 3.392 0 0 0-.995-2.389 3.376 3.376 0 0 0-2.387-.986Z'
                fill='#FFBC1F'
            />
            <Path
                d='M19.986 140.136h15.27a3.359 3.359 0 0 0 2.393-.983 3.39 3.39 0 0 0 .998-2.392v-9.363s-1.066 8.658-1.258 9.421c-.192.762-.572 1.902-2.373 2.091-1.8.189-15.03 1.226-15.03 1.226Z'
                fill='#CC8F00'
            />
            <Path
                d='M14.889 126.845a2.179 2.179 0 0 1 2.015 1.349 2.191 2.191 0 0 1-.473 2.383 2.182 2.182 0 0 1-2.377.474 2.184 2.184 0 0 1-1.347-2.02 2.186 2.186 0 0 1 1.346-2.021c.265-.109.55-.166.836-.165ZM23.159 126.845a2.179 2.179 0 0 1 2.015 1.349 2.191 2.191 0 0 1-.473 2.383 2.182 2.182 0 0 1-2.377.474 2.184 2.184 0 0 1-1.346-2.02 2.188 2.188 0 0 1 1.346-2.021c.265-.109.548-.166.835-.165ZM31.42 126.845a2.187 2.187 0 0 1 .43 4.33 2.185 2.185 0 0 1-1.971-3.69 2.18 2.18 0 0 1 1.541-.64Z'
                fill={theme.centerChannelBg}
            />
            <Path
                d='M10.175 124.421a6.86 6.86 0 0 1 3.273-4.143.24.24 0 0 0 .046-.395.24.24 0 0 0-.143-.055c-1.527-.092-4.608.235-3.642 4.57a.24.24 0 0 0 .224.195.245.245 0 0 0 .15-.044.247.247 0 0 0 .092-.128Z'
                fill='#FFD470'
            />
        </Svg>
    );
}

export default SvgComponent;
