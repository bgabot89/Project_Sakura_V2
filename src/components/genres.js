import React from 'react';
import { PropTypes, Component } from 'react';
import { SoundPlayerContainer } from 'react-soundplayer/addons';
import { PlayButton, PrevButton, NextButton, Progress, Timer } from 'react-soundplayer/components';
import { Link } from 'react-router';


export default class Genres extends React.Component {
    render () {
      return (
        <div className="text-center">
        <h1> Curious about an event but you're unfamiliar with the genre? <br /> Project Sakura offers a variety of genre samples for you to listen at your convenience </h1>

          <div className="col-md-4">
          <Link to ="/anime">
          <svg className="genre-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1567.2 1230.1">
          <g className="music-icon" id="j-traditional">
            <circle className="st100000" cx="768" cy="615.1" r="547.5" id="icon_x5F_circle"/>
            <path className="st208" d="M756.7 743.8c-110.9 0-200.8 104.1-200.8 232.5 0 64.3 22.6 122.5 59 164.6 48.6 14.1 100 21.7 153.1 21.7 42.5 0 83.9-4.8 123.6-14 40.5-42.5 66-104 66-172.3-.1-128.4-90-232.5-200.9-232.5z" id="jpop_clothes"/>
            <g id="stripes_j-pop">
                <path className="st209" d="M701.7 851.6l-42.5-9.2 6.4 310.6c14.8 2.8 29.8 5 45 6.6l-8.9-308zM828.2 842.4l-42 11.1 4.5 308.7c15.1-.6 30-1.8 44.8-3.7l-7.3-316.1zM903.9 1134.5l-9.7-327.7-5.1-5.4-25.9 9.6 8.2 341.9c6.8-1.3 13.5-2.7 20.2-4.2 4.2-4.6 8.3-9.3 12.3-14.2zM597.1 835.2l4.6 288.9c4.2 5.8 8.6 11.4 13.2 16.8 7.6 2.2 15.4 4.3 23.1 6.2l-7.2-321.8-22-6.3c-4.1 5.2-8 10.6-11.7 16.2z"/>
            </g>
            <g id="sleeves_j-pop">
                <path className="st210" d="M749.1 856.9l3.2 1c-.6-.7-1.7-1-3.2-1zM607.8 820.2c-25.8 33-43.6 74.6-49.6 120.7.1 0 164.1-84.8 191-84.1l-135.4-40.6-6 4z"/>
                <path className="st210" d="M955.2 941c0-.3-3.9-22.8-11.4-49.2-10.5-31.1-26.6-58.9-46.8-81.8-38.1-12.6-144.8 47.9-144.8 47.9 11.3 11.4 203 83.1 203 83.1z"/>
            </g>
            <g id="j-pop_collar">
                <path className="st211" d="M752.3 857.9l78.1 79.8L902.3 806l-150 51.9M752.3 857.9l-73.1 79.8L608.8 819l143.5 38.9"/>
            </g>
            <path className="st121" d="M509.5 615.1c0-134.1 108.7-242.8 242.8-242.8S995.1 481 995.1 615.1 886.4 857.9 752.3 857.9c-143.7 0-242.8-83.6-242.8-242.8z" id="skin"/>
            <g id="eyes">
                <ellipse cx="648.3" cy="591.3" rx="30.8" ry="51"/>
                <ellipse cx="856.2" cy="591.3" rx="30.8" ry="51"/>
            </g>
            <g id="jpop_hair_base">
                <path className="st201" d="M768 372.9s-175.5-25-246.9 164.8c116.6-1.9 245-3.4 245-3.4l1.9-161.4z"/>
                <path className="st201" d="M835.1 461.6l26.9 75.5c37.8 1 80.3 2.1 121.3 3.2-69.2-190.6-245-167.6-245-167.6v161.4s25.9.6 65 1.6l31.8-74.1z"/>
            </g>
            <g id="pigtails_jpop">
                <path className="st201" d="M902.3 421.9s.3-2 1-5.3c4-19.4 22.3-84.2 80.1-44.4 67.5 46.5 42.5 106.4 58.8 125.1 0 0 17.9 28.8 52.2 24.2 34.3-4.6 85.3-42.6 90.8 23.2s-16.7 140-65.8 181.7c4.6-64.9 23.2-114.9 5.6-130.7-17.6-15.8-87.1 15.8-106.6-42.6s-55.6-73.2-60.7-74.2l-5.1-.9M601.9 426.1s-.3-2-1-5.2c-4.4-19.4-23.7-83.8-80.8-43-66.8 47.6-40.8 107.1-56.7 126.1 0 0-17.4 29.1-51.7 25.1-34.4-4-86-41.2-90.4 24.7-4.4 65.9 67.8 178.8 67.8 178.8.6.9.9.8.6-.3 0 0-24.7-112.6-7.4-128.6s87.4 14.3 105.9-44.5 54.3-74.2 59.4-75.2l5.1-1"/>
            </g>
            <g id="bowties">
                <path className="st222" d="M894.9 366.2s-51.9 8.4-51 72.3c21.8 10.7 61 1.2 61 1.2l13.1-18.6c0 .1-10-59.2-23.1-54.9z"/>
                <path transform="scale(-1) rotate(35.192 1387.185 -2916.554)" className="st122" d="M908.5 426.3h32.9v27.2h-32.9z"/>
                <path className="st222" d="M1004.5 442.8s10.1 51.6-50.1 72.8c-17.6-16.7-22.3-56.8-22.3-56.8l12.9-18.7s59.1-11.1 59.5 2.7z"/>
                <path className="st223" d="M500.4 467.1s-3.2 52.5 59.4 65.6c15.3-18.9 14.6-59.3 14.6-59.3l-15.3-16.9c0 .1-60.1-3.1-58.7 10.6z"/>
                <path transform="rotate(137.842 578.909 453.928)" className="st123" d="M562.5 440.3h32.9v27.2h-32.9z"/>
                <path className="st223" d="M599.1 376.9s52.6 1.4 60.1 64.9c-20.2 13.5-60.3 9.3-60.3 9.3l-15.5-16.7s2.2-60.1 15.7-57.5z"/>
            </g>
            <g id="musical_notes">
                <g className="music_note" id="music_note1">
                    <ellipse transform="scale(-1) rotate(-16.086 -2826.746 7592.52)" className="st232" cx="1073" cy="399.4" rx="61.6" ry="38.6"/>
                    <path className="st232" d="M1105 360.6l-50.7-175.7s102.6-42.3 147.6 96c-19.9-18.7-57.7-65-112.3-46 22.7 73.7 40.7 143 40.7 143"/>
                </g>
                <g className="music_note" id="music_note2">
                    <ellipse transform="scale(-1) rotate(-16.086 -2368.804 9000.845)" className="st232" cx="1272" cy="334.7" rx="44.5" ry="27.9"/>
                    <path className="st232" d="M1295.1 306.6l-36.6-127.1s74.2-30.6 106.7 69.4c-14.4-13.5-41.7-47-81.2-33.3 16.4 53.3 29.5 103.4 29.5 103.4"/>
                </g>
                <g className="music_note" id="music_note3">
                    <ellipse transform="scale(-1) rotate(-16.086 -2025.271 10137.473)" className="st232" cx="1432.6" cy="286.2" rx="31" ry="19.4"/>
                    <path className="st232" d="M1448.7 266.6l-25.5-88.4s51.6-21.3 74.3 48.3c-10-9.4-29-32.7-56.5-23.2 11.4 37.1 20.5 72 20.5 72"/>
                </g>
            </g>
          </g>
          </svg>
          </Link>
          <p className="genre-info"> J-Pop</p>
          </div>

        <div className="col-md-4">
          <Link to="/jrock">
        <svg className="genre-icon" id="j-rock" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1567.2 1230.1">
          <g className="music-icon">
          <circle className="st10000" cx="768" cy="615.1" r="547.5" id="icon_x5F_circle"/>
          <path className="st104" d="M750 743.8c-110.9 0-200.8 104.1-200.8 232.5 0 63 21.6 120.1 56.7 161.9 50.1 15.5 103.4 24 158.5 24.4 41.4-.2 81.7-5 120.4-14 40.5-42.5 66-104 66-172.3 0-128.4-89.9-232.5-200.8-232.5z" id="j-rock_clothes"/>
          <g id="J-ROCK_COLLAR" className="st102">
              <path className="st1005" d="M752.3 857.8l67.1 61.7 42.3-85.5-109.4 23.8M752.3 857.8l-62.2 61.7-38.7-79.7 100.9 18"/>
          </g>
          <g id="J-ROCK_BUTTONS" className="st102">
              <ellipse className="st106" cx="760.1" cy="900.2" rx="7.8" ry="8.4"/>
              <ellipse className="st106" cx="760.1" cy="973" rx="7.8" ry="8.4"/>
              <ellipse className="st106" cx="760.1" cy="1059.2" rx="7.8" ry="8.4"/>
          </g>
          <g id="vest_j-rock">
              <path className="st118" d="M800.2 1168.7l81.8-18c-25.9 5.5-52.4 9.1-79.5 10.8-1.3 6.2-2.3 7.2-2.3 7.2zM978 877.6c-29.2-32.7-73.9-69.6-73.9-69.6l-5.8 3.6c36.5 42.1 59.1 100.4 59.1 164.7 0 68.3-25.5 129.8-66 172.3 0 0 59.5-50 66-78.1 6.6-28.1 49.9-160.2 20.6-192.9z"/>
              <path className="st119" d="M885.5 817.9l-23.8 13.2s-3.1 179.1-42.9 222.4c.4 67.7-2.7 95.2-4.9 106.2 15.8-1 31.4-2.6 46.7-4.9 14.7-2.5 29.2-5.6 43.5-9.3 39.8-42.5 64.8-103.4 64.8-171 0-64.4-22.6-122.6-59.9-171.3l-23.5 14.7z"/>
              <g>
                  <path className="st118" d="M673 1151.3c-20.9-3.4-41.4-7.9-61.5-13.3-39.3-42.1-63.6-100.3-63.6-164.6 0-57 19.1-109.2 50.8-149.6-18.6 10.9-43.2 26-62.9 40.7-36.9 27.5-14.4 164.9-12.5 193.6s56.3 87.9 56.3 87.9l93.5 34.9c.1 0-2.5-3.3-.1-29.6z"/>
              </g>
              <path className="st119" d="M654.1 825.1l-24.3-13.5-24.1-15.1C567.3 846 544 905.3 543.9 970.9c-.2 64.7 22.2 123.4 58.6 166.3 32 10.1 65.2 17.4 99.4 21.5-2.2-12.1-5-40.5-4.5-106.9-40.6-44.2-43.3-226.7-43.3-226.7z"/>
          </g>
          <path className="st121" d="M509.5 615.1c0-134.1 108.7-242.8 242.8-242.8S995.1 481 995.1 615.1 886.4 857.9 752.3 857.9c-143.7 0-242.8-83.6-242.8-242.8z" id="skin"/>
          <g id="eyes">
              <ellipse cx="648.3" cy="591.3" rx="30.8" ry="51"/>
              <ellipse cx="856.2" cy="591.3" rx="30.8" ry="51"/>
          </g>
          <g id="sunglasses_j-rock">
              <path className="st128" d="M796.3 524.9h112.1v127.9H796.3zM588.4 524.9h112.1v127.9H588.4zM700.5 554h95.8v25.8h-95.8zM908.4 554l78-.6 5.2 25.8-83.2.5"/>
              <path className="st128" d="M591 551.2h-69.5l-8.5 28.5h78z"/>
          </g>
          <g id="moustache_j-rock">
              <path className="st129" d="M785.9 711.5l29.4 15.1-3-15.1-27.2-12.4zM686.9 713.9l29.9-14.4-3.5 15-27.6 11.7z"/>
          </g>
          <path className="st130" d="M779.4 856.8L768 823.5h-32.9L725 856.4s49.7 4.4 54.4.4z" id="beard_j-rock"/>
          <g id="HAT">
              <path className="st130" d="M484.7 508.7h548.9l-41.1-27.9H513.9l-29.2 22.1M959 480.8S921.7 200 743.4 313c1.2 2.3 0 167.8 0 167.8H959z"/>
              <path className="st130" d="M531.9 484.5s35.3-281.1 214.4-169.4c-1.1 2.3 1.2 167.8 1.2 167.8l-215.6 1.6z"/>
              <path className="st131" d="M532.4 480.8H959l-3.9-21.7H536.3z"/>
          </g>
          <g id="musical_notes">
              <g className="music_note" id="music_note1">
                  <ellipse transform="scale(-1) rotate(-16.086 -2826.746 7592.52)" className="st1320" cx="1073" cy="399.4" rx="61.6" ry="38.6"/>
                  <path className="st1320" d="M1105 360.6l-50.7-175.7s102.6-42.3 147.6 96c-19.9-18.7-57.7-65-112.3-46 22.7 73.7 40.7 143 40.7 143"/>
              </g>
              <g className="music_note" id="music_note2">
                  <ellipse transform="scale(-1) rotate(-16.086 -2368.804 9000.845)" className="st1320" cx="1272" cy="334.7" rx="44.5" ry="27.9"/>
                  <path className="st1320" d="M1295.1 306.6l-36.6-127.1s74.2-30.6 106.7 69.4c-14.4-13.5-41.7-47-81.2-33.3 16.4 53.3 29.5 103.4 29.5 103.4"/>
              </g>
              <g className="music_note" id="music_note3">
                  <ellipse transform="scale(-1) rotate(-16.086 -2025.271 10137.473)" className="st1320" cx="1432.6" cy="286.2" rx="31" ry="19.4"/>
                  <path className="st1320" d="M1448.7 266.6l-25.5-88.4s51.6-21.3 74.3 48.3c-10-9.4-29-32.7-56.5-23.2 11.4 37.1 20.5 72 20.5 72"/>
              </g>
          </g>
        </g>
      </svg>
    </Link>
    <p className="genre-info"> J-Rock</p>
      </div>


        <div className="col-md-4">
          <Link to="/jelectro">
          <svg className="genre-icon" id="j-electro" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1567.2 1230.1">
            <g className="music-icon">
            <circle className="st100" cx="768" cy="615.1" r="547.5" id="icon_x5F_circle"/>
            <g id="miku_clothes">
                <path className="st102" d="M756.7 743.8c-110.9 0-200.8 104.1-200.8 232.5 0 64.3 22.6 122.5 59 164.6 48.6 14.1 100 21.7 153.1 21.7 42.5 0 83.9-4.8 123.6-14 40.5-42.5 66-104 66-172.3-.1-128.4-90-232.5-200.9-232.5z"/>
                <path className="st102" d="M747.4 740.9c-110.9 0-200.8 104.1-200.8 232.5 0 64.3 22.6 122.5 59 164.6 48.6 14.1 100 21.7 153.1 21.7 42.5 0 83.9-4.8 123.6-14 40.5-42.5 66-104 66-172.3 0-128.4-89.9-232.5-200.9-232.5z"/>
            </g>
            <g id="collar_miku">
                <path className="st113" d="M752.5 857.9l67 73.3 76.8-120.7zM679.2 931.2l73.3-73.3-139.6-44z"/>
            </g>
            <g id="earphones_miku">
                <path className="st105" d="M988.4 534.4h34.6v152h-34.6z"/>
                <path className="st106" d="M991.2 622.5h21.1v15.1h-21.1zM991.2 646h21.1v15.1h-21.1z"/>
                <path className="st105" d="M477.2 539.1h34.6v152h-34.6z"/>
                <path className="st106" d="M490.6 652h21.1v15.1h-21.1zM490.6 627h21.1v15.1h-21.1z"/>
            </g>
            <path className="st121" d="M509.5 615.1c0-134.1 108.7-242.8 242.8-242.8S995.1 481 995.1 615.1 886.4 857.9 752.3 857.9c-143.7 0-242.8-83.6-242.8-242.8z" id="skin"/>
            <g id="eyes">
                <ellipse cx="648.3" cy="591.3" rx="30.8" ry="51"/>
                <ellipse cx="856.2" cy="591.3" rx="30.8" ry="51"/>
            </g>
            <g id="miku_hair">
                <path className="st125" d="M549.5 477.8H955C911.6 412 837 368.5 752.3 368.5S592.9 412 549.5 477.8z"/>
                <path className="st125" d="M777.3 458.1s-41.4 88.2 0 164.4c-79-70.4-80.2-164.4-80.2-164.4h80.2zM697.1 477.8s-114.3 48.9-119.5 142.9c-4.4-84.3 7-153.5 30.6-162.6s88.9 19.7 88.9 19.7z"/>
                <path className="st125" d="M771.5 473.2S939.2 548.8 951.1 630c-8.5-75.2-83.8-156.8-83.8-156.8l-99.4-3.9"/>
                <path className="st125" d="M900.7 515.6s95.5 40.6 97.1 114.4c5-76.8-35.1-145.9-46.7-158-11.6-12-83.8 1.1-83.8 1.1l33.4 42.5zM591.8 477.8s-76.3 113.6-64.3 251.6c-18-129-9.1-148.3 21.9-251.6h42.4z"/>
                <path className="st125" d="M582.9 438.1s-106.1 77.3-102 209c17.6-38.4 47.7-116.1 63.3-126.5 15.5-10.4 38.7-82.5 38.7-82.5z"/>
            </g>
            <g id="tie_miku">
                <path className="st125" d="M752.5 857.9l30.9 33.1-30.9 35.2-31.4-34.2zM752.5 926.2l46.4 118.6-42.2 117.7-35.6-118.2z"/>
            </g>
            <g id="pigtails_x5F_miku">
                <path className="st125" d="M896.3 415.9c22.7-49.8 85.5-28.4 162.5 51.1 108.9 112.5 170.6 262.1 141.7 412.8-48.3-137.5-71-209-104.2-264.7 27.2 44.1 85.8 174.3 36.3 311.1-3-105.2-13-326.6-146.5-437.7-60-49.9-34.9-16.4-34.9-16.4l-54.9-56.2zM612.9 413.7c-25.5-48.4-87-23.4-159.3 60.4-102.2 118.6-155.1 271.5-117.5 420.2 40.3-140 58.8-212.8 88.7-270.2-24.6 45.6-75.6 179-18.2 312.7-3.1-105.2-6-326.8 120.9-445.5 57-53.3 33.9-18.4 33.9-18.4l51.5-59.2z"/>
            </g>
            <g id="miku_x5F_ornaments">
                <path className="st116" d="M905.9 353l62.7 70.1-17.5 48.9-10.5-13.9 10.5-38.4-45.2-41.2-18.9 30.9-13.4-8.4zM589.7 357.1l-60.1 72.5 19.4 48.2 10-14.4-12-38 43.7-42.8 20 30.1 13.1-8.8z"/>
            </g>
            <g id="musical_notes">
                <g className="music_note" id="music_note1">
                    <ellipse transform="scale(-1) rotate(-16.086 -2826.746 7592.52)" className="st133" cx="1073" cy="399.4" rx="61.6" ry="38.6"/>
                    <path className="st133" d="M1105 360.6l-50.7-175.7s102.6-42.3 147.6 96c-19.9-18.7-57.7-65-112.3-46 22.7 73.7 40.7 143 40.7 143"/>
                </g>
                <g className="music_note" id="music_note2">
                    <ellipse transform="scale(-1) rotate(-16.086 -2368.804 9000.845)" className="st133" cx="1272" cy="334.7" rx="44.5" ry="27.9"/>
                    <path className="st133" d="M1295.1 306.6l-36.6-127.1s74.2-30.6 106.7 69.4c-14.4-13.5-41.7-47-81.2-33.3 16.4 53.3 29.5 103.4 29.5 103.4"/>
                </g>
                <g className="music_note" id="music_note3">
                    <ellipse transform="scale(-1) rotate(-16.086 -2025.271 10137.473)" className="st133" cx="1432.6" cy="286.2" rx="31" ry="19.4"/>
                    <path className="st133" d="M1448.7 266.6l-25.5-88.4s51.6-21.3 74.3 48.3c-10-9.4-29-32.7-56.5-23.2 11.4 37.1 20.5 72 20.5 72"/>
                </g>
            </g>
          </g>
          </svg>
        </Link>
        <p className="genre-info"> J-Electro</p>
        </div>

      </div>
      );
  }
}
