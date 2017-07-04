class HairAmount extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 'none'
    }
  }

  onChange(e) {
    this.setState({selected: e.target.value})
    this.props.onInputChange('hair_amount', e.target.value)
  }

  render() {
    console.log(this.state.selected)
    return (
      <div className='hair-amount'>
        <div className='center-on-page'>
          <input id='radio1' type="radio" value="none"
            checked={this.state.selected === 'none'}
            onChange={this.onChange.bind(this)}/>
          <label htmlFor='radio1'>None</label>
          <input id='radio2' type="radio" value="little"
            checked={this.state.selected === 'little'}
            onChange={this.onChange.bind(this)}/>
          <label htmlFor='radio2'>A little</label>
          <input id='radio3' type="radio" value="ton"
            checked={this.state.selected === 'ton'}
            onChange={this.onChange.bind(this)}/>
          <label htmlFor='radio3'>A Ton</label>
        </div>
      </div>
    )
  }
}

export default HairAmount
