import './error.css'

export const ErrorMessage = ({ error }) => {
  // super simple error message component
  // depending on the scope of the porject, this could be
  // anything from a simple div, to a modal, to a toast
  // that tells the user that something happened
  // for this example, we are just going to use a div
  // and display the error message to the user
  return (
    <div className="error">
      An error Occurred:
      <div>Message: {error.message}</div>
    </div>
  )
}