class NavButtons extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      submitting: false
    }
  }

  onSubmit() {
    this.setState({submitting: true})
    this.props.onSubmit()
  }

  render(){
    let backButton = (
      <div className='back-button'>
        <button onClick={this.props.onBack}>
          <i className='fa fa-chevron-left fa-3x' ></i>
          <span>{this.props.backLabel}</span>
        </button>
      </div>
    )
    if(!this.props.hasBack) {
      backButton = <div className='back-button'><button></button></div>
    }

    let onNext = this.props.onNext
    let nextLabel = this.props.nextLabel
    if(this.props.hasSubmit) {
      onNext = this.onSubmit.bind(this)
      nextLabel = 'SUBMIT'
    }

    let nextButton = (
      <div className='next-button'>
        <button onClick={onNext}>
          <span>{nextLabel}</span>
          <i className='fa fa-chevron-right fa-3x' ></i>
        </button>
      </div>
    )

    return (
      <div className='nav-buttons'>
        {backButton}
        {nextButton}
      </div>
    )
  }
}

export default NavButtons
