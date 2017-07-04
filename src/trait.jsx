import NavButtons from './NavButtons.jsx'
import HairAmount from './fields/HairAmount.jsx'

class Trait extends React.Component {
  onChange(e) {
    e.preventDefault()
    this.props.onInputChange(this.props.item.field, e.target.value)
  }

  render(){
    let hidden = 'hidden'
    if(this.props.currentTrait === this.props.item.id) {
      hidden = ''
    }

    let input = <input name={this.props.item.field} autoFocus='autofocus' onChange={this.onChange.bind(this)}/>
    if(this.props.item.fieldType === 'radio') {
      input = <input name={this.props.item.field} autoFocus='autofocus' onChange={this.onChange.bind(this)}/>
    }

    const icon_src = 'images/' + this.props.item.field + '.svg'
    return (
      <div className={this.props.item.field + ' trait ' + hidden}>
        <img className='trait-icon' src={icon_src} />
        <p className='question'>{this.props.item.question}</p>
        {this.parseField(this.props.item)}
        <NavButtons prevLabel='Back' nextLabel='Next' onPrev={this.props.onPrev} onNext={this.props.onNext}/>
      </div>
    )
  }

  parseField(item) {
    switch(item.field) {
      case 'hair_amount':
        return <HairAmount item={this.props.item.field} onInputChange={this.props.onInputChange} formData={this.props.formData}/>
      default:
        return <input name={this.props.item.field} autoFocus='autofocus' onChange={this.onChange.bind(this)}/>
    }
  }
}

export default Trait
