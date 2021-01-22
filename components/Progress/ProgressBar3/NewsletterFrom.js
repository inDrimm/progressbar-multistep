import React from "react";
import { withFormik } from "formik";
import Yup from "yup";

const NewsletterForm = (props) => {
  const {
    // Formik HOC props
    values,
    touched,
    errors,
    isSubmitting,
    onChange,
    handleSubmit,

    // Loki props
    backLabel,
    nextLabel,
    onBack,
    onNext,
    cantBack,
    isInFinalStep,
  } = props;

  return (
    <form onSubmit={handleSubmit} className="p-1">
      <div className="form-check">
        <label htmlFor="receiveNewsletter" className="form-check-label">
          <input type="checkbox" className="form-check-input" name="receiveNewsletter" id="receiveNewsletter" onChange={onChange} />
          Register for newsletter
        </label>
        {errors.receiveNewsletter && touched.receiveNewsletter && <span>{errors.receiveNewsletter}</span>}
      </div>

      <button type="button" className="btn btn-secondary" onClick={onBack} disabled={isSubmitting || cantBack}>
        {backLabel}
      </button>
      <button type="submit" className="btn btn-primary ml-1" disabled={isSubmitting}>
        {nextLabel}
      </button>
    </form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => ({
    receiveNewsletter: props.user.receiveNewsletter,
  }),

  validationSchema: Yup.object().shape({
    receiveNewsletter: Yup.boolean(),
  }),

  handleSubmit: (values, { props }) => {
    props.onNext(values);
  },
})(NewsletterForm);
