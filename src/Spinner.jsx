const Spinner = ({showSpinner}) => {
  if(showSpinner) {
    return (
      <div className='spinner'>
        <i className='fa fa-spinner'></i>
      </div>
    )
  } else {
    return null
  }
}

export default Spinner
