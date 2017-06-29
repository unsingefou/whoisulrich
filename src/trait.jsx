import NavButtons from './NavButtons.jsx'

class Trait extends React.Component {
  onChange(e) {
    e.preventDefault()
    this.props.onInputChange(this.props.item.field, e.target.value)
  }

  render(){
    let hidden = 'hidden'
    if(this.props.currentTrait === this.props.index) {
      hidden = ''
    }
    const icon_src = 'images/' + this.props.item.field + '.svg'
    return (
      <div className={this.props.item.field + ' trait ' + hidden}>
        <img className='trait-icon' src={icon_src} />
        <p className='question'>{this.props.item.question}</p>
        <input name={this.props.item.field} autoFocus='autofocus' onChange={this.onChange.bind(this)}/>
        <NavButtons prevLabel='Back' nextLabel='Next' onPrev={this.props.onPrev} onNext={this.props.onNext}/>
      </div>
    )
  }
}

export default Trait
