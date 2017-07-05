class Height extends React.Component {
  onInputChange(e) {
    this.props.onInputChange('height', e.target.value)
  }

  render() {
    return (
      <div>
        <input name='height' autoFocus='autofocus' type='number'
          onChange={this.onInputChange.bind(this)}
          value={this.props.formData.height}/>
        <label>inches</label>
      </div>
    )
  }
}

export default Height
