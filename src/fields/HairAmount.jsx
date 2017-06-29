class HairAmount extends React.Component {
  onChange(e) {
    e.preventDefault()
    this.props.onInputChange('hair_amount', e.target.value)
  }

  render() {
    return (
      <div className='hair-amount'>
        <div className='center-on-page'>
          <input id='radio1' type="radio" name="hair_amount" value="none" onChange={this.onChange.bind(this)}/>
          <label htmlFor='radio1'>None</label>
          <input id='radio2' type="radio" name="hair_amount" value="little" onChange={this.onChange.bind(this)}/>
          <label htmlFor='radio2'>A little</label>
          <input id='radio3' type="radio" name="hair_amount" value="ton" onChange={this.onChange.bind(this)}/>
          <label htmlFor='radio3'>A Ton</label>
          {/* checked={this.state.selectedOption === 'none'} */}
        </div>
      </div>
    )
  }
}

export default HairAmount
