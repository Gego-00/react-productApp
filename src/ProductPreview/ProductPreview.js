import React from "react";
import classes from './ProductPreview.module.css'

const ProductPreview = (props) => {
    const currentHour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours();
    const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes() : '0' + new Date().getMinutes();
    
    return (
        <div className={classes.ProductPreview}>
            <img src={props.currentPreviewImagePos} alt="Product Preview" />

            {
                props.currentSelectedFeature === 1 ?
                <div className={classes.HeartBeatSection}>
                    <i class="fas fa-heartbeat"></i>
                    <p>78</p>
                </div>
                :
                <div className={classes.TimeSection}>
                    <p>{`${currentHour}:${currentMinutes}`}</p>
                </div>
            }
        </div>
    );
}

export default ProductPreview;