import classes from '../components/css/PaginationComponent.module.css';
import { useState } from 'react';

function PaginationComponent({ data, RenderComponent, dataLimit , handleOnClick}) {


    const [currentPage, setCurrentPage] = useState(1);

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }


    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    const leftVisible = !(currentPage * dataLimit - dataLimit === 0);
    const rightVisible = !(currentPage * dataLimit >= data.length);

    return (
        <div className={classes.container}>
            {/* <div>
                <img src={require('../../assets/RightArrow.svg')} />
            </div> */}
            {leftVisible && <svg width="75" height="75" viewBox="0 0 72 141" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={goToPreviousPage}>
                <path d="M71.255 140.255L21.015 90.6152L0.515015 70.3652L21.015 50.1152L41.505 70.3652L71.255 99.7552V140.255Z" fill="#EDECF4" />
                <path d="M21.015 90.6153L0.515015 70.3653L21.015 50.1154L71.255 0.485352L71.255 40.9754L41.505 70.3653L21.015 90.6153Z" fill="url(#paint0_linear_1653_150)" />
                <defs>
                    <linearGradient id="paint0_linear_1653_150" x1="35.8867" y1="0.483152" x2="35.8867" y2="90.6203" gradientUnits="userSpaceOnUse">
                        <stop offset="0.1229" stop-color="#DA4D26" />
                        <stop offset="0.5114" stop-color="#E66525" />
                        <stop offset="0.9442" stop-color="#F47B21" />
                    </linearGradient>
                </defs>
            </svg>}
            <div className={classes.content}>
                {
                    getPaginatedData().map((item, index) => (<RenderComponent key={item.id} data={item} onClick={handleOnClick}/>))
                }
            </div>
            {/* <div>
                <img src={require('../../assets/RightArrow.svg')} />
            </div> */}
            {rightVisible && <svg width="75" height="75" viewBox="0 0 72 141" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={goToNextPage}>
                <path d="M0.515015 0.485001L50.755 50.125L71.255 70.375L50.755 90.625L30.265 70.375L0.515015 40.985L0.515015 0.485001Z" fill="#EDECF4" />
                <path d="M50.755 50.1251L71.255 70.3751L50.755 90.6251L0.515015 140.255L0.515015 99.7651L30.265 70.3751L50.755 50.1251Z" fill="url(#paint0_linear_1653_150)" />
                <defs>
                    <linearGradient id="paint0_linear_1653_150" x1="35.8833" y1="140.257" x2="35.8833" y2="50.1201" gradientUnits="userSpaceOnUse">
                        <stop offset="0.1229" stop-color="#DA4D26" />
                        <stop offset="0.5114" stop-color="#E66525" />
                        <stop offset="0.9442" stop-color="#F47B21" />
                    </linearGradient>
                </defs>
            </svg>
            }

        </div>
    );
}

export default PaginationComponent