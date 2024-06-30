import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faUserLarge, faCalendar, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import VehicleTypes from './landingPage/VehicleTypes'
import Limo from './assets/img/sprinter_van.jpg'
import PopularVehicles from './landingPage/PopularVehicles.jsx';
import OnwardCard from './landingPage/OnwardCard.jsx';


function App() {

let [val, setVal]= useState('');

function updateData(name){
setVal(name);
}


function Keywords(props){
return(
<>


    <button className="col-lg-3 col-12 p-2 mt-2 rounded rounded-5 border border-2 mx-1 mainTextColor btn btnHover"
        onClick={()=> updateData(props.name)}>
        {props.name}
    </button>

</>

)

}





function selectDate(){


Swal.fire({
title: "Select date",
input: "date",
didOpen: () => {
const today = (new Date()).toISOString();
Swal.getInput().min = today.split("T")[0];
}
});


}


function selectCount(){

Swal.fire({
title: "Enter no. of person",
input: "number",
inputLabel: "Type no. of person",
showCancelButton: true,
inputValidator: (value) => {
if (!value) {
return "This is requried field!";
}
}
});

}

function selectDestination(){


Swal.fire({
input: "text",
inputLabel: "Where to",
inputPlaceholder: "Enter the destination"
});


}


function ChariotLogo(){
return(
<>
{/* 
    <svg width="250" height="38" viewBox="0 0 348 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M284.057 33.8689C276.473 38.8505 267.471 38.6783 260.538 33.5221C250.416 25.9943 250.544 11.182 260.849 3.90692C267.086 -0.496048 273.866 -1.19953 280.784 1.90826C287.546 4.94622 291.504 10.3311 291.993 17.8234C292.431 24.5231 289.513 29.7787 284.057 33.8689ZM276.562 32.2729C285.803 29.1775 289.798 20.1533 285.465 12.2946C281.104 4.38322 269.649 1.68389 262.115 9.4559C256.106 15.6537 256.652 24.4072 263.279 29.605C267.095 32.5976 271.467 33.3337 276.562 32.2729Z"
            fill="black" />
        <path
            d="M284.057 33.8689C276.473 38.8505 267.471 38.6783 260.538 33.5221C250.416 25.9943 250.544 11.182 260.849 3.90692C267.086 -0.496048 273.866 -1.19953 280.784 1.90826C287.546 4.94622 291.504 10.3311 291.993 17.8234C292.431 24.5231 289.513 29.7787 284.057 33.8689ZM276.562 32.2729C285.803 29.1775 289.798 20.1533 285.465 12.2946C281.104 4.38322 269.649 1.68389 262.115 9.4559C256.106 15.6537 256.652 24.4072 263.279 29.605C267.095 32.5976 271.467 33.3337 276.562 32.2729Z"
            fill="url(#paint0_linear_162_1941)" />
        <path
            d="M10.6338 29.208C13.2735 31.3116 16.2334 32.6628 19.6416 32.7198C24.102 32.7943 28.5645 32.7366 33.026 32.7545C36.6599 32.769 37.3186 33.5883 36.6982 37.3032C30.2012 37.3032 23.6389 37.851 17.2048 37.1757C7.37581 36.1441 0.443234 27.8386 0.617976 18.407C0.788588 9.19832 8.05313 1.19635 17.7656 0.361597C24.0557 -0.179014 30.4299 0.259901 36.7481 0.259901C37.255 4.05085 36.5763 4.85954 32.9627 4.86833C28.5011 4.87917 24.0391 4.83646 19.5781 4.88595C10.2817 4.98907 2.97548 14.5384 6.26634 23.1652C6.92772 24.899 8.18918 26.4036 9.36831 28.2326C9.91969 28.7037 10.2767 28.9558 10.6338 29.208Z"
            fill="black" />
        <path
            d="M10.6338 29.208C13.2735 31.3116 16.2334 32.6628 19.6416 32.7198C24.102 32.7943 28.5645 32.7366 33.026 32.7545C36.6599 32.769 37.3186 33.5883 36.6982 37.3032C30.2012 37.3032 23.6389 37.851 17.2048 37.1757C7.37581 36.1441 0.443234 27.8386 0.617976 18.407C0.788588 9.19832 8.05313 1.19635 17.7656 0.361597C24.0557 -0.179014 30.4299 0.259901 36.7481 0.259901C37.255 4.05085 36.5763 4.85954 32.9627 4.86833C28.5011 4.87917 24.0391 4.83646 19.5781 4.88595C10.2817 4.98907 2.97548 14.5384 6.26634 23.1652C6.92772 24.899 8.18918 26.4036 9.36831 28.2326C9.91969 28.7037 10.2767 28.9558 10.6338 29.208Z"
            fill="url(#paint1_linear_162_1941)" />
        <path
            d="M153.883 32.1942C154.169 32.77 154.454 33.3459 154.852 34.2365C155.365 35.3876 155.766 36.224 156.365 37.4729C154.523 37.4729 153.217 37.4729 151.91 37.4729C151.108 36.5759 150.094 35.7935 149.537 34.764C144.977 26.3479 140.505 17.8841 135.997 9.43962C135.382 8.2868 134.717 7.16055 133.873 5.66426C131.696 9.2784 129.67 12.5416 127.745 15.8635C125.534 19.6789 123.455 23.5711 121.237 27.382C119.914 29.6537 118.394 31.8095 117.033 34.0597C114.713 37.8955 114.736 37.9095 109.655 37.2179C112.037 33.0698 114.35 29.0175 116.687 24.9787C120.859 17.7672 125.047 10.5653 129.222 3.35577C130.209 1.65302 131.367 0.304158 133.555 0.0945703C135.664 -0.107481 136.907 0.389827 137.983 2.50369C142.86 12.0923 147.992 21.5517 153.207 31.3004C153.549 31.7602 153.716 31.9772 153.883 32.1942Z"
            fill="black" />
        <path
            d="M153.883 32.1942C154.169 32.77 154.454 33.3459 154.852 34.2365C155.365 35.3876 155.766 36.224 156.365 37.4729C154.523 37.4729 153.217 37.4729 151.91 37.4729C151.108 36.5759 150.094 35.7935 149.537 34.764C144.977 26.3479 140.505 17.8841 135.997 9.43962C135.382 8.2868 134.717 7.16055 133.873 5.66426C131.696 9.2784 129.67 12.5416 127.745 15.8635C125.534 19.6789 123.455 23.5711 121.237 27.382C119.914 29.6537 118.394 31.8095 117.033 34.0597C114.713 37.8955 114.736 37.9095 109.655 37.2179C112.037 33.0698 114.35 29.0175 116.687 24.9787C120.859 17.7672 125.047 10.5653 129.222 3.35577C130.209 1.65302 131.367 0.304158 133.555 0.0945703C135.664 -0.107481 136.907 0.389827 137.983 2.50369C142.86 12.0923 147.992 21.5517 153.207 31.3004C153.549 31.7602 153.716 31.9772 153.883 32.1942Z"
            fill="url(#paint2_linear_162_1941)" />
        <path
            d="M198.916 10.7885C198.376 6.70245 196.387 4.89634 192.475 4.87698C185.206 4.84101 177.936 4.89171 170.667 4.84431C167.562 4.82406 166.493 3.49655 166.85 0.0672094C168.198 0.0672094 169.579 0.0672849 170.959 0.0671961C178.063 0.0667401 185.167 0.0503344 192.271 0.0708153C197.923 0.0871092 202.321 3.18548 203.519 7.93905C204.755 12.8417 202.401 17.7643 197.337 20.3477C196.18 20.938 194.66 20.8152 192.982 21.07C197.454 26.4746 201.816 31.745 206.369 37.2476C202.723 37.8653 200.013 37.6093 197.635 34.5558C192.873 28.4442 187.7 22.654 182.29 16.2491C185.885 16.2491 189.034 16.2717 192.181 16.2433C195.977 16.2092 197.926 14.6713 198.916 10.7885Z"
            fill="black" />
        <path
            d="M198.916 10.7885C198.376 6.70245 196.387 4.89634 192.475 4.87698C185.206 4.84101 177.936 4.89171 170.667 4.84431C167.562 4.82406 166.493 3.49655 166.85 0.0672094C168.198 0.0672094 169.579 0.0672849 170.959 0.0671961C178.063 0.0667401 185.167 0.0503344 192.271 0.0708153C197.923 0.0871092 202.321 3.18548 203.519 7.93905C204.755 12.8417 202.401 17.7643 197.337 20.3477C196.18 20.938 194.66 20.8152 192.982 21.07C197.454 26.4746 201.816 31.745 206.369 37.2476C202.723 37.8653 200.013 37.6093 197.635 34.5558C192.873 28.4442 187.7 22.654 182.29 16.2491C185.885 16.2491 189.034 16.2717 192.181 16.2433C195.977 16.2092 197.926 14.6713 198.916 10.7885Z"
            fill="url(#paint3_linear_162_1941)" />
        <path
            d="M89.0566 15.8078C89.0566 23.1329 89.0566 30.2098 89.0566 37.2567C84.6166 37.7708 84.0004 37.2342 84.0017 33.0984C84.0033 28.4755 84.0021 23.8526 84.0021 19.0182C83.3137 18.9488 82.694 18.8331 82.0741 18.8319C73.9858 18.8168 65.8975 18.8302 57.8093 18.8093C54.3587 18.8004 53.7205 18.0101 54.1699 14.1879C64.007 14.1879 73.8774 14.1879 83.9727 14.1879C83.9727 9.432 83.9727 4.92022 83.9727 0.458951C88.0181 -0.377916 89.053 0.419569 89.056 4.1623C89.059 7.96143 89.0566 11.7606 89.0566 15.8078Z"
            fill="black" />
        <path
            d="M89.0566 15.8078C89.0566 23.1329 89.0566 30.2098 89.0566 37.2567C84.6166 37.7708 84.0004 37.2342 84.0017 33.0984C84.0033 28.4755 84.0021 23.8526 84.0021 19.0182C83.3137 18.9488 82.694 18.8331 82.0741 18.8319C73.9858 18.8168 65.8975 18.8302 57.8093 18.8093C54.3587 18.8004 53.7205 18.0101 54.1699 14.1879C64.007 14.1879 73.8774 14.1879 83.9727 14.1879C83.9727 9.432 83.9727 4.92022 83.9727 0.458951C88.0181 -0.377916 89.053 0.419569 89.056 4.1623C89.059 7.96143 89.0566 11.7606 89.0566 15.8078Z"
            fill="url(#paint4_linear_162_1941)" />
        <path
            d="M227.339 5.40721C227.339 3.6056 227.339 2.04861 227.339 0.534434C231.159 -0.485839 232.367 0.402645 232.371 4.12803C232.382 14.4373 232.381 24.7465 232.375 35.0558C232.375 35.7779 232.3 36.5 232.261 37.1861C228.204 37.9023 227.338 37.2095 227.337 33.3631C227.334 24.126 227.338 14.8889 227.339 5.40721Z"
            fill="black" />
        <path
            d="M227.339 5.40721C227.339 3.6056 227.339 2.04861 227.339 0.534434C231.159 -0.485839 232.367 0.402645 232.371 4.12803C232.382 14.4373 232.381 24.7465 232.375 35.0558C232.375 35.7779 232.3 36.5 232.261 37.1861C228.204 37.9023 227.338 37.2095 227.337 33.3631C227.334 24.126 227.338 14.8889 227.339 5.40721Z"
            fill="url(#paint5_linear_162_1941)" />
        <path
            d="M326.507 0.0858982C332.368 0.0841665 337.98 0.0771685 343.593 0.0825895C347.139 0.0860138 347.857 1.01818 347.129 4.8755C340.416 4.8755 333.663 4.87563 326.911 4.87544C323.279 4.87534 319.647 4.9004 316.016 4.86681C312.629 4.83549 311.933 3.92628 312.522 0.0858869C317.065 0.0858869 321.662 0.0858868 326.507 0.0858982Z"
            fill="black" />
        <path
            d="M326.507 0.0858982C332.368 0.0841665 337.98 0.0771685 343.593 0.0825895C347.139 0.0860138 347.857 1.01818 347.129 4.8755C340.416 4.8755 333.663 4.87563 326.911 4.87544C323.279 4.87534 319.647 4.9004 316.016 4.86681C312.629 4.83549 311.933 3.92628 312.522 0.0858869C317.065 0.0858869 321.662 0.0858868 326.507 0.0858982Z"
            fill="url(#paint6_linear_162_1941)" />
        <path
            d="M332.082 12.431C332.195 20.8204 332.195 29.0352 332.195 37.2441C328.099 37.861 327.358 37.2643 327.358 33.3754C327.356 26.0415 327.357 18.7076 327.357 10.5894C329.151 11.2377 330.56 11.747 332.082 12.431Z"
            fill="black" />
        <path
            d="M332.082 12.431C332.195 20.8204 332.195 29.0352 332.195 37.2441C328.099 37.861 327.358 37.2643 327.358 33.3754C327.356 26.0415 327.357 18.7076 327.357 10.5894C329.151 11.2377 330.56 11.747 332.082 12.431Z"
            fill="url(#paint7_linear_162_1941)" />
        <defs>
            <linearGradient id="paint0_linear_162_1941" x1="272.534" y1="0" x2="272.534" y2="37.4997"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#806CE8" />
                <stop offset="1" stop-color="#C2A8FB" />
            </linearGradient>
            <linearGradient id="paint1_linear_162_1941" x1="18.7594" y1="0.0917969" x2="18.7594" y2="37.5129"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#806CE8" />
                <stop offset="1" stop-color="#C2A8FB" />
            </linearGradient>
            <linearGradient id="paint2_linear_162_1941" x1="133.01" y1="0.0532227" x2="133.01" y2="37.5658"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#806CE8" />
                <stop offset="1" stop-color="#C2A8FB" />
            </linearGradient>
            <linearGradient id="paint3_linear_162_1941" x1="186.577" y1="0.0605469" x2="186.577" y2="37.519"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#806CE8" />
                <stop offset="1" stop-color="#C2A8FB" />
            </linearGradient>
            <linearGradient id="paint4_linear_162_1941" x1="71.5502" y1="0.156738" x2="71.5502" y2="37.4187"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#806CE8" />
                <stop offset="1" stop-color="#C2A8FB" />
            </linearGradient>
            <linearGradient id="paint5_linear_162_1941" x1="229.857" y1="0.141602" x2="229.857" y2="37.4357"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#806CE8" />
                <stop offset="1" stop-color="#C2A8FB" />
            </linearGradient>
            <linearGradient id="paint6_linear_162_1941" x1="329.859" y1="0.0805664" x2="329.859" y2="4.88433"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#806CE8" />
                <stop offset="1" stop-color="#C2A8FB" />
            </linearGradient>
            <linearGradient id="paint7_linear_162_1941" x1="329.776" y1="10.5894" x2="329.776" y2="37.4531"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#806CE8" />
                <stop offset="1" stop-color="#C2A8FB" />
            </linearGradient>
        </defs>
    </svg> */}

</>

);

}

function Logo(){

return(
<>
    <div className="container d-flex justify-content-center flex-column align-items-center mb-5">
    <h3 className="text-center mb-5 mainTextColor">

        <ChariotLogo />

    </h3>

    <div className="col-12 text-center mt-2">

        <p className="mainTextColor header1">The Best Party Bus Rentals Near Me</p>
        <p className="mainTextColor">Browse. Book and ridelike the Romans with local drivers</p>
    </div>


    <div
        className="col-lg-6 col-xl-6 col-md-6 col-10 d-flex flex-lg-row flex-column border border-2 rounded-3 shadow p-2">

        <button className="col-lg-3 col-12 p-2 btn text-start" onClick={selectDestination}>
            <FontAwesomeIcon icon={faLocationDot} className='mx-2' />
            Where to?
        </button>

        <button className="col-lg-3 col-12 p-2 btn text-start" onClick={selectCount}>
            <FontAwesomeIcon icon={faUserLarge} className='mx-2' />
            Who's in?
        </button>
        <button className="col-lg-3 col-12 p-2 btn text-start" onClick={selectDate}>
            <FontAwesomeIcon icon={faCalendar} className='mx-2' />
            When?
        </button>

        <div className="col-lg-3 col-12 p-2 text-center rounded rounded-5 searchBtn">
            <a href="#" className="p-2 text-white ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
        </div>

    </div>


    <div className="col-12 mt-5 d-flex justify-content-center flex-column">

        <h4 className="text-center mainTextColor">Suggested Searches</h4>

        <div className="row d-flex justify-content-center align-items-center ">

            <div
                className="col-6 d-flex justify-content-center align-items-center text-center mt-2 flex-lg-row flex-column">

                <Keywords name="8-10 people" />
                <Keywords name="Under $100" />
                <Keywords name="This Weekend" />

                {val}

            </div>




        </div>





    </div>

</div>

    
    









</>






)


}


return (
<>

    <div className="container-fluid">

        <div className="row d-flex  justify-content-center align-items-center">
            {Logo()}
        </div>


        <div className="row d-flex align-items-center justify-content-center m-auto">
    
        <h3 className="text-center">Types of Vehicles Near Me</h3>
            <VehicleTypes img={Limo} left='Limousine Rentals' right='Starting at $200.' />
            <VehicleTypes img={Limo} left='Limousine Rentals' right='Starting at $200.' />
            <VehicleTypes img={Limo} left='Limousine Rentals' right='Starting at $200.' />
    </div>
    </div>

    <div className='bg-light'>
        <PopularVehicles/>
    </div>

    <OnwardCard/>






    {/* <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
    <h1>Vite + React</h1>
    <div className="card">
        <button onClick={()=> setCount((count) => count + 1)}>
            count is {count}
        </button>
        <p>
            Edit <code>src/App.jsx</code> and save to test HMR
        </p>
    </div>
    <p className="read-the-docs">
        Click on the Vite and React logos to learn more
    </p> */}
</>
)
}

export default App
