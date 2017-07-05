class NavButtons extends React.Component {
  render(){
    let backButton = (
      <div className='back-button'>
        <button onClick={this.props.onPrev}>
          <i className='fa fa-chevron-left fa-3x' ></i>
          <span>{this.props.prevLabel}</span>
        </button>
      </div>
    )
    if(!this.props.hasBack) {
      backButton = <div className='back-button'><button></button></div>
    }

    let nextButton = (
      <div className='next-button'>
        <button onClick={this.props.onNext}>
          <i className='fa fa-chevron-right fa-3x' ></i>
          <span>{this.props.nextLabel}</span>
        </button>
      </div>
    )
    if (!this.props.hasNext) {
      nextButton = <div className='next-button'><button></button></div>
    }

    return (
      <div className='nav-buttons'>
        {backButton}
        {nextButton}
      </div>
    )
  }
}

export default NavButtons
