/*
* SurveyNew shows SurveyForm and SurveyFormReview
*/
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  // create-react-app shortcut to constructor
  // 100% equivalent to constructor(props) { super(props) this.state = {} };
  // this is component level state, not redux
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

// Redux Form is instantiated here on the parent component
// clears form when user leaves survey form
export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
