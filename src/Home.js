import React, { Component } from 'react';
import EFForm from './EFForm.js';

export default class Home extends Component {
  render() {
    return (
        <div className="full-height">
          <div className="container home">
            <div className="row">
              <div className="col-xs-12">
              <br/><br/><br/><br/><br/><br/>
                <p className="lead text-center">Find cheap flights with no particular date.</p>
              <div className="well well-ef">
                <EFForm/>
              </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
