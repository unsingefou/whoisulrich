class HairAmount extends React.Component {
  onChange(e) {
    this.props.onInputChange('hair_amount', e.target.value)
  }

  render() {
    return (
      <div className='hair-amount'>
        <div className='center-on-page'>
          <input id='radio1' type="radio" value="none"
            checked={this.props.formData.hair_amount === 'none'}
            onChange={this.onChange.bind(this)}/>
          <label htmlFor='radio1'>None</label>
          <input id='radio2' type="radio" value="little"
            checked={this.props.formData.hair_amount === 'little'}
            onChange={this.onChange.bind(this)}/>
          <label htmlFor='radio2'>A little</label>
          <input id='radio3' type="radio" value="ton"
            checked={this.props.formData.hair_amount === 'ton'}
            onChange={this.onChange.bind(this)}/>
          <label htmlFor='radio3'>A Ton</label>
        </div>
      </div>
    )
  }
}

export default HairAmount
