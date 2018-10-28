import React, { Component } from 'react';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  initialValues: { firstName: 'BlahBklah', secondName: 'secondName' },
});

class ReduxFormExample extends Component {
  render() {
    const { handleAction, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(handleAction)}>
        <div>
          <label>First Name</label>
          <div>
            <Field
              name='firstName'
              component='input'
              type='text'
              placeholder='First Name'
            />
          </div>
          <div>
            <Field
              name='secondName'
              component='input'
              type='text'
              placeholder='secondName'
            />
          </div>
        </div>
        <div>
          <button
            disabled={pristine || submitting}
            type='submit'
          >
            Submit
          </button>
          <button type='button' disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    );
  }
}

export default compose(
  connect(mapStateToProps),
  reduxForm({ form: 'simple' }),
)(ReduxFormExample);
