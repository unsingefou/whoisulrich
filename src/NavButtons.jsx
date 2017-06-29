class NavButtons extends React.Component {
  render(){
    return (
      <div>
        <button onClick={this.props.onPrev}>
          <i className='fa fa-chevron-left fa-3x' ></i>
          <span>{this.props.prevLabel}</span>
        </button>
        <button onClick={this.props.onNext}>
          <i className='fa fa-chevron-right fa-3x' ></i>
          <span>{this.props.nextLabel}</span>
        </button>
      </div>
    )
  }
}

export default NavButtons
