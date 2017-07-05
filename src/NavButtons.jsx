class NavButtons extends React.Component {
  render(){
    let backButton = (
      <button onClick={this.props.onPrev}>
        <i className='fa fa-chevron-left fa-3x' ></i>
        <span>{this.props.prevLabel}</span>
      </button>
    )
    if(!this.props.hasBack) {
      backButton = ''
    }

    let nextButton = (
      <button onClick={this.props.onNext}>
        <i className='fa fa-chevron-right fa-3x' ></i>
        <span>{this.props.nextLabel}</span>
      </button>
    )
    if (!this.props.hasNext) {
      nextButton = ''
    }

    return (
      <div>
        {backButton}
        {nextButton}
      </div>
    )
  }
}

export default NavButtons
