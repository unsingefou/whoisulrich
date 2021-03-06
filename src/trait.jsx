import NavButtons from './NavButtons.jsx'
import HairAmount from './fields/HairAmount.jsx'
import Height from './fields/Height.jsx'
import Weight from './fields/Weight.jsx'
import Outfit from './fields/Outfit.jsx'

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
    let icon_src = null
    if (this.props.item.field) {
      icon_src = 'images/' + this.props.item.field + '.svg'
    }

    return (
      <div className={this.props.item.field + ' trait ' + hidden}>
        <img className='trait-icon' src={icon_src} />
        <p className='question'>{this.props.item.question}</p>
        <div className={this.props.item.field + ' input-wrapper'}>
          {this.parseField(this.props.item)}
        </div>
        <NavButtons hasNext={this.props.item.hasNext}
          hasBack={this.props.item.hasBack}
          hasSubmit={this.props.item.hasSubmit}
          backLabel='Back'
          nextLabel='Next'
          onBack={this.props.onBack}
          onNext={this.props.onNext}
          onSubmit={this.props.onSubmit}
        />
      </div>
    )
  }

  parseField(item) {
    switch(item.field) {
      case 'hair_amount':
        return <HairAmount onInputChange={this.props.onInputChange} formData={this.props.formData}/>
      case 'height':
        return <Height onInputChange={this.props.onInputChange} formData={this.props.formData}/>
      case 'weight':
        return <Weight onInputChange={this.props.onInputChange} formData={this.props.formData}/>
      case 'outfit':
        return <Outfit onInputChange={this.props.onInputChange} formData={this.props.formData}/>
      default:
        return <input name={this.props.item.field} autoFocus='autofocus' onChange={this.onChange.bind(this)}/>
    }
  }
}

export default Trait
