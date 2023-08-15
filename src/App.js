import React, { Component } from 'react';
import classes from './App.module.css';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/Topbar';
import ProductData from './utils/ProductData';

class App extends Component {

  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0
  }

  onColorChangeClick = (pos) => {
    this.setState({currentPreviewImagePos: pos})
  }

  onFeatureSelect = (pos) => {
    /* console.log(currentSelectedFeature) */
    this.setState({currentSelectedFeature: pos})
  }

  render() {
    return (
      <div className="App">
        <Topbar />

        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImagePos={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
                            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>

          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} 
                            onColorChangeClick={this.onColorChangeClick} 
                            currentPreviewImagePos={this.state.currentPreviewImagePos} 
                            onFeatureSelect={this.onFeatureSelect} 
                            currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
