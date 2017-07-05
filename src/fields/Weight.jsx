class Weight extends React.Component {

  lbsChange(e) {
    this.props.onInputChange('weight_lbs', e.target.value)
  }
  ozChange(e) {
    this.props.onInputChange('weight_oz', e.target.value)
  }

  render() {
    return (
      <div>
        <input autoFocus='autofocus' onChange={this.lbsChange.bind(this)}
          value={this.props.formData.weight_lbs} type='number'/>
        <label>lbs</label>
        <input onChange={this.ozChange.bind(this)}
          value={this.props.formData.weight_oz} type='number'/>
        <label>oz</label>
      </div>
    )
  }
}

export default Weight
