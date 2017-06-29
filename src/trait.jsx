class Trait extends React.Component {
  onChange(e) {
    e.preventDefault()
    this.props.onInputChange(this.props.item.field, e.target.value)
  }

  render(){
    let trait = null
    if(this.props.currentTrait === this.props.index) {
      const icon_src = 'images/' + this.props.item.field + '.svg'
      return (
        <div className={this.props.item.field + ' trait'}>
          <img className='trait-icon' src={icon_src} />
          <p className='question'>{this.props.item.question}</p>
          <input name={this.props.item.field} autoFocus='autofocus' onChange={this.onChange.bind(this)}/>
          <div onClick={this.props.onNext} className='next-wrapper'>
            <i className='fa fa-chevron-right fa-3x' ></i>
            <span>NEXT</span>
          </div>
        </div>
      )
    }
    return (
      <div></div>
    )
  }
}

export default Trait
